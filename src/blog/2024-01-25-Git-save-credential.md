---
title: Git save credential
description: Git save credential
pubDate: 2024-01-25
---

One thing that I had to do, but is not recommented is save credentials
of git in cache. This is because I couldn't setting the ssh successfully
for a git repository. Anyway, the next command helps me

    git config --global credential.helper 'cache --timeout=7200'

The next [link](https://git-scm.com/docs/git-credential-cache) is where
I find out how to use it.

