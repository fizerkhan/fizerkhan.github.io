{
  title: 'Social Sharing in Ionic application',
  date: '2014-12-8'
}

You may need a social sharing feature inside your Ionic Framework Android and iOS application.

Using the [Social Sharing plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin) for Apache Cordova, we are able to do the social sharing.

### Add ngCordova

First you have to add [ngCordova](http://ngcordova.com/) to your Ionic application.
If you already have this in your app, you can skip this step.

Install ngCordova

```
bower install ngCordova --save
```

Add `ng-cordova.js` before cordova script inside `index.html`


```html
//index.html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Add `ngCordova` in your app module dependencies

```
angular.module('myApp', ['ionic', 'ngCordova'])
```

### Add Social Sharing cordova plugin

In order to implement social sharing, add cordova social sharing plugin.

```
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
```

### Implement Social sharing

Now, go ahead and start creating method to share in your controllers

``` javascript
// share anywhere
$scope.share = function () {
    $cordovaSocialSharing.share('This is my message', 'Subject string', null, 'http://www.mylink.com');
}

// Share via email. Can be used for feedback
$scope.sendFeedback = function () {
    $cordovaSocialSharing
            .shareViaEmail('Some message', 'Some Subject', 'to_address@gmail.com');
}

// Share via SMS. Access multiple numbers in a string like: '0612345678,0687654321'
$scope.sendSMS = function (message, number) {
    $cordovaSocialSharing.shareViaSMS(message, number);
}
```

For more functionalities, refer the [documentation](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin).

Have a nice day.
