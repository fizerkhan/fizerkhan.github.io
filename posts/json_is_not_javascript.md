{
  title: 'JSON is not Javascript Object',
  date: '2013-6-24'
}

Many people treat JSON as javascript object. But really it is not.
JSON is just string representation inspired from Java Script Object structure.
JSON is designed to ease and simplify the data transfer between
server and browser. Because of the simplicity, it works among other applications not just between browser and server.

I try to copy some javascript object and send over to JSON based bookmark web server. But it does not work, why? Lets have javascript object that i tried to sent.

```javascript
{
    name : "why this kolaveri di",
    url  : "http://www.youtube.com/watch?v=YR12Z8f1Dh8",
    singer: "Dhanush",
    movie: "3",
    music : "Anirudh Ravichandran",
    views : 10000000,
    // Adding this for testing purpose
    play : function() { },
}
```

When i sent this, i got the error **Unexpected token n** from the server (By the way, i uses **NodeJS** with **Express** framework). It means, it is not valid JSON. I wonder why it is not working. Then i read [JSON spec](http://www.json.org/) by Douglas Crockford and understood the followings

    1. All keys should be double quotes.
    2. JSON does not support comments.
    3. JSON value should not be function or undefined. A value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.
    4. Last value of JSON should not have comma(,) separator.

Then it changed into

```javascript
{
    "name" : "why this kolaveri di",
    "url"  : "http://www.youtube.com/watch?v=YR12Z8f1Dh8",
    "singer": "Dhanush",
    "movie": "3",
    "views" : 10000000,
    "music" : "Anirudh Ravichandran"
}
```

### Take away

I think, it is very important to learn the JSON notation since we have lot of our
configuration files(package.json, bower.json) in web development in JSON format.
So understanding about JSON is must for every web developers.

Happy coding and Have a nice day.


