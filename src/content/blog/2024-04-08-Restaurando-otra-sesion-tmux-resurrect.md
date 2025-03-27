---
title: Restaurando otra sesion tmux resurrect
description: Restaurando otra sesion tmux resurrect
pubDate: 2024-04-08
---

En ocaciones cometo el error de guardar la sesión de tmux,
vez de reestablecer la última sesión. Esto lo que hace es 
pisar mi última configuración y la primera vez que me pasó,
entré en pánico. 

Más bien conseguí una solución, que me ayudó y la quiero
compartir.

La idea es encontrar el archivo que tmux-resurrect utiliza, 
reemplazarlo por el que queremos y listo. 

En mi caso, estos archivos se encuentran en: 

    cd ~/.local/share/tmux/resurrect/

Muevo el último archivo que guardé por error a otra ruta:

    mv tmux_resurrect_date.txt ~/

Remover el symlink que dirige al anterior archivo

    rm last

Crear un symlink last que enlace a la sesin que quieres:

    ln -s tmux_resurrect_date_deseado.txt last

Crear un script no estaría por demás. jejeje.

Muchas gracias hasta el siguiente post.

Fuente:

[Restoring previously saved enviroment](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_previously_saved_environment.md)
