{
  title: 'Download a file without server request',
  date: '2014-8-1'
}

We have come across `Download file` link(button) in lot of sites. Generally, When you click `download` link or button, it sends `GET` request to server and server returns the downloadable content(with `content-disposition` header). Now-a-days we are building lot of Single Page application where we get the `JSON` payload from the server and render it in the client side.
Since we have the data in the client side, we don't want to sent another request to download the content. So we will see how to download the content from the client side
without an extra request to server.

### How existing download from server works

Whenever you click the `download` link, it will send `GET` request. The server will
set `Content-disposition` header to `attachment; filename=some-filename.csv` and set the data in the body.

**Sample code from Node.js to download CSV file**

```javascript
http.createServer(function(request, response) {
    response.setHeader('Content-disposition', 'attachment; filename=some-filename.csv');
    response.writeHead(200, {
        'Content-Type': 'text/csv'
    });

    csv().from(data).to(response)

})
.listen(3000);
```


### Download content without server request

This can be done by two ways.

1. Using Data URL
2. Using [Downloadify](https://github.com/dcneiner/Downloadify) library

**Using Data URI**

The data should be placed in the `href` attribute with data url format. You can also set
the filename in the `download` attribute.

```html
<a href="data:text/plain,this is some text" download="some-filename.txt" target="_blank">Download<a>
```

**Caution:** The data url is not supported across all browser/version combinations.

**Using Downloadify**

[Downloadify](https://github.com/dcneiner/Downloadify) is a tiny javascript + Flash library that enables the creation and download of text files without server interaction. It works even in IE.
It is much better than previous one.

**Usage:**

    // Any JavaScript framework:
    Downloadify.create( id_or_DOM_element, options );

    // With Jquery
    $("#element").downloadify( options );


**HTML**

```html
<head>
    <script type="text/javascript" src="js/swfobject.js"></script>
    <script type="text/javascript" src="js/downloadify.min.js"></script>
</head>
<body onload="load();">
  <form>
    <input type="text" name="filename" value="testfile.txt" id="filename" />
    <textarea cols="60" rows="10" name="data" id="data">
        Whatever you put in this text box will be downloaded and saved in the file. If you leave it blank, no file will be downloaded
    </textarea>
    <p id="downloadify">
      You must have Flash 10 installed to download this file.
    </p>
  </form>
</body>
```

**Javascript**

```javascript
function load(){
      Downloadify.create('downloadify',{
        filename: function(){
          return document.getElementById('filename').value;
        },
        data: function(){
          return document.getElementById('data').value;
        },
        onComplete: function(){ alert('Your File Has Been Saved!'); },
        onCancel: function(){ alert('You have cancelled the saving of this file.'); },
        onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); },
        swf: 'media/downloadify.swf',
        downloadImage: 'images/download.png',
        width: 100,
        height: 30,
        transparent: true,
        append: false
      });
    }
```


A [very simple demo is available](http://pixelgraphics.us/downloadify/test.html) that lets you supply your own content and filename and test out saving, canceling, and the error functionality when the file is blank.

Please check [Downloadify](https://github.com/dcneiner/Downloadify) Readme for more information.
Share your thoughts and suggestions in the comment. Have a nice day.





