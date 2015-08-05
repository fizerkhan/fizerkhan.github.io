{
  title: 'MongoDB tips',
  date: '2013-7-2'
}

[MongoDB](http://www.mongodb.org/) becomes more popular among the developers because of its schemaless nature which give more flexibility. We can store any kind of data  without having to worry about the structure of the data.

For few operations, i went through lot of searches to get the correct solutions. Some of them are

1. Renaming a field name
2. Change type of field value
3. Finding document if the field exists
4. Sucking MongoDB console

Lets assume that you have a MongoDB collection `bookmarks` for Bookmarking application

    {
      'name' : 'DIVE INTO HTML5',
      'url' : 'http://diveintohtml5.info/index.html',
      'author': 'MARK PILGRIM',
      'upvote': '2',
      'created_at': "2013-07-02 00:00:00"
    }

### Renaming a field name

Let's say you want to rename a `name` filed to `title`, then

    db.bookmarks.update({}, { $rename: {"name": "title"}}, { multi : true})

In above command, the option `multi` is important. Otherwise it will update only one document.

### Change type of field value

If you want to change type of `upvote` field from `string` to `number` value, then

    db.bookmarks.find().forEach(function (bookmark) {
      bookmark.upvote = +(bookmark.upvote);  // equivalent to parseInt
      db.bookmarks.save(bookmark);
    });

 ### Finding the document if the field exists

 Some scenarios, you might want to find the document which has a specific fields.
 Lets say, get bookmarks which has `tags` field.

    db.bookmarks.find({ tags : { $exists : true } });

If the value of field is `null`, then the field is considered as Not exist.

### Sucking MongoDB console

MongoDB console sucks. I got frustrated  whenever i work with MongoDB console. I desperately need JSON pretty for console output, and some more useful commands. Then I found the [Mongo-hacker](https://github.com/TylerBrock/mongo-hacker)  by
[TylerBrock](https://github.com/TylerBrock)(Thanks bro). It is awesome and you must give a try.

Let me know if anything you got useful. Have a nice day.
