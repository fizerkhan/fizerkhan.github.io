{
  title: 'Sending SMS using Plivo in Google App Engine',
  date: '2014-12-26'
}

Now-a-days, sending a SMS is part of the notification in all web and mobile products.
We uses [Plivo](https://www.plivo.com/) to send SMS notification.

Let me share the code that we used for sending SMS in Java Google App Engine project.

```
  public static final String PLIVO_VERSION = "v1";
  public static final String PLIVO_AUTH_ID = "YOUR_PLIVO_AUTH_ID";
  public static final String PLIVO_AUTH_TOKEN = "YOUR_PLIVO_AUTH_TOKEN";
  public static final String PLIVO_NUMBER = "YOUR_PLIVO_NUMBER";

  public static void sendSMS(String dst, String text) {

    Client client = Client.create();
    // client.addFilter(new LoggingFilter(System.out));
    WebResource webResource = client
        .resource("https://api.plivo.com/v1/Account/" + PLIVO_AUTH_ID
            + "/Message/");
    client.addFilter(new HTTPBasicAuthFilter(PLIVO_AUTH_ID,
        PLIVO_AUTH_TOKEN));

    JSONObject object = new JSONObject();
    object.put("src", PLIVO_NUMBER);
    object.put("dst", dst);
    object.put("text", text);
    object.put("type", "sms");
    ClientResponse clientResponse = webResource
        .type(MediaType.APPLICATION_JSON)
        .header(HTTPChecker.USER_AGENT_NAME,
            HTTPChecker.USER_AGENT_VALUE)
        .post(ClientResponse.class, object.toString());

    int status = clientResponse.getStatus();
    if (status >= 400) {
      System.out.println(clientResponse.getEntity(String.class));
    }
  }
```

Here we uses Java Rest client [jersey](https://jersey.java.net/) to send a request
to `plivo`.

Hope it helps and Have a nice day.





