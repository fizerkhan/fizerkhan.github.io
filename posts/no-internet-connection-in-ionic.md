{
  title: "Showing 'No internet connection' message in Ionic application",
  date: '2014-12-1'
}

There are often times where you need to display `No internet connection`
message to your users inside your Ionic Framework Android and iOS application.

### Add Network information cordova plugin

Inorder to check internet connection, you need to have `network information`
cordova plugin.

```
cordova plugin add org.apache.cordova.network-information
```

### Check for internet connection inside Platform ready

Now, you have to check the internet connection inside platform ready as follows


```javascript
angular.module('myApp', ['ionic'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {

    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
        .then(function(result) {
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }

  });
})
```

Have a nice day.
