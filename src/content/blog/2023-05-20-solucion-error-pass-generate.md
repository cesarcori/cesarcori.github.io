---
title: solucion error pass generate
description: solucion error pass generate
pubDate: 2023-05-20
---

## Error

Estuve un par de semanas sin poder generar passwords con `pass`. Esto debido
al error: 

```
pass generate alcaldia/borrar.com
gpg: 71AA6CDF12105406E3D1120718C445CF72D6A057: skipped: Unusable public key
gpg: [stdin]: encryption failed: Unusable public key
Password encryption aborted.
```

## Solución

Extender la fecha expirada de la llave pública y su subllave secreta:

Ingresar al modo edición de la llave pública.

    gpg --edit-key 71AA6CDF12105406E3D1120718C445CF72D6A057

Dentro del prompt de gpg: 
    
    expire

Luego ingresar en el formato que se menciona el tiempo que se quiere 
extender la fecha de expedición. En mi caso `3m` (3 meses).

Antes de salir guardar los cambios.

    save

Ahora a extender la fecha de la subllave. Primero vemos el id de esta llave:

    gpg --edit-key 71AA6CDF12105406E3D1120718C445CF72D6A057

Se muestra: 

```
sec  rsa3072/18C445CF72D6A057
     created: 2020-12-10  expires: 2023-08-18  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa3072/A17D7B575DAF7BF3
     created: 2020-12-10  expired: 2023-04-07  usage: E
[ultimate] (1). user <email@gmail.com>

```

Se debe copiar el id de la subllave secreta: `A17D7B575DAF7BF3` con este
valor se tiene que editar:

    gpg --edit-key A17D7B575DAF7BF3

Ahora dentro del prompt gpg:
    
    key 1

Lo que pondrá un * en ssb: `ssb*`. Listo se repite el proceso anteriro con:
`expire` y elección del tiempo de extensión.  

## Historia
Me costó tiemo comprender qué estaba pasando.

Lo que hacía era extender solo la fecha de la llave pública. Pero no me percaté 
que existía una **subllave secreta**. Solo hasta ver este [video](https://www.youtube.com/watch?v=1vVIpIvboSg&t=199s) 
de YouTube, donde se lo menciona y luego de preguntarme: que son las iniciales sec y ssb.

Pude encontrar la mandera de actualizar el ssb con la ayuda del siguiente
[post](https://unix.stackexchange.com/questions/552707/how-to-renew-an-expired-encryption-subkey-with-gpg)
en StackExchange. 

Muchas gracias a la comunidad de internet por proporcionar soluciones. Y 
espero esta información le sea de utilidad a la comunidad. 

## Referencias

https://www.youtube.com/watch?v=1vVIpIvboSg&t=199s

https://unix.stackexchange.com/questions/552707/how-to-renew-an-expired-encryption-subkey-with-gpg

