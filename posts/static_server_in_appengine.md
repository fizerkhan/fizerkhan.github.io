----
title: Free Static Page Hosting on Google App Engine in a 5 minutes
date:   2014-2-17
----

Now-a-days we have a lot of options to deploy our applications. Some of them are
Google App Engine, Google Compute Cloud, Amazon EC2, Heroku, Nodejitsu and much more.
All the services has its advantages and disadvantages over other. Generally,
we do not prefer much complex infrastructure or steps to deploy our static pages.
Recently, I found that Google App engine has been a best platform for hosting our
static web pages with decent free plan over other services. In this article,
we will discuss a steps to host your static pages which can be personal blog, company site or even your client sites.

### Create an application in Google App Engine

Visit [Google App Engine](http://appengine.google.com) and then create an application.
When creating App engine application, the application id is very important. Because
it acts as subdomain for your site. Lets say, application id is `coolmoon`, the site
will be in `coolmoon.appspot.com`.

### Install App Engine SDK for python

Since `python` has been a best supported language in App Engine, Download and Install
[App Engine SDK for python](https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python). `Are you not a python developer(like me)?` Do not worry, you do not need to write a single piece of python code.

You will use two commands from the SDK:

    dev_appserver.py  -  the development web server
    appcfg.py  -  for uploading your app to App Engine


### Create an application folder

You have to create an application folder which has static files and configuration file to be deployed.
The structure of the folder may be as follows

    application_folder/
      - app.yaml              # configuration file. we will see in next section
      - public/               # public folder will contain static files
        - index.html
        - js/
        - css/
        - img/

### Content of App Engine configuration(app.yaml)

      application: coolmoon
      version: 1
      runtime: python27
      api_version: 1
      threadsafe: yes

      handlers:

      - url: /(.+)
        static_files: public/\1
        upload: public/(.*)

      - url: /
        static_files: public/index.html
        upload: public/index.html

      skip_files:
      - ^(.*/)?app\.yaml
      - ^(.*/)?app\.yml
      - ^(.*/)?#.*#
      - ^(.*/)?.*~
      - ^(.*/)?.*\.py[co]
      - ^(.*/)?.*/RCS/.*
      - ^(.*/)?\..*
      - ^(.*/)?tests$
      - ^(.*/)?test$
      - ^test/(.*/)?
      - ^COPYING.LESSER
      - ^README\..*
      - \.gitignore
      - ^\.git/.*
      - \.*\.lint$
      - ^fabfile\.py
      - ^testrunner\.py
      - ^grunt\.js
      - ^node_modules/(.*/)?


### Test static pages

You can run development server locally and check your static pages by following command

     dev_appserver.py ./

Visit `http://localhost:8080` to test your pages.

### Deploy

Everything is perfect and deploy the static pages. The command `appcfg.py` is used for deploy the application to Google App engine

    appcfg.py update .

It will ask for `email` and `password` of your Google account. The password must be
application specific password. To know how to generate application specific password,
please refer [Application specific password](https://support.google.com/accounts/answer/185833?hl=en).

### You've made it

Finally you got your site hosted in `<application-id>.appspot.com`.
Static hosting is super easy with App Engine. Moreover it is faster than other static
hosting services. Because it runs on Google infrastructure.


Happy static hosting and Have a nice day.





