---
title: Create service on systemctl
description: Create service on systemctl
pubDate: 2024-10-16
---

Create a file example.service

    sudo vim /etc/systemd/system/example.service

Into this file configure: 

    [Unit]
    Description=Service description
    After=network.target

    [Service]
    WorkingDirectory=/path/to/your/directory
    ExecStart=<command>
    Restart=on-failure

    [Install]
    WantedBy=multi-user.target

For example in my case I want to run in my local machine a frontend 

    WorkingDirectory=/my/path/project/directory
    ExecStart=/usr/local/bin/yarn start:dev

In my case I didn't know the path of yarn application. 
I could find it with: `which yarn`.


    

