---
title: Aumentar espacio swap
description: Aumentar espacio swap
pubDate: 2024-10-15
---

Algo que ocurrió en mi grupo de amigos, es que instalamos linux
con su configuración por defecto y nos puso la swap de 4GB. 

Necesitamos aumentar el espacio de la swap, pero al parecer nuestra
swap se encontraba como archivo .img por lo que solo se requirió la 
siguiente configuración.

Este método solo sirve cuando el swap es un archivo: swap.img

Esto puede comprobarse con: 

    swapon --show

Limpiando swap:

    sudo swapoff -a
    sudo swapon -a

Nota: Debido a que me informaron que las aplicaciones se cierran al realizar
este proceso (Aunque en mi caso, no) Se recomienda cerrar las aplicaciones
y guardar los trabajo que se está realizando.

En mi caso tengo la salida:

    NAME      TYPE SIZE USED PRIO
    /swap.img file  8G   0B   -2

Si es el caso los siguientes comandos amplian la swap a 16G
Si que quiere más espacio, solo es modificar la variable `count`

    sudo swapoff /swap.img
    sudo dd if=/dev/zero of=/swap.img bs=1G count=16
    sudo chmod 600 /swap.img
    sudo mkswap /swap.img
    sudo swapon /swap.img
    swapon --show

Hasta el próximo post.