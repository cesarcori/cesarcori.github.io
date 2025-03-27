---
title: 'Reading files from a JavaScript'
description: 'Reading files from a JavaScript'
pubDate: '2025-03-27'
---

I was trying trying to get a list into array of the filename of the 
directory, and I decided to search on Internet. The internet recomend me
that use fs.readdir: 

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

That it works, but when I tried to save the result into a varible I stumble
with the sorprise that I can't do that because is a callback. (Is when I
recognize that I have to review my concept about callbacks) the main problem is
that that funcion has an asynchronous nature and for that reason I have to apply
other methods to get the list of files. 

Thanks for StackOverFlow 
https://stackoverflow.com/a/31274417

 that awesome gives me hit to discover that exist a method
that gives me the result that I wanted. 

    fs.readdirSync(path)

With that I could find what I need it.

reviewing the node page: https://nodejs.org/api/, I find some interesting methods
that has serveral Sync option. I recommend go throu document.

Another interesting thing: this method was inspired by function readdir() poxis.