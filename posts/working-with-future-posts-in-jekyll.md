{
  title: 'Working with upcoming posts in Jekyll',
  date: '2015-8-6'
}

We used to work on more than one post at a time and publish them in future.
So you just want to test them while writing the blog, but you don't want publish
them to your live blog immediately. There are 3 different ways to achieve this in jekyll.

### 1. With published settings

You can include a line in your post meta data to indicate whether a post is published or not:

```
published: true
```

(or)

```
published: false
```

Set published to `false` if you don’t want a post to show up when the site is generated.

To preview your site locally, you can `--unpublished` option

```
jekyll server --unpublished
```

When you want to make the post to live, just remove the `published` flag or set it to `true`.


###  2. With future dated posts

You can write your blogs with future dated. There is a setting which does something similar - show future dated posts.

To preview your site locally, you can `--future` option

```
jekyll server --future
```

Make sure that you have following setting in your `_config.yml` file.
This will hide future dated posts from your live blog.

```
future: false
```


### 3. With drafts folder

As you know, Drats are the posts you’re still working on and don’t want to publish yet.
To get up and running with drafts, create a `_drafts` folder in your site’s root.
You can place your posts inside the drafts folder.

```
- _drafts/
  - my-draft-post.md
```

To preview your site locally, you can `--drafts` option

```
jekyll server --drafts
```

Make sure that you have following setting in your `_config.yml` file.
This will hide drafts posts from your live blog.

```
show_drafts: false
```

When you want to publish the post to live blog, move your post from `_drafts` to `_posts` folder.

I recommend `drafts` folder for upcoming posts. Because it is much cleaner and easy
to maintain when you work with team. If you have any other tips, share it on comments.
