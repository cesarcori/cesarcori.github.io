---
title: 'Reading files from a JavaScript'
description: 'Reading files from a JavaScript'
pubDate: 2025-03-27
---

I was trying to get a list of filenames from a directory into an array,
so I decided to look for a solucion on the Internet. I found 
the following method: `fs.readdir`: 

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      console.log('Files in the directory:');
      files.forEach(file => {
        console.log(file);
      });
    });

This worked, but when I tried to save the result into a varible, I was surprised
to find that I couldn't do it directly because it uses a callback. (That's when I
realized I needed to review my understanding of callbacks) the main issue was
that this funcion is asynchronous, so I had to use other methods to retrive the
list of files. 

Thanks for the [answer](https://stackoverflow.com/a/31274417) on StackOverFlow
I discovered an awesome solution: there's a method that gives the exact result
I wanted.

    fs.readdirSync(path)

With this I finally got what I needed.

After reviewing the Node.js [documentation](https://nodejs.org/api/), I found
several other interesting methods that have synchronous version (*Sync).
I recommend going through the documentation for more details.

Another interesting fact: this method was inspired by the POSIX function readdir().