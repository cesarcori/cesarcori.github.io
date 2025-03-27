---
title: Solución compatir pantalla
description: Solución compatir pantalla
pubDate: 2024-04-03
---

Este error ocurrió cuando intenté compartir mi pantalla en google meet,
solo se visualizaba el mouse, jejeje. Busqué la solución y al parecer
en la distro de fedora 38, Gnome utiliza Wayland. Actualmente está con
unos problemas que me imagino se solucionarán en un futuro. 

Por ahora cambié a Xorg el cual presenta buena compatibilidad. 

## Configuración Xorg

Reiniciando la computadora, en el inicio de sesión se encuentra un engranaje en 
la esquina inferior derecha, el cual presenta opciones para la sesión de GNOME,
elegí la opción `GNOME on Xorg`, con lo cual se arregló el error.

Aclarar que también se puede cambiar esta configuración a través de 
la modificación del archivo `/etc/gdm/custom.conf`. Pero no fué necesario
debido a que la primera solución funcionó y ahora puedo compartir
normalmente la pantalla.

Hago notar que el problema no fué el navegador o la aplicación Google Meet, pues
intenté con otro navegador y otras aplicaciones (Zoom y Discord), y el problema 
persistía.

De esta manera se solucionó el problema, gracias y espero sirva de ayuda a alguien,
hasta otra oportunidad.

## Fuente

[Cambiar por defecto la sesión GNOME](https://docs.fedoraproject.org/en-US/quick-docs/configuring-xorg-as-default-gnome-session/)