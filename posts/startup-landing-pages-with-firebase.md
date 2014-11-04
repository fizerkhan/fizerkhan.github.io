----
title: Startup Landing Pages with Firebase
date:   2014-10-04
----

Now-a-days *Landing Page* has become common and popular among startups and publishers. Every landing page has one important call-to-action, i.e. to sign up early adopters  for their beta version.


To get up & running as soon as possible, the simplest and fastest way to build a landing page is basically having it as a static site without any back end. The downside of this approach is, we need to figure out a way to store the emails that are signed up. As you would expect, there are quite a few really good services you can use right of the bat.

* [Launch Rock](http://launchrock.co/)
* [Unbounce](http://unbounce.com)
* [Kickofflabs](http://www.kickofflabs.com/)
* [My Beta List](http://my.betali.st/)
* [Launch Effect (wordpress)](http://launcheffectapp.com/)
* [Prefinery](http://www.prefinery.com/)
* [LaunchGator](http://launch.deskgator.com/)
* [QuickMVP](http://quickmvp.com)
* [mailchimp](http://mailchimp.com/)

Some of the above services even provides HTML templates, A/B testing and much more. For a non-developer these sites would be the best fit.

If you know a bit of web development and want to build you own custom landing page, then I would strongly recommend to use [Firebase](https://www.firebase.com/) to not only collect emails but even feedbacks. Firebase provides powerful APIs to store and sync data in realtime.

Going forward I will show you the technical part of how you can build the pages in Firebase.

### Firebase Email Storage

Once you have created a [firebase account](https://www.firebase.com/signup/) and have logged in, create a firebase application.

You need to include the **firebase javascript** in your landing page. This provides the functionality to save your data (e.g. email) into your **firebase application**.

`<script src="https://cdn.firebase.com/js/client/1.0.18/firebase.js"></script>`


##### Email Signup Form

Following is a basic HTML template for email sign up form.

```html
<div class="signup">
    <h2 class="signup-title">Sign up for beta</h2>
    <p id="signup-success" class="text-success"></p>
    <p id="signup-error" class="text-danger"></p>
    <form class="signup-form form-inline" id="signup-form" role="form" onsubmit="return signup(this)">
        <input class="form-control" name="email" type="email" placeholder="Your email. eg., joe@acme.com" required>
        <button class="btn btn-success" id="signup-button" type="submit" >Join now</button>
    </form>
</div>
```

##### Firebase script to save email addresses  #####

On the submission of the button, the script script is invoked to store the email address into your **firebase application**.

```javascript
<script>
    var signupForm = document.getElementById('signup-form');
    var signupSuccess = document.getElementById('signup-success');
    var signupError = document.getElementById('signup-error');
    var signupBtn = document.getElementById('signup-button');
    var onSignupComplete = function(error) {
      signupBtn.disabled = false;
      if (error) {
        signupError.innerHTML = 'Sorry. Could not signup.';
      } else {
        signupSuccess.innerHTML = 'Thanks for signing up!';
        // hide the form
        signupForm.style.display = 'none';
      }
    };
    function signup(formObj) {
        // Store emails to firebase
        var myFirebaseRef = new Firebase("https://yourappname.firebaseio.com/signups");
        myFirebaseRef.push({
          email: formObj.email.value,
        }, onSignupComplete);
        signupBtn.disabled = true;
        return false;
    }
</script>
```

### Contact messages

You can also store the feedback, suggestions and questions into your **firebase application**.

Following is the basic HTML template for a contact form.

```html
<div class="contact">
    <h2 class="contact-title">Send us a message</h2>
    <p id="contact-success" class="text-success lead"></p>
    <p id="contact-error" class="text-danger lead"></p>
    <form class="contact-form" id="contact-form" role="form" onsubmit="return sendMessage(this)">
        <input class="form-control" name="name" type="text" placeholder="Your name. eg., Joe" required>
        <input class="form-control" name="email" type="email" placeholder="Your email. eg., joe@acme.com" required>
        <textarea class="form-control" name="message" placeholder="Your message for us" rows="5" required></textarea>
        <br />
        <button class="btn btn-success pull-right" id="send-button" type="submit" >Send Message</button>
    </form>
</div>
```

On submission, the below script is invoked to save your email address along with the message into your **firebase application**.

```javascript
<script>
    // Send message
    var contactFrom = document.getElementById('contact-form');
    var contactSuccess = document.getElementById('contact-success');
    var contactError = document.getElementById('contact-error');
    var sendBtn = document.getElementById('send-button');
    var onMessageComplete = function(error) {
      sendBtn.disabled = false;
      if (error) {
        contactError.innerHTML = 'Sorry. Could not send message.';
      } else {
        contactSuccess.innerHTML = "Message has been sent.";
        // hide the form
        contactFrom.style.display = 'none';
      }
    };
    function sendMessage(formObj) {
        // Store emails to firebase
        var myFirebaseRef = new Firebase("https://yourappname.firebaseio.com/messages");
        myFirebaseRef.push({
          name: formObj.name.value,
          email: formObj.email.value,
          message: formObj.message.value
        }, onMessageComplete);
        sendBtn.disabled = true;
        return false;
    }
</script>
```

It is one of the simplest way to handle forms in your landing page. Firebase provides 100 MB of data storage in their basic free plan, which they have aptly named it as **Hacker Plan**. This should be sufficient for startups to store email addresses and messages.

Caution: If someone gets your firebase URL, they can certainly spam you.  Anyway, that is not something you would be worrying about in evaluating your startup idea.

Please share your thoughts and suggestions. Have a nice day.


