{
  title: "What I learned from other's shell scripts",
  date: '2013-8-14'
}

I am big fan of shell scripts and so love to learn interesting stuff from other's shell scripts. Recently i came across the [authy-ssh](https://github.com/authy/authy-ssh) scripts which eases two-factor authentication for ssh servers. When i walk through scripts, i learned lot of cool things that i am going to share it with you.

### Colors your echo

Lots of time, you want to color your echo output like green for success, red for failure, yellow for warning.

```bash
NORMAL=$(tput sgr0)
GREEN=$(tput setaf 2; tput bold)
YELLOW=$(tput setaf 3)
RED=$(tput setaf 1)

function red() {
    echo -e "$RED$*$NORMAL"
}

function green() {
    echo -e "$GREEN$*$NORMAL"
}

function yellow() {
    echo -e "$YELLOW$*$NORMAL"
}

# To print success
green "Task has been completed"

# To print error
red "The configuration file does not exist"

# To print warning
yellow "You have to use higher version."

```

It uses `tput` to set a colors and place the text and reset the color to normal.
To know more about `tput`, refer [prompt-color-using-tput](http://linux.101hacks.com/ps1-examples/prompt-color-using-tput/)

### To print debug information

Print debug information only if debug flag is set.

```bash
function debug() {
    if [[ $DEBUG ]]
    then
        echo ">>> $*"
    fi
}

# For any debug message
debug "Trying to find config file"

```

Some Cool geeks give one line debug function

```bash
# From cool geeks at hacker news
function debug() { ((DEBUG)) && echo ">>> $*"; }
function debug() { [ "$DEBUG" ] && echo ">>> $*"; }
 ```

### To check specific executable exists or not

```
OK=0
FAIL=1

function require_curl() {
    which curl &>/dev/null
    if [ $? -eq 0 ]
    then
      return $OK
    fi

    return $FAIL
}
```

It uses `which` command to find the path of `curl` executable. If it succeeds, then the executable exists, Otherwise not. The `&>/dev/null` puts both output stream and error stream to `/dev/null` (which means nothing printed on console).

Some Cool geeks suggest me that we can directly returns the `which` return code

```bash
# From cool geeks at hacker news
function require_curl() { which "curl" &>/dev/null; }
function require_curl() { which -s "curl"; }
 ```


### To print usage of scripts

When i start writing shell scripts, i used echo commands to print the usage of the scripts. The echo commands becomes messy when we have large text for usage.
Then i found `cat` command used to print usage.

```

cat << EOF

Usage: myscript <command> <arguments>

VERSION: 1.0

Available Commands

    install - Install package

    uninstall - Uninstall package

    update - Update package

    list - List packages

EOF
```

The `<<` is called as [here document](http://www.tldp.org/LDP/abs/html/here-docs.html). It takes string between two *EOF*.


### User configured value vs Default value

Sometime, we want to use default value if user does not set the value.

```bash
URL=${URL:-http://localhost:8080}
```

It checks for URL environment variable. If not exists, then it is assigned to `localhost`.


### To check the length of the string

```bash
if [ ${#authy_api_key} != 32 ]
then
  red "you have entered a wrong API key"
  return $FAIL
fi
```

The `${#VARIABLE_NAME}` gives the length of the value of the variable.


### To read inputs with timeout

```bash
READ_TIMEOUT=60
read -t "$READ_TIMEOUT" input

# if you do not want quotes, then escape it
input=$(sed "s/[;\`\"\$\' ]//g" <<< $input)

# For reading number, then you can escape other characters
input=$(sed 's/[^0-9]*//g' <<< $input)
```

### To get directory name and file name

```bash

# To find base directory
APP_ROOT=`dirname "$0"`

# To find the file name
filename=`basename "$filepath"`

# To find the file name without extension
filename=`basename "$filepath" .html`

```

Happy Scripting and Have a nice day.


