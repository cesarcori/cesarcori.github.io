---
title: Nuevas características Javascript
description: Nuevas características Javascript
pubDate: 2024-04-02
---

Entre las más interesantes se tiene

## Encontrando el último valor de un vector

Ahora se puede utilizar el método `at()`

    const array = [1,2,3,4,5]
    array.at(-1) // salida: 5

## Clonar completamente un objeto

Se tenía el concepto de que se lo lograba con spread operator `{...obj}` pero
no realiza una copia completa pues si se presenta un objeto anidado, este aún
mantiene una relación con el original.

    const auto = { color: 'rojo', modelo: { year: '2022', codigo: 'ADR123' }}
    const copiaAuto = {...auto}

    // Prueba
    auto.modelo.year = '1990'
    console.log(copiaAuto.modelo.year) // salida 1990

Para evitar este comportamiento se implementó el siguiente truco:

    const auto = { color: 'rojo', modelo: { year: '2022', codigo: 'ADR123' }}
    const copiaAuto2 = JSON.parse(JSON.stringify(auto))

    // Prueba
    auto.modelo.year = '1995'
    console.log(copiaAuto2.modelo.year) // salida 2022

La nueva característica es que ahora se tiene el método structuredClone()

    const auto = { color: 'rojo', modelo: { year: '2022', codigo: 'ADR123' }}
    const copiaAuto2 = structuredClone(auto)

    // Prueba
    auto.modelo.year = '1995'
    console.log(copiaAuto2.modelo.year) // salida 2022

## Fuente

https://www.youtube.com/watch?v=q1fsBWLpYW4
