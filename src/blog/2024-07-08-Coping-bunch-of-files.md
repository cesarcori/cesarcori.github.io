---
title: Coping bunch of files
description: Coping bunch of files
pubDate: 2024-07-08
---

This strategy uses commands Linux to copy a bunch of files to another path.

The first thing that is important to do is to list the files to copy

	find ./ -maxdepth 1 -iname "*name_file*"

That command lists all files into the current path, I like the option `maxdepth`
because just look for files in that directory and not in a recursive way.
The -i before the "name" is to disable the case-sensitive search.

Next, we use this list of files, and with pipe option `|` we pass the result.

Treating the result we use the command: `xargs` as the next way:

	find ./ -maxdepth 1 -iname "*name_file*" -print0 | xargs -0 cp -t ./destination-directory

The option -print0 is to use `null` instead of new lines by default shows the
find command, and the -0 next to the xargs is to enable that option.

The option -t for cp and mv, is necessary when we pass special characters into the file names.

I hope this works for you, see you in the next post.
