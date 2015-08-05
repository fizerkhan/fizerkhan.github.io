{
  title: 'JAWS: The Javascript + AWS Stack',
  date: '2015-8-5'
}

JAWS is a stack from Amazon web services(AWS) to ease the development of
massive scalable web applications.

It is trying to solve important problems in scalable web application development.

**1. No Backend servers**: All web and mobile application needs backend server and
database server. Since the JAWS back-end is comprised entirely of AWS Lambda Functions,
you don't need to write your back end server in Node, Ruby, PHP or python.
A back-end comprised of Lambda functions comes with a ton of concurrency and
you can easily enable multi-region redundancy. So there is no need for
scaling/deploying/maintaing/monitoring servers again.

**2. Cheap**: Lambda functions run only when they are called, and you only pay for when they are run.

You can build your app using following AWS services

- **[Lambda](https://aws.amazon.com/lambda/)** - Build worker tasks that you can spawn and scale infinitely.
- **[DynamoDB](https://aws.amazon.com/dynamodb/)** - Managed, NOSQL data storage
- **[API Gateway](http://aws.amazon.com/api-gateway/)** - Launch an API with urls pointing to your Lambda functions.
- **[S3](https://aws.amazon.com/s3/)** - Host static assets for your site.

## Architecture

![Architecture](https://raw.githubusercontent.com/servant-app/JAWS/master/site/public/img/jaws_diagram_javascript_aws.png)

### API

As we know, there is no backend servers. Everything is written as Lambda functions.
In normal backend server, we used to write controller to handle the routes. Similarly,
each of your API URLs points to one of these Lambda functions and they are completely
isolated from each other enabling you to develop/update/configure/deploy/maintain
code for specific API urls at any time without affecting other parts.

You can either use the AWS Management Console's API Gateway User Interface to create your API, or define your API in the `api_swagger.json` file and deploy instantly via AWS's Swagger Import Tool .

### Lib

The lib folder/module contains re-useable code you can use across all of your Lambda functions, which can be thought of as your `Models`. It's an npm module that can be required into your Lambda functions, like any other.

You can can require in only the code that your Lambda function needs.

```javascript
// This only loads code needed for the User Model
var ModelUser = require('jaws-lib').models.User;
```

 This way, all of the changes in the lib folder will be instantly available in every one of your Lambda functions when you run/test them locally.

### CLI

The stack comes with command line tool to test locally and deploy.

```bash
# Run A Lambda Function Locally
jaws run

# Deploy A Lambda Function
jaws deploy

# Start A Local Server from site folder
jaws server
```

The static assets can be uploaded and served from S3 for super fast response times.
Definitely JAWS saves lot of development time. You can try and let me know your comments
and feedbacks.



