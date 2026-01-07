---
title: Error ENUM migration
description: Error ENUM migration
pubDate: 2024-04-12
---

El problema era el siguiente: 

Luego de realizar una tranquila y pacífica migración, me percato de que
me falta un campo más a mi tabla, y justo este campo es del tipo `ENUM`.
Realizo un migration undo, para revertir la creación de la tabla, 
agrego el campo deseado en la migración, pero en esta ocación me sale el
error: type "public.enum_..." does not exist.

Me tomó tiempo solucinarlo, pero ya está. Tuve que agregar manualmente
el enum que me pedía:

    create type enum_name_tabla_name_campo as enum ('VALOR1', 'VALOR2');

Con esto, ya se puede realizar nuevamente la migración y ya ejecutará 
con normalidad.

El siguiente [foro de stackoverflow](https://stackoverflow.com/questions/68015577/sequelizedatabaseerror-type-public-enum-does-not-exist), 
me ayudó a comprender lo que estaba pasando y asegurar
de la solución propuesta es una alternativa que también lo utilizó otra persona.