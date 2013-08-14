----
title: Script Tag XSS attack
date:  2013-8-1
----

I heard lot about cross site scripting(XSS) and recommendation to escape the string before placing in to HTML. I rarely seen any good example to prove it until i got the following code.

```html
<script>
  var info = "</script><script>alert('I am not a string. I am a Javascript');</script>";
</script>
```

You can run [this fiddle](http://jsfiddle.net/fizerkhan/yxXvV/1/).

The reason behind is that always HTML is parsed and render tree before the Javascript execution. The HTML parser does not have any knowledge about javascipt expression(like `var info`). It considers `script` inside a `info` string as script node. Then alert becomes normal JavaScript expression.

In current days, we uses lot server side template engine like Jade, ERB, Handlebars and etc. When you uses them, you make sure that the strings are escaped properly.

Secure your code and Have a nice day.
