---
title: El reloj en Archlinux
description: El reloj en Archlinux
pubDate: 2022-04-02
---

<!-- Written on April 02, 2022 -->
<!-- # El reloj en Archlinux -->

Hace mucho batalle con el tema del tiempo y ahora ya tengo la solución. 
Comúnmente siempre tenía la hora con 5 minutos adelantado. 

Gracias a este [artículo](https://www.freecodecamp.org/news/how-to-install-arch-linux/#how-to-update-the-system-clock) de freecodecamp,
es que comprendo ahora algunas cosas. 
Por ejemplo, en el tema del tiempo, el comando que lo controla es: 
`timedatectl` y se puede ingresar a su documentación mediante `man timedatectl`

Ahora veremos el estado de mi tiempo (de la computadora jaja):
```
timedatectl status
```
Salida:
```
               Local time: Sun 2022-03-27 11:12:03 -04
           Universal time: Sun 2022-03-27 15:12:03 UTC
                 RTC time: Sun 2022-03-27 15:12:03
                Time zone: America/La_Paz (-04, -0400)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```
Bonito, ¿no? Mi problema era que la parte donde dice *NTP service* estaba
establecido como **inactive** Esto generaba el desfase, más que desfase 
lo que ocurría es que solo me percate del *Systm clock synchronized* que
decía "yes!". Y pues ahí me faltó más comprensión del sistema y creí que ya
estaba sincronizado con el reloj de internet.

Al fin y al cabo ya tengo el reloj sincronizado. Y tal vez algo que 
se estén preguntando: ¿Cómo sabía que el reloj no estaba sincronizado por
5 minutos? Pues el reloj de la computadora no coincidía con la hora del celular jejeje.

El comando que establece la hora es:
```
timedatectl set-ntp true
```
Por cierto, luego de ejecutar el comando, el sistema te pedirá el password de 
root. Así que mejor si se lo realiza con sudo.

That's all, have a great code!

Nota: Quise utilizar la palabra **desincronizado** pero al parecer esa palabra no
existe en la RAE, XD, incluso hay un [artículo](https://maveneco.wixsite.com/todoesliteratura/single-post/2016/09/01/aquella-palabra-llamada-desincronizaci%C3%B3n) sobre eso.
