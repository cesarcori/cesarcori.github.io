---
title: Error página dns
description: Error página dns
pubDate: 2024-04-19
---

Algo peculiar que me ocurrió (siendo honesto, algo desconsertante), 
pues el error solo se generaba en mi ordenador. 

Lo que ocurrió es lo siguiente: Me compartieron un enlace de un sistema, 
pero al momento de ingresar al enlace
me salió el error: `No se encontró la página web`. Lo peculiar fué que
desde las computadoras de mis otros compañeros todo estaba normal! Cambié de navegador
y tampoco ingresó, pero esta vez con el siguiente error: (algo que agradecer).

    This site can’t be reachedCheck if there is a typo <URL-PROBE> DNS_PROBE_FINISHED_NXDOMAIN

Lo busqué, y encontré una solución que me funcionó. [Solución](https://www.hostinger.es/tutoriales/error-dns_probe_finished_nxdomain?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9077352&gad_source=1&gclid=CjwKCAjwrIixBhBbEiwACEqDJVEN_Y2q1H3oGMzZr8lTLzu8bBX-zbf1reKTwI6C0wpx6ub0YhJrSRoCWHgQAvD_BwE#Cache_del_navegador)

Abrir un navegador web de Chrome y poner en la url: 

    chrome://net-internals/#dns

* Ingresar la URL de la página que se tiene problemas de conexión: ejemplo.com
* Limpiar cache dns: Clear host cache.
