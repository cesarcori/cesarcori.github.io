---
title: jupyter noteboot error utf 8
description: jupyter noteboot error utf 8
pubDate: 2023-04-17
---

I had a problem: I couldn't open file with accents and ñs. from spanish document 

## Solution
Change the format charset of my file with `iconv`.

    iconv -f iso-8859-1 -t UTF-8 name-file.csv -o name-file-result.csv

## Understanding
The file csv original, was saved with another charset, by default. 

Showing the charset of the file, we use the command `file` of linux. 

    file -i name-file.csv

In my example the console shows me: 
  
> name-file.csv: text/plain; charset=iso-8859-1

Now we can the charset iso-8859-1, and if we want to read spanish character,  is
necessarly use the charset UTF-8.

Linux has a command that helps with that: iconv.

## Story
I was working on extracting information from pdf. I copy paste the information to
excel and at the moment to save, I haven't put attention on the UTF-8. 

I use Archlinux and nothing Windows. On my House I had to work on the file open in
Jupyter Notebook, to clean the data with pandas. But the file it couldn't open. 

The error was: file.csv is not UTF-8 encoded. 

Yep. That is the story. 


