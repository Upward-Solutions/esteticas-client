# Utils

> En este paquete nos vamos a encontrar con todos los valores y funciones que puedan ser requeridos por diferentes lugares de la aplicación. Constantes, funciones de formateo, etc.

## Constantes

> Este es el lugar indicado para alojar valores o funciones que devuelvan valores que sean inmutables. Para las constantes utilizaremos la nomenclatura `SCREAMING_SNAKE_CASE` y para las funciones `lowerCamelCase`. Es un archivo que tiende a crecer mucho y no es aconsejable modularizarlo, por lo que se aconseja separar las funciones y constantes en grupos indicados con un comentario para que sean más fáciles de localizar.

## General Format

> En este archivo se encuentran las funciones que realizan el formateo de los valores que circulan por la aplicación. Ej.: fechas, importes, etc. La intención de centralizar todos los formateos en un solo lugar es que la aplicación sea escalable con mayor facilidad.

## Factory

> Aquí se crean los objetos que requiera la aplicación. Escencialmente los objetos `_Request` y `_Response` necesarios para la comunicación con el backend.

## Events

> En este archivo comienza el flujo de ida y vuelta desde el frontend hasta el backend. Este archivo tiene la intención de liberar de código al HTML para hacerlo más mantenible y además mejora la performance. No se deben desarrollar funcionalidades en este archivo, solo asociar eventos del `DOM` con funciones de las `Views`.

## Plugins

> Acá vas a encontrar modulos independientes, en los que están implementados las librerías. Algunas de las cosas que ofrecen las librerías ya están resueltas y con ejemplos. Todas están importadas en el `HTML` y podés hacer una prueba de cada uno de sus métodos y hasta podés agregar o sacar funciones. Cualquier plugin que no te vaya a servir, simplemente borrá la carpeta y el import del `HTML` y listo.

- Documentación de las librerías
  - [Currency](https://currency.js.org/)
  - [Moment](https://momentjs.com/docs/)
  - [SweetAlert](https://sweetalert.js.org/guides/)
  - [Chart](https://www.chartjs.org/docs/latest/)
  - [Popper](https://popper.js.org/docs/v2/)
  - [Loader](https://github.com/ConnorAtherton/loaders.css)
