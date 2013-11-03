----
title: Things you consider for MongoDB in production
date:   2013-11-4
----

We are using MongoDB for few of our products. We like to share some of the
recommendations for MongoDB in production.

### Handle Connection Errors

Few weeks before, we faced one weird problem in our NodeJS  application.
Our customer can view our site and not able to login into the application.
We tried to figure out the issue and found that MongoDB database connection is
broken during mid night. After that, our application is not crashed,
but it is failed to connect MongoDB. We assume that it should auto reconnect if it is failed.
But it does not happen. Finally we found that we did not handle error of MongoDB
connection in our code.

You must handle error of MongoDB connection in you code. It can be even simple console log.

```
 mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
```

If you are using NodeJS, you must handle `error` and `exception` in all places.
It is a best practice.

### Setting Timeout

You have to properly set your timeouts. The driver's default timeouts are very aggressive ranges anywhere from 1 second (e.g. the Node.JS driver in some cases) to 30 seconds (e.g  the Ruby driver), so you really need to think about what the optimal setting is for your use case.

For connections made through a Platform-as-a-Serivce (PaaS) such as Heroku, you might consider an even higher timeout (e.g. 30 seconds) since your application is likely running in a container that can be “idled” or “passivated” during periods of low activity

If you use Mongoose and NodeJS, then you can set connection timeout by

```
// Database connect options
var options = { replset: { socketOptions: { connectTimeoutMS : conf.dbTimeout }}};

// Establish Database connection
var conn = mongoose.connect(conf.dbURL, options);
```

[MongoLab](https://mongolab.com/) has written very good article on [MongoDB Timeout](http://blog.mongolab.com/2013/10/do-you-want-a-timeout/)

### Connection Polling

You should consider using connection pooling. It will make for a much faster and
more stable application. You won't spend the time on each request to create connections (can be noticeable to the end user) and you aren't subject to connect errors either.

The `mongoose` package for NodeJS handles connection pooling by default. If you use your own
MongoDB driver, make sure you have implemented connection pooling.

Thanks to [MongoLab](https://mongolab.com/) for sharing amazing tips of MongoDB with us.
The support of MongoLab is awesome and respond for questions very quickly. I highly recommending for MongoDB database.

Have a nice day.

