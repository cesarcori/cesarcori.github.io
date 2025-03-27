---
title: Postgres nativo ubuntu
description: Postgres nativo ubuntu
pubDate: 2024-01-23
---

Realizaré algunas notas sobre este procedimiento.
Acabo de instalar postgresql nativo en Ubuntu 20.04 y me encontré con unas cuantas configuraciones necesarias que me gustaría compartir.

Instalación: 

    sudo apt install postgresql


Congiguración de la contraseña: 

    sudo -u postgres psql template1
    ALTER USER postgres with encrypted password 'your_password';

En este momento todo bien, hasta que traté de realizar una restauración de una base de datos. En mi caso utilizo DBeaver como administrador de base de datos y me dió un error de "local cliente", lo solucioné direccionando a la ruta donde se encontraba pg_restore. Se logró pasar el primer inconveniente, pero por alguna razón no encontraba pg_restore en esa dirección, intenté de muchas formas y nada, por lo que decicí optar por restaurar la base de datos desde la línea de comandos. Esto funcionó pero era necesario una configuración más.

En el archivo pg_hba.conf, es necesario cambiar la opción peer de: `local all` con esto puedo ejecutar el comando siguiente sin tener problemas de authenticación, pues ya me pedirá el password en el prompt.

    pg_restore -U postgres -d 'name-database' 'name-database-backup'

De esa manera pude realizar al restauración. 

A continuación la fuente que me ayudó a este fin: 

https://ubuntu.com/server/docs/databases-postgresql
https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge

