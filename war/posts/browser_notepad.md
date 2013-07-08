----
title: Use your browser as Notepad
date:   2013-7-8
----

We all uses notepad or sticky note or some editor to take immediate notes on something like phone number, code snippet. Recently i came to know that we can use our browser just like notepad. The trick hacks around [Data URI scheme](http://en.wikipedia.org/wiki/Data_URI_scheme) and html [contenteditable](http://www.w3schools.com/tags/att_global_contenteditable.asp) attribute.

All you need to do is type the following code into the browser's URL bar:

```
data:text/html, <html contenteditable>
```

It will make your page as editable just like notepad. If you want to save your content, do the usual browser save(**CMD+S** for OSX). It will save your content as html file. You can also bookmark above data url to make it easier.

Web is awesome. Have a nice day.