----
title: Every Programmer should use IRC
date:   2013-11-3
----

I am a very average programmer, but like to learn new things from others. We have lot of medium to learn something new, interesting and useful. As a programmer, i use `Google Search`, `Stack Overflow` and `Github` to get to know new things and the answers for my questions. But most of the time,
when i see the answers, there are multiple questions and other solutions(Mostly Stupid) come out from my brain. Even though, i can reply or add comment to questions in `Stack Overflow` and `Github issues`, they are not very humanized. I mean, it is not like interacting with real human and have continuous conversation in a moment when we have lot of things going around mind, not like getting reply after two hours and sometimes two days.

### What is IRC

IRC is the greatest medium to have humanized conversation where you can clarify your doubts, learn new things. In the top of all, it is a place to meet amazing talented personalities.

From Wikipedia

```
Internet Relay Chat (IRC) is a protocol for live interactive Internet text messaging (chat) or synchronous conferencing. It is mainly designed for group communication in discussion forums, called channels, but also allows one-to-one communication via private message as well as chat and data transfer, including file sharing.
```

IRC consists of channels. Channel is something like a chat room, but it will be dedicated for some technology or language, ex: #html, #css, #javascript, #go-lang. You can go to any channel and ask questions or just listen and learn from other's discussion.

I am using [Freenode](http://webchat.freenode.net/) which is a widely used open IRC server.

### Register your nickname

In IRC, you will be addressed by your nickname. It is good to register your nick name.
But it is not mandatory to register your nick name to access IRC channel.


1. Visit [http://webchat.freenode.net/](http://webchat.freenode.net/)
2. Enter your nick name
3. Enter `Captcha` and `Connect`

To register your nick name,

```
/msg NickServ REGISTER password youremail@example.com
```

Once you registered, email is sent to you and just copy and paste the VERIFY command in IRC.
Now you own the nick name, no one can use the same nick name. Even if someone try to use, it will
be suffixed by underscore(_)

### Login with your nick name

Whenever you enter IRC, you have to identify your nickname with password by

```
/msg nickserv identify yourpassword
```

### Join Channel

If you want to go to particular channel, then type `/join #channelname`.
Lets say if you want to go to `c` language channel, type `/join #c`

Incase you do not know the channel name, then go and search [here](http://irc.netsplit.de/channels/)

Once you join the channel, you can ask questions or listen others.

### Other useful commands

```
/msg <name>         - Sends a short message to a person privately.
/whois <name>       - Get a short description of who a person is.
/nick  <name>       - Change your nick name
/me                 - Sends an action to the channel.
/away <message>     - Sets an away message.
/quit <last words>  - Quits and allows you a final message before quitting.
/clear              - Clears a channel's text.
/clear all          - Clears a channel's text.

```

When you use IRC, you must follow some etiquette which is defined precisely by
[Christoph Haas](https://workaround.org/getting-help-on-irc).

Regarding IRC client, apart from web, there are other IRC client application available.
You can checkout [here](http://en.wikipedia.org/wiki/Comparison_of_Internet_Relay_Chat_clients)


IRC taught me a lot. I hope, you will feel the same after using it.
Have a nice day.




