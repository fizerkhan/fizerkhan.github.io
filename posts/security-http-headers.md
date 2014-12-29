----
title: Security HTTP headers
date:   2014-12-30
----

Security becomes an inevitable feature for every web and mobile application.
There are many things to consider when securing web applications.

Now let's have a look at the headers and how they can improve the security of your website.

### X-FRAME-OPTIONS

This header Provides Clickjacking protection.

```
X-FRAME-OPTIONS: SAMEORIGIN
```

*Values:*

- **DENY** - no rendering within a frame,
- **SAMEORIGIN** - no rendering if origin mismatch,
- **ALLOW-FROM: DOMAIN** - allow rendering if framed by frame loaded from DOMAIN

### Strict-Transport-Security

The Strict-Transport-Security header will instruct the browser to do two important things:

1. Load all content from your domain over HTTPS
2. Refuse to connect in case of certificate errors and warnings

```
Strict-Transport-Security:max-age=15552000; includeSubDomains
```

`includeSubdomains` indicates whether the policy should also be applied to subdomains.

### X-Content-Type-Options

To disable the MIME-sniffing, add the header:

```
X-Content-Type-Options:nosniff
```

The only defined value, "nosniff", prevents Internet Explorer and Google Chrome from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions.

### X-Download-Options

This disables the option to open a file directly on download.

```
X-Download-Options:noopen
```

### X-XSS-Protection

The XSS protection was introduced in IE 8 as a security measure designed
to thwart XSS (Cross Site Scripting) attacks. In short, IE tries to detect
whether there has occurred an XSS attack, if so it will modify the page to block
the attack and display a warning to the user.

You can set the XSS filter on or off (1 or 0), and there's an optional parameter
called mode. If you set mode to block, the page will not be displayed at all.
Here are examples of how you can set the header:

```
X-XSS-Protection: 0
X-XSS-Protection: 1; mode=block
```

### Content-Security-Policy

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks.

If enabled, CSP has significant impact on the way browser renders pages
(e.g., inline JavaScript disabled by default and must be explicitly allowed in policy).


```
Content-Security-Policy:default-src https:; connect-src https:; font-src https: data:; frame-src https: twitter:; img-src https: data:; media-src https:; object-src https:; script-src 'unsafe-inline' 'unsafe-eval' https:; style-src 'unsafe-inline' https:; report-uri https://twitter.com/i/csp_report?a=NVQWGYLXFVZXO2LGOQ%3D%3D%3D%3D%3D%3D&ro=false;
```

These HTTP headers protect your users from various kinds of attacks.

