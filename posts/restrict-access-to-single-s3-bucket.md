----
title: Restrict user access to Single S3 Bucket using Amazon IAM
date:   2014-11-12
----

S3 becomes de-facto standard for publishing files in the internet.
When you work with the team, you might want to restrict an access of single S3 bucket to
specific users. You can do it in [IAM](https://console.aws.amazon.com/iam/home) as follows

1. Create [Group](https://console.aws.amazon.com/iam/home#groups)
2. Create [User](https://console.aws.amazon.com/iam/home#users). Then use **Manage Password** to add a password for your user.
3. Add User to the created Group
4. Create and Attach Permission Policy for the group.

Step 1, 2 and 3 are straight forward. But creating and attaching permission
policy needs some attention.

In [Group](https://console.aws.amazon.com/iam/home#groups) tab, go to created group.
Then click the **Permissions** tab and Click the **Attach Policy** button.
You’ll be taken to **Set Permissions** page where you can Manage User Permissions.
Here you can select a **Select Policy Template** option, then find the **Amazon S3 Full Access**
and click **Select** button.

You will be prompted with **Policy Name** and **Policy Document**. You can
change the policy name as you wish. In the Policy Document section, paste the following content

```javascript
{
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:ListAllMyBuckets",
            "Resource": "arn:aws:s3:::*"
        },
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::mys3bucket",
                "arn:aws:s3:::mys3bucket/*"
            ]
        }
    ]
}
```

You are done. Have a nice day.

