---
title: recordando docker
description: recordando docker
pubDate: 2023-11-06
---

Bien, un pequeño susto que me llevé, pues ya no había
recordado algunos comandos importantes que docker tiene. 

El detalle es el siguiente: ayer empezaba a dockerizar
una base de datos, y ya la había poblado, (lo que me tomo 
una inversión de tiempo). Pero ahora que enciendo la PC, me
encuentro con la lista de contenedores vacía! 

Al parecer me olvidé que con el comando `docker ps` solo muestra
los contenedores que se encuentran corriendo.

El comando que debí haber utilizado para evitarme del susto
era: `docker ps -a`. Aclarar que para mi caso utilizo `sudo docker <command>`,
debido a que en la distribución que utilizo (Fedora) se
configura de esa manera. Anteriormente utilizé ArchLinux, y
no era requerido permisos de super admin `sudo`.

## Curiosidades

Ahora también existe una funcionalidad de docker que es de
iniciar automáticamente un contenedor luedo de reiniciar la PC

    docker update --restart unless-stopped <name-container>

Ese comando ya no me preocuparé de los sustos jejeje. 

## Fuente

https://stackoverflow.com/questions/30231187/list-only-stopped-docker-containers
https://docs.docker.com/config/containers/start-containers-automatically/