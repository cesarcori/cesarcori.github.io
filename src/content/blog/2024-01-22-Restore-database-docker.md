---
title: Restore database docker
description: Restore database docker
pubDate: 2024-01-22
---

Restore the database could be an easy task, but I find with the
problem when I was working on Docker, and it's because it has
to be over command interface. 

The command that helps me was the next: 

    cat <name-database-to-restore> | sudo docker exec -i <name-container> pg_restore -U <name-user> -d <name-database>

That's it. See you the next post.

## Updated: 2024-04-17

If there exists the next error: pg_restore: error: input file appears to be a text format dump. Please use psql. 

I find the solution and explain in the next [post](https://cesarcori.github.io/blog/2024/02/02/Restore-database-postgres.html)
But that solution is when you don't use docker as a recovery.

In this case I am using docker, and for that reason the unique thing that change is: pg_restore -> psql

    cat <name-database-to-restore> | sudo docker exec -i <name-container> psql -U <name-user> -d <name-database>

It works!

Thanks and I'll see you next.