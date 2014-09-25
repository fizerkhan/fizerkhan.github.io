# Fizer Khan's Blog

I am Fizer Khan - web developer and open source enthusiast.
This is my personal blog which is hosted in **[fizerkhan.com](http://www.fizerkhan.com)**.
I like to share what i know to the people who i know and do not know.
Hope it is useful.

# How

To run

    $ grunt server

To build

    $ grunt build

To deploy

    $ git push github master

To Deploy in Google app engine

    $ git push appengine master

Notes: During deploy, Google app engine throws JSP compilation error.
       So move the `node_modules` folder to main folder, then deploy.
       After deploy, move back the `node_modules` to `war` folder.

# Tools

* [Cabin](http://colinwren.github.io/Cabin/)
* [Candy Theme](http://colinwren.github.io/Candy/)
* Google App Engine (Deployment)
