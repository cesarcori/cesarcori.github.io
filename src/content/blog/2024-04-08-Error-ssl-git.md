---
title: Error ssl git
description: Error ssl git
pubDate: 2024-04-08
---

Algo que comunmente suele ocurrirme cuando empiezo de cero en un sistema
linux y quiero clonar un repositorio privado local es el ssl: unable to get local
issuer certificate.

Lo que hay que realizar es la siguiente configuración en el git y listo.

    git config --global http.sslVerify false

Fuente: 

[How to fix ssl certificate problem](https://komodor.com/learn/how-to-fix-ssl-certificate-problem-unable-to-get-local-issuer-certificate-git-error/)