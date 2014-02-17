----
title: Use your browser as Notepad
date:   2013-7-8
----

We all uses notepad or sticky note or some editor to take immediate notes on something like code snippet, ideas, blog content, todo. Recently i came to know that we can use our browser just like notepad. The trick hacks around [Data URI scheme](http://en.wikipedia.org/wiki/Data_URI_scheme) and html [contenteditable](http://www.w3schools.com/tags/att_global_contenteditable.asp) attribute.

All you need to do is type the following code into the browser's URL bar:

```
data:text/html, <html contenteditable>
```

It will make your page as editable just like notepad. If you want to save your content, do the usual browser save(**CMD+S** for OSX). It will save your content as html file. You can also bookmark above data url to make it easier.

After i share this post in [Hacker News](https://news.ycombinator.com/item?id=6005295), i got cool new things from cool guys.


Editor with little bit styles by [bichiliad](https://news.ycombinator.com/user?id=bichiliad)

```
data:text/html, <html contenteditable><style>body {color: #333; width: 960px; margin: 0 auto; display: block; height: 100%; font-size: 36px; padding: 20px;}</style></html>
reply
```

Theme that changes the background color as you type by [bgrins](https://coderwall.com/bgrins)

```
data:text/html, <html><head><link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'><style type="text/css"> html { font-family: "Open Sans" } * { -webkit-transition: all linear 1s; }</style><script>window.onload=function(){var e=false;var t=0;setInterval(function(){if(!e){t=Math.round(Math.max(0,t-Math.max(t/3,1)))}var n=(255-t*2).toString(16);document.body.style.backgroundColor="#ff"+n+""+n},1e3);var n=null;document.onkeydown=function(){t=Math.min(128,t+2);e=true;clearTimeout(n);n=setTimeout(function(){e=false},1500)}}</script></head><body contenteditable style="font-size:2rem;line-height:1.4;max-width:60rem;margin:0 auto;padding:4rem;">
```

I love this. Sublime Text Flavor with Ace by [thinkxl](https://news.ycombinator.com/user?id=thinkxl)

```
data:text/html,<title>DoJS</title><style type="text/css">#e{font-size: 16px; position:absolute;top:0;right:0;bottom:0;left:0;}</style><div id="e"></div><script src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8"></script><script>var e=ace.edit("e");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/javascript");</script>
```

Web is awesome. Have a nice day.