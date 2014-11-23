----
title: Clean up your local branches after merge and delete in GitHub
date:   2014-11-23
----

If you are a Github user, then you might familiar with Pull Requests. Github
has an [options](https://github.com/blog/1335-tidying-up-after-pull-requests)
to delete a branch after merging of pull request.

After a Pull Request has been merged, you’ll see a button to delete the lingering branch:

<img src="https://github-images.s3.amazonaws.com/skitch/Commits_next_forward_compatibility_by_rtomayko_%C2%B7_Pull_Request_%C2%B7_github_github-20121127-131321.png" style="max-width:100%;">

Above action will delete the branch only in the remote. Then there is a question:
how do i clean up my local branches? I found an answer as follows

Lets say my test branch name `feature-collaboration`

### 1. List branches in local machine

The command `git branch -a` shows the test branch `feature-collaboration`
is present on local and also present on remote

![git branch -a](/images/git/git-branch-a-before.png)

 ### 2. Prune/Cleanup the local references to remote branch

The command `git remote prune origin --dry-run` lists branches that can be
deleted/pruned on your local. An option `--dry-run` is needed.

![git remote prune origin --dry-run](/images/git/git-remote-prune-origin-dry-run.png)

Now go ahead and actually prune/cleanup the local references by running the command
`git remote prune origin`. Note that you don't need an option `--dry-run`.

![git remote prune origin](/images/git/git-remote-prune-origin.png)

Again, run the command `git branch -a` will show the local status of branches.

![git branch -a](/images/git/git-branch-a-after.png)

Now you can notice that `remotes/origin/feature-collaboration` has been removed,
but not the local branch `feature-collaboration`.

### 3. Delete local branch

If wanted, we can clean-up the local branch `feature-collaboration` as well

![git branch -d](/images/git/git-branch-d-name.png)


That's it. Have a nice day.






