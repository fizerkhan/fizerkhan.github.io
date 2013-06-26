----
title: Google App Engine Deployment Tips
date:   2013-6-26
----

I uses Google App Engine for few of my projects. I choose it, because it is **Free** for small application like blog and faster, easy to deploy. This blog is also deployed in the App Engine.

## Command Line Alias

I usually deployed to Google App Engine from command line. I have aliases for deployment and rollback.

    $ alias gaed='/Users/maasan/development/tools/eclipse/plugins/com.google.appengine.eclipse.sdkbundle_1.7.3/appengine-java-sdk-1.7.3/bin/appcfg.sh update war'

    $ alias gaer='/Users/maasan/development/tools/eclipse/plugins/com.google.appengine.eclipse.sdkbundle_1.7.3/appengine-java-sdk-1.7.3/bin/appcfg.sh rollback war'

When i want to deploy, i just change to application directory and run

    $ gaed

If you want update the version of application, then

    $ gaed -v 2

The version can be anything from single integer or current date or anything you like.

## Different versions access

Even though you deployed the new version of your application to App Engine, it will not come to live until you go to Admin console and set as Default.
Once you set new version as Default, then it comes to live.

**But will there any way to access the old versions when new version is live?**

**Yes**, i recently found that we can access any version of your application by

    http://<version>-dot-<application identifier>.appspot.com

Let's assume, you want to access the version `1` of your `sample.appspot.com`, then

    http://1-dot-sample.appspot.com

But keep in mind that all your application will use same database. If any changes in the database schema might break the older versions.

You can also use it vice-versa. Just deploy the new version, access the new version by above version URL and test it. Once you confidence that you can make it live, then go and set the new version ad Default.

Happy deployment and Have a nice day.


