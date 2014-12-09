----
title: Why you should use "use strict" in JavaScript
date:   2014-11-27
----

With this flag you can opt in to use a restricted variant of JavaScript.
It eliminates some silent errors and will throw them all the time.

### Undeletable properties

```javascript
'use strict';
delete Object.prototype; // TypeError
```

### Object literals must be unique

```javascript
'use strict';
var obj = {
    a: 1,
    a: 2
};
// syntax error
```

### Prohibits `with`

```javascript
var obj = { x: 17 };
with (obj) // !!! syntax error
{

}
```
To get a complete list of these silent errors, visit [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).


If you have anything apart from this, share it in comments. Have a nice day.

### References

1. [It’s time to start using JavaScript strict mode](http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/) by Nicholas C. Zakas
2. [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) by MDN



