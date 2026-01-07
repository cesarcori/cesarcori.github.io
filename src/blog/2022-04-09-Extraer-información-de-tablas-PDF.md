---
title: Extraer información de tablas PDF
description: Extraer información de tablas PDF
pubDate: 2022-04-09
---

<!-- # Extraer información de tablas PDF -->
<!-- Written on April 09, 2022 -->

Existen 2 alternativas entre las más buscadas en la red:

* tabula-py
* camelot-py

Entre los 2, utilicé camelot, en un inicio. Hasta que quise utilizarlo
con pandas. Ahí ya opte por utilizar tabula.

## Tabula
Instalación:

```
pip install tabula-py
```

Si bien funcionó todo correctamente, había que realizar unos bucles **for** para
detectar los datos, y bueno, necesitaba realizar un análisis de un
pdf. Esto me llevó a buscar otra alternativa.

## Camelot
Esta sí me pareció una gran alternativa debido a una [comparativa](https://github.com/camelot-dev/camelot/wiki/Comparison-with-other-PDF-Table-Extraction-libraries-and-tools)
realizada en un foro de Github.

Su instalación:

```
pip install camelot-py
```

Pero hubo problemas al momento de sus pruebas, pues solicitó los módulos cv2 y
ghostscript. El primero lo recuerdo, es una librería para el análisis de
imágenes **opencv**. El segundo, lo busqué y al parecer es para tratamiento de archivos
pdf. 

Los tuve que instalar:

```
pip install opencv-python ghostscript
```

Luego ya realizando pruebas de la librería funcionó de maravilla, con
la exportación a json, csv, y otras alternativas. Al final es lo que
realmente estaba buscando. 

La siguiente [página](https://camelot-py.readthedocs.io/en/master/) muestra
un ejemplo de cómo emplear la librería.

## Uso con pandas
Pandas es una librería para el análisis de datos y pues en esta parte al parecer
gana tabula. Carga de inmediato los datos y con pandas se puede realizar 
un orden de estos. 

En cambio con camelot toma un tiempo considerable la carga, no por nada
utiliza opencv. Ahora también hay que considerar que tabula
no reconozca algunas tablas, si llega a ser mejor opción camelot.

Para su uso con pandas tabula-py gana, en cuanto a rapidez. Además tiene una
librería para Java. 
