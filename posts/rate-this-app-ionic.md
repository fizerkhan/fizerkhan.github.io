{
  title: 'Rate this app in Ionic application',
  date: '2014-12-4'
}

You may need a "Rate this app" link inside your Ionic Framework Android
and iOS application. When i implemented this features by adding the link to
Google Play and App Store, the link does not work. Then i found that
it needs `inappbrowser` cordova plugin.

### Add InApp Browser cordova plugin

```
cordova plugin add org.apache.cordova.inappbrowser
```

### Implement "Rate this app"

Now, go ahead and start creating method to open a link based on the device.


```html
<button ng-click="rateUs()">Rate us</button>
```

```javascript
$scope.rateUs = function () {
    if ($ionicPlatform.is('ios')) {
        window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
    } else if ($ionicPlatform.is('android')) {
        window.open('market://details?id=<package_name>');
    }
}
```

Have a nice day.
