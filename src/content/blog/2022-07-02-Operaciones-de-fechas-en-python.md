---
title: Operaciones de fechas en python
description: Operaciones de fechas en python
pubDate: 2022-07-02
---

<!-- # Operaciones de fechas en Python -->
<!-- Written on July 02, 2022 -->

¿Tienes tiempo para leer este blog? Con python puedes calcularlo. 

Jajaja, cuántas veces programé las operaciones entre la suma de tiempos para 
una actividad o determinar la diferencia entre la fecha actual y una fecha
pasada.

Mi principal problema era: "Es tan fácil que para qué utilizar las librerías de
python" (Un completo ahorrador de recursos). Pero más alejado de lo pragmático. 
(Palabra elegante para hacer referencia a lo práctico) 

Python ya presenta una librería para trabajar con las fechas y nos ahorra mucho
tiempo al momento de realizar operaciones entre estas.

Les presento **datetime** 

Realizando:

    import datetime
    help(datetime)
    # Muestra toda la documentación de la librería

Yendo al grano. Realizando restas entre fechas, **en la consola**:

    import datetime
    inicio = datetime.datetime.today()
    # esperamos un poco
    fin = datetime.datetime.today()
    diferencia = fin-inicio
    diferencia

Nos mostrará algo así:
datetime.timedelta(seconds=548, microseconds=20467)

Y si lo imprimimos o volvemos cadena nos mostrará una forma más elegante.
0:09:08.020467

El problema que suelo tener es la interpretación de los segundos a horas y
minutos. Con esta función puedo trabajar con el dato original sin convertir
las unidades de segundos a minutos u horas. Lo que lo hace más práctico 
(pragmático).

Una función más: **timedelta**. 

Muy importante para poder ir atrás unos cuantos días.

Supongamos que quiero recorrer unos 7 días atrás. a partir de hoy. 
Pues lo que hago es:

    hoy = datetime.datetime.today()
    retroceder = datetime.timedelta(days=7)
    hace_dias = hoy - retroceder
    print(hace_dias)

datetime.datetime(2022, 6, 30, 17, 10, 59, 46641)

Así se pudo retroceder la cantidad de días hacia atrás.

Gracias por la lectura. Un aprendizaje más en el mundo de la programación.


