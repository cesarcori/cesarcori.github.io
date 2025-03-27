---
title: backup y restore base de datos postgres
description: backup y restore base de datos postgres
pubDate: 2024-02-27
---

## Backup de base de datos PostgreSQL

Para realizar un backup de una base de datos PostgreSQL realizo los siguientes pasos:

    pg_dump -U username -d name_database > database-backup.sql
  
En caso de que la base de datos se encuentre en remoto se agrega la ip.

    pg_dump -U username -h domain.of.database -d name_database > database-backup.sql

Exisisten otros comandos para realizar este último proceso a través de ssh. Personalmente
aún no los utilice.

## Restore de base de datos

El comando que comúnmente mencionan es pg_restore, en mi caso no funciona, y me recomienda utilizar
psql.

    psql -U username -d name-database < database-backup.sql

## Posdata

Por si se preguntan, porque no realizo esto con un administrador de base de datos, como DBeaver, que 
es el que actualmente utilizo, es debido a que no encuentra el archivo pg_dump en /usr/bin. Intenté 
arreglar el problema pero no lo logré. Al parecer es un tema de permisos.

Pero nada es malo del todo, pues desde que empecé a utilizar los comandos para el backup y restore,
ahora puedo implementarlos en script, que los ejecuto con un simple comando.

Hasta otro post!!!