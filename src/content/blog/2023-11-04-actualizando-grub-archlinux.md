---
title: actualizando grub archlinux
description: actualizando grub archlinux
pubDate: 2023-11-04
---

## Comandos

Los primeros 3 comandos restablece el grub, el 4to detecta los nuevos
sistemas operativos se se tiene, y el último se encarga de actualizar. 
Esto para que aparesca en el grub.

    pacman -S grub

    grub-install --recheck --target=i386-pc /dev/sda

    grub-mkconfig -o /boot/grub/grub.cfg

    os-prober

    grub-mkconfig -o /boot/grub/grub.cfg

Si es el caso, descomentar la línea `GRUB_DISABLE_OS_PROBER=false`
del archivo `/etc/default/grub`.

## Explicación

Me puse a instalar una nueva distribución a mi laptop y como siempre
se reemplazó el grub al del sistema operativo instalado. (Apariencia
cuando te da a elegir entre sistemas operativos)

Honestamente a mí me gusta el grub de archlinux y por ese motivo
empecé a averiguar al respecto.

La mayoría menciona que es necesario un usb live con archlinux como
booteable. En este caso no es requerido.

## Curiosidades

En el caso de querer recuperar el grub de Manjaro, lo realicé con un usb live de este.

La distro de Fedora si bien es muy buena, no cuenta con un grub amigable,
por ese motivo opté por el grub de Manjaro.

## Fuente

https://www.addictivetips.com/ubuntu-linux-tips/re-install-grub-on-arch-linux/

https://wiki.archlinux.org/title/GRUB#Detecting_other_operating_systems