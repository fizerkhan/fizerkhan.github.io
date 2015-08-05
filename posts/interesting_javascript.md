{
  title: 'Javascript snippets save your time',
  date: '2013-10-6'
}

When i work with web application, i got few JS snippet from different places(Mostly from StackOverflow). I hope, it will save your time.

## Get Query String Value

This function helps you to get query string value from URL(href).

```javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
```

## Add leading zeros to date

Sometimes you may want to add leading zeros to date field.

`("0" + anynumber).slice(-2))` will add leading zero to a number.

```javascript
var date =  new Date();
var dateString = ('0' + date.getDate()).slice(-2) + '/'
             + ('0' + (date.getMonth()+1)).slice(-2) + '/'
             + date.getFullYear();
```


## Set checkbox checked property using Jquery

I was bit struggle with this problem. In latest jquery, i try to set checked property using `$('#checkBox').attr('checked');`. It does not work.

From `jQuery > 1.6`, it should be

```javascript
// new property method
$('#checkBox').prop('checked');
```

## Best way to Toggle Classes on window scroll

We like to hide or show some element based on window scroll. It may be show/hide of goto top button or fixed header position.

```javascript
// Toggle header position
var breakpoint = 100; // Can be any value based on your layout
var headerDomElement = $("header")[0];
var $window = $(window)
$window .on("scroll", function () {
    var top = $window.scrollTop();
    headerDomElement.classList.toggle("header-fixed",  top > 0);
});
```

```javascript
// Goto top button show and hide
var breakpoint = 0;
var btnGoTopDomElement = $("btn-gotop")[0];
var $window = $(window)
$window.on("scroll", function () {
    var top = $window .scrollTop();
    btnGoTopDomElement.classList.toggle("show",  top > 0);
});
```

Instead of Jquery `toggleClass` method, you can use `classList.toggle` on Dom element will improve the performance. Thanks to Paul Irish.


## Interactive Form Submission

Form submission might take time if server or network is slow. Meantime, if submit button
is still clickable, It will not be user friendly.

You can disable submit button and do any validation of the field by adding `onsubmit` attribute to the form.

```html
<form accept-charset="UTF-8" method="POST" action="/message"
onsubmit="return validateForm(this);">

<input type="submit" value="Submit">
</form>
```

```javascript
function validateForm(formObj) {
    formObj.submit.disabled = true;
    formObj.submit.value = "Submitting...";
    return true;
}
```

Share if you have any interesting JS snippets.
Happy coding and have a nice day.




