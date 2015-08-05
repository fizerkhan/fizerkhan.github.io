{
  title: 'Tips and Tricks of OSX makes you smile',
  date: '2013-10-2'
}

I love to work with Mac OSX. Few days before, i came across the [Tips and Tricks of OSX in Stack Exchange answers](http://apple.stackexchange.com/questions/400/please-share-your-hidden-os-x-features-or-tips-and-tricks). It is mind blowing and has lot more stuff to learn. I like to share tips and tricks that i like and using regularly.

### Quick Look in Finder

When you are in `Finder` and wanted to check the content of a file, you typically double click the item.  Instead you can hit the `Spacebar` to have quick look. It is much faster than opening the file.


### Spotlight Search and its Calculator

Spotlight Search can be opened by hitting `⌘ + space`.

The Spotlight search can also handle simple mathematical expressions.
You can type any simple math expression, it will give you the answer.


### Show Hidden files in Finder

By default, The `Finder` hide the hidden files which starts with .(dot). To set `Finder` to show hidden files, run following command in the terminal

```
defaults write com.apple.finder AppleShowAllFiles TRUE

killall Finder
```

Reopen `Finder`. Now it will show hidden files.

You can use `⌘ + ⇧ + .` that will show hidden files in any file-open dialog box.

### Finder Window Shortcuts

In Finder window or Open/Save dialog,

```
⌘ + ⇧ + G - Get a location bar from which you can type
⌘ + I     - Info window shows for the selected item.
⌘ + F     - Cursor jumps to the Find text field
⌘ + R     - Reveals the selected item in a new Finder window.
```

In Open/Save dialog,

```
⌘ + D     - Selects the Desktop folder as a destination
```

### Show and Hide Desktop Icons

When you do presentation or in meeting, you do not want others to see your desktop.
You can use following commands to hide and show desktop icons.

To Hide Desktop icons

```
defaults write com.apple.finder CreateDesktop -bool false && killall Finder
```

To Show Desktop icons

```
defaults write com.apple.finder CreateDesktop -bool true && killall Finder
```

### Screenshot shortcuts

You can use following shortcuts to take screenshots. Kudos to [screenshot-secret](http://oreilly.com/digitalmedia/2006/01/01/mac-os-x-screenshot-secrets.html)


`⌘+⇧+3`      -  Capture entire screen and save as a file

`⌘+ctrl+⇧+3` -  Capture entire screen and copy to the clipboard

`⌘+⇧+4`      -  Capture dragged area and save as a file

`⌘+ctrl+⇧+4` -  Capture dragged area and copy to the clipboard

`⌘+⇧+4 then space`      -  Capture a window, menu, desktop icon, or the menu bar and save as a file

`⌘+ctrl+⇧+4 then space` -  Capture a window, menu, desktop icon, or the menu bar and copy to the clipboard


### Clipboard copy and paste from Terminal

You may want to copy output of some command to clipboard, then use `pbcopy`

```
echo "I am going to clipboard" | pbcopy
```

Save clipboard contents to file

```
pbpaste > myfile.txt
```

### Start Quick Web server

Start a quick web server by

```
python -m SimpleHTTPServer
```

It will start web server port 8000 and serve files in the current directory.
To start in a specific port

```
python -m SimpleHTTPServer 8080
```

### Useful command on Terminal

You can use `open` command to open any application and any file.

```
open .            # Open current folder in the Finder.
open -a Firefox   # To open application. Use -a option
open ticket.pdf   # To open a file. It will open PDF in default application.
```

For Non-English speaker like me, it always find difficulties in pronouncing the word :) You can use `say` to know how to pronounce


```
say Hello World
```


### View More information on Menu bar icons

Holding `⌥` while clicking menu bar icon will give you additional menu items.

Hold `Option ⌥` + Click Battery Menulet, it will show battery condition.


Have a nice day.



