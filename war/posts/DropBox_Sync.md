----
title:  Dropbox will save your head
date:   2013-11-4
----

Recently My Mac OSX has been crashed and somehow i cannot retrieve some of my data from hard drive.
But i am fortunate that i have already synced important folder to the `Dropbox` that saves my head.

Few days ago, i got a tweet from my favorite Github contributor [tj](https://twitter.com/tjholowaychuk) (Creator of ExpressJs, Jade, Mocha)


<blockquote class="twitter-tweet"><p>haha dammit.. just rm -fr a project that isn&#39;t on github yet :( <a href="https://twitter.com/search?q=%23fail&amp;src=hash">#fail</a></p>&mdash; TJ Holowaychuk (@tjholowaychuk) <a href="https://twitter.com/tjholowaychuk/statuses/391262571350593536">October 18, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


I am really sad about it. It can happen to anyone. So, whenever you started working on project(Pre-Github), You should consider sync to the `Dropbox`. Moreover it is always better and safer to sync important folder and files. It can be simply done by creating symbolic link to the folder in the `Dropbox`.

Open `terminal` and do the following

```
## Go to dropbox folder. It can be any dropbox folder
cd ~/Dropbox/MacOSX

# Create symbolic link to Stickies database
ln -sf ~/Library/StickiesDatabase .

# Create symbolic link to Sublime text User data
ln -sf ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User Sublime3-User

```

In symbolic link creation, you can use .(dot) in the last argument to use same folder or file name as original. Otherwise you can specify the name that you wanted to have in your `Dropbox`.

Have a nice day.



