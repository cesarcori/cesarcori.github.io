---
title: instalar clickup con aur
description: instalar clickup con aur
pubDate: 2022-07-14
---

<!--Written on July 14, 2022-->
<!--# Instalación de Click Up.-->

Clonar el repositio AUR:

    git clone https://aur.archlinux.org/clickup.git

Dentro de la carpeta: clickup, solo se encuentra el archivo PKBUILD. 

Compilarlo:

    cd clickup
    makepkg -sri

Listo. 

Nota: En un inicio estaba solo utilizando makepkg y eso compliló todo, pero 
no instaló su binario y tampoco el acceso directo. Al parecer los parametros sri
realizan lo siguiente.

    s : Instala sus dependencias faltantes.
    i : Ejecuta pacman -U al archivo tar.
    r : Luego de la instalación se remueven todas las dependencias.

Por ese motivo, al solo ejecutar makepkg, me salió un aviso de: faltan 
dependencias. Por lo que tuve que hacerlo manualmente. 

Luego: El ejecutable no se encontraba en el menu, y tampoco dentro de la ruta:
/usr/bin/

Por último: dentro la carpeta del repositorio clickup/, se encontraba el archivo
tar, lo cual me preguntaba por qué tendría que estar eso ahí!. Era como si 
me dijera que tengo que hacer algo más. Algo como pacman -U. Jajaja. En fin. 

Fuente de la información de los parámetros: 

* https://wiki.archlinux.org/title/Makepkg_(Espa%C3%B1ol)
* man makepkg


