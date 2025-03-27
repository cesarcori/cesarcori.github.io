---
title: sql filter dbeaver
description: sql filter dbeaver
pubDate: 2023-09-29
---

En mi trabajo comúnmente los compañeros utilizan la barra de filtro
SQL para realizar el filtrado de los datos. Con una diferencia de que utilizan
comandos distintos a los de SQL.

Me puse a averiguar y encontré lo que buscaba, además de la opción de guardar estos filtros
para utilizarlos después. Pero a resumidas cuentas lo que considero parte importante son las
búsquedas ILIKE.

<p align="center">
  <img src="https://s6.imgcdn.dev/ZgVYy.png" alt="Sublime's custom image"/>
</p>

Una funcionalidad que además conocí y considero importante, es la de guardar las consultas
en distintos tipos de tablas.

A continuación agrego la sitaxis que emplea esta barra de filtro.

El siguiente comando encontrará las coincidencias abcd, abcdf, etc.
Sin importar si el ilike sea mayúscula o minúscula, lo que quiere decir
que no es case sensitive.

    nombre_campo ilike '%bcd%'
    nombre_campo ILIKE '%bcd%'

El uso de like tiene la misma forma que el de ilike.

    nombre_campo like '%bcd%'
    nombre_campo LIKE '%bcd%'

Operadores de igualdad, mayor, menor, mayor o igual y menor o igual: `=, >, <, >=, <=, !=`.

    nombre_campo = 'ejemplo'
    nombre_campo = '1234'
    nombre_campo > '1234'
    nombre_campo < '1234'
    nombre_campo >= '1234'
    nombre_campo <= '1234'

Uso de AND, OR, NOT, para combinar resultados:

    nombre_campo_1 like '%bcd% and nombre_campo_2 > '1234'
    nombre_campo_1 like '%bcd% AND nombre_campo_2 > '1234'

Como adelanté una funcionalidad bastante importante es la de guardar estos filtros en cada tabla
para después utilizarlos.

## Fuente

https://www.ibm.com/docs/en/tivoli-netcoolimpact/6.1.0.4?topic=filters-sql


