{
  title: 'Sending Mail using MailGun in Google App Engine',
  date: '2014-12-23'
}

Google App engine provides an email service to send email.
Unfortunately it is limited to 100 emails per day.
So we uses [mailgun](http://www.mailgun.com/) to send an email.

Let me share the code that we used in our Java project to send an email using mailgun.

```
  public static final String MAILGUN_API_KEY = "YOUR_MAILGUN_API_KEY";
  public static final String MAILGUN_HOST = "example.com"; // your host name

  public static void sendMail(String to, Set<String> cc, String subject,
      String html) {

    Client client = Client.create();
    client.addFilter(new HTTPBasicAuthFilter("api", MAILGUN_API_KEY));

    WebResource webResource = client.resource("https://api.mailgun.net/v2/"
        + MAILGUN_HOST + "/messages");

    MultivaluedMapImpl formData = new MultivaluedMapImpl();
    formData.add("from", "Example <hello@example.com>"); // your host email address
    formData.add("to", to);
    formData.add("subject", subject);
    formData.add("html", html);

    ClientResponse clientResponse = webResource.type(
        MediaType.APPLICATION_FORM_URLENCODED).post(
        ClientResponse.class, formData);
    int status = clientResponse.getStatus();
    if (status >= 400) {
      System.out.println(clientResponse.getEntity(String.class));
    }
  }
```

Have a nice day.





