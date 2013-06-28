----
title: Social sharing buttons
date:   2013-6-27
----

Social sharing buttons becomes essential to all pages available on the web.
If you write blog, then you cannot avoid social buttons on your blog. I like to share the social sharing button snippets which i collected from web. I believe, anything is taken from web must be given back to web.

### Twitter

```html
<!-- Place this tag where you want the share button to render. -->
<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>

<!-- Place this tag after the last share tag -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
```

### Google Plus

```html
<!-- Place this tag where you want the share button to render. -->
<div class="g-plus" data-action="share"></div>

<!-- Place this tag after the last share tag. -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
```

### Facebook Like

```html
<!--Place the code for your plugin wherever you want the plugin to appear on your page. -->
<div class="fb-like" data-href="http://developers.facebook.com/docs/reference/plugins/like" data-send="true" data-width="450" data-show-faces="true"></div>

<!-- Include the JavaScript SDK on your page once, ideally right after the opening <body> tag. -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
```

### Hacker News

```html
<!-- Place this tag where you want the share button to render. -->
<a href="http://news.ycombinator.com/submit" class="hn-share-button">Vote on HN</a>

<!-- Place this tag after the last share tag -->
<script>
    (function(d, t) {
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.src = '//hnbutton.appspot.com/static/hn.min.js';
        s.parentNode.insertBefore(g, s);
    }(document, 'script'));
</script>
```

### Reddit

```html
<a href="http://www.reddit.com/submit" onclick="window.location = 'http://www.reddit.com/submit?url=' + encodeURIComponent(window.location); return false"> <img src="http://www.reddit.com/static/spreddit7.gif" alt="submit to reddit" border="0" /> </a>
```
If you want Reddit button with points, then

```html
<script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=1"></script>
```

### Kippt

I love to have all my favorites site in Kippt. Those who love kippt, this is for you.

```html

<a href="https://kippt.com/save" class="kippt-save-button" data-url="https://kippt.com/karrisaarinen/" data-title="Karri Saarinen on Kippt" data-source="example.com">Save to Kippt</a>

<script>(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://addons.kippt.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","kippt-wjs"));</script>

```

### Linkedin

```html
<script src="//platform.linkedin.com/in.js" type="text/javascript">
 lang: en_US
</script>
<script type="IN/Share" data-counter="right"></script>
```

