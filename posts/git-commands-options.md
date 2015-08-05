{
  title: 'Commands and Options I Wish I Knew Earlier About Git',
  date: '2014-9-29'
}

`Git` becomes de facto of source code management (SCM) system among developers.
Many developers used to work on git from console. Mostly used commands are
`git status`, `git add`, `git commit` and `git push`.

Apart from these commands, there are lot of useful commands in git.
Initial days, i find difficulties in tracking changes made by me and my team mates
couple of days or few weeks ago. Here we will see some of commands that are interesting and
useful to your workflow.

#### 1. Short status output

`git status` is mostly used command in `Git`. But it gives lot of
information which is not useful for people who are proficient with git.
If you are one among them, then use

```
git status -sb
```

#### 2. View changes by revision

If you want to view changes made at particular revision

```
  git show <revision>

  git show df2edcd
  (or)
  git show HEAD     #HEAD means latest commit
  (or)
  git show HEAD~1   #HEAD~1 means commit before the commit that HEAD currently points at
```

In case, you want to view only changed file name, not the contents, Use `--name-only` option

```
  git show --name-only  df2edcd
  (or)
  git show --name-only --oneline df2edcd
  (or)
  git show --name-only  --pretty="format:" df2edcd
```

#### 3. View changes of specific file

If you want to view changes of specific file, then

```
  git show df2edcd:app/index.html
  (or)
  git show HEAD~1:app/index.html

  git show @{22-09-2014}:app/index.html
```

#### 4. Search for commit message

You want to search a commit which message matches a regex

```
  git show :/fixed
  # shows the last commit which has the word "fixed" in its message

  git show :/analytics
  # shows the last commit which has the word "analytics" in its message
```

#### 5. list all files that were modified or added in this time

List all files added/modified 9 days ago

```
  git diff "@{9 days ago}"
  git diff --name-only "@{9 days ago}"
  git diff --name-status "@{9 days ago}"
```

List all files added/modified between 9 days ago and 6 days ago

```
  git diff "@{9 days ago}" "@{6 days ago}"
  git diff --name-only "@{9 days ago}" "@{6 days ago}"
  git diff --name-status "@{9 days ago}" "@{6 days ago}"
```

#### 6. Changes between two commit revision

List all files between two commits adab4ab and 6da161b

```
  git diff adab4ab^ 6da161b
  git diff --name-only adab4ab^ 6da161b
  git diff --name-status adab4ab^ 6da161b
```

Hope it useful. Share your favorite commands in comments.
Happy commit and have a nice day.

