# My Blog

This is my personal blog which is hosted in **fizerkhan.com**.
I like to share what i know little bit to the people who i know and do not know.
Hope it is useful to human kind.

# How

To run

    $ grunt server

To build

    $ grunt build

To Deploy

    $ cd fizerkhan-production/
    $ ./build.sh
    $ git push

Notes: During deploy, Google app engine throws JSP compilation error.
       So move the `node_modules` folder to main folder, then deploy.
       After deploy, move back the `node_modules` to `war` folder.


# Tools

* [Cabin](http://colinwren.github.io/Cabin/)
* [Candy Theme](http://colinwren.github.io/Candy/)
* Google App Engine (Deployment)
