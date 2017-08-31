
# Ingredientes de una receta de cocina - Ejemplo de mixins

[![Build Status](https://travis-ci.org/uqbar-project/ingredientesMixins-es6.svg?branch=master)](https://travis-ci.org/uqbar-project/ingredientesMixins-es6)

![recetas](img/recetas.png)

## Objetivo

Muestra cómo se implementa un mixin de un ingrediente que "hereda" atributos y comportamiento de 

* Dosis, 
* Comestible y 
* "convertible a JSON".

La técnica que utiliza es a partir de un objeto MixinBuilder, que necesita

* una clase original
* una clase que funcionará como superclase inicial (aunque a los fines implementativos no tiene más relevancia que otras)
* un conjunto de clases que funcionan como mixins

Como ES6 es un lenguaje dinámico, aplica las definiciones de cada "superclase" a la clase original mediante un reduce/fold (utilizando como semilla la superclase) y termina obteniendo una clase con todas las características de sus mixins + la superclase.


## Cómo se evalúa

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/ingredientesMixins-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

