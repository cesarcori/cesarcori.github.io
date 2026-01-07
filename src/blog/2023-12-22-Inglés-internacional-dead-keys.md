---
title: Inglés internacional dead keys
description: Inglés internacional dead keys
pubDate: 2023-12-22
---

Estuve por un largo tiempo trabajando con una disposición de teclado
Inglés internacional, pero con dead key configurado a
comillas simples y dobles, es decir: Al presionar comillas simple, solo
aparece con un espacio o letra distinta a una vocal. Si es una vocal,
esta sale con acento. Lo que hacía para no arrastrar este hábito de precionar
espacio para generar comillas, es ir alternando entre la disposición
Inglés (normal) e Inglés Internacional.

En Linux, puedo obtener esta disposición de teclado de inglés internacional
AltGr Dead Keys. Pero en Windows si bien se encuentra la disposición
inglés internacional, se tiene a las comillas simples y dobles con dead keys,
activado, es decir: solo se visualizan las comillas luego de un espacio o 
caracter distinto a una vocal. 

## Solución

Tras investigar en internet, encontré el post: [Disable dead keys for US-International keyboard layout](https://answers.microsoft.com/en-us/windows/forum/all/disable-dead-keys-for-us-international-keyboard/1de44160-83d9-4cd8-9eb3-e6b06b8604a4),
donde explica de la misma manera esta inquietud. La solución es instalar 
una aplicación que configure el layout e instalar el nuevo layout. 

* [Microsoft Keyboard Layout Creator (MSKLC) Version 1.4](https://www.microsoft.com/en-us/download/details.aspx?id=102134)

Instalamos la aplicación y la abrimos: 

1. File, Load Existing Keyboard... (Cargar el layout de English-International, o el que se quiera modificar).
2. Dar click en el botón apóstrofe y deshabilitar las opciones Dead Key, en
   comilla simple y dobles.
3. Testeamos si todo está bien: Project, Test Keyboard, Layout.
3. Guardar el archivo: File, Save Source File. (O directamente compliar el DLL).
4. Compilar el DLL: Project, Build DLL and Setup Package.
5. Instalar setup.exe: El programa creará en un Folder todos los archivos necesarios para la instalación, 
   ejecutar el setup.exe
6. Ingresar en la opción de windows para configurar teclado y buscar el teclado con el nombre que guardamos y voilá. 

Ahora nuevamente a escribir tanto en español como en inglés, sin tener que estar cambiando
de disposición de teclado (hehehe).

Hasta otro post! see you soon.

