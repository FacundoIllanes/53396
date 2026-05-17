# Analizador Sintáctico con ANTLR4 y JavaScript

## Alumno
Nombre y apellido: Facundo Luataro Illanes
Legajo: 53396

## Descripción
Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando ANTLR4 y JavaScript.

El analizador:
- Reconoce instrucciones del lenguaje propuesto.
- Genera una tabla de tokens.
- Construye el árbol sintáctico.
- Traduce el código fuente a JavaScript.
- Ejecuta el código generado.

## Requisitos
- Node.js
- Java JDK
- Visual Studio Code

## Instalación

Instalar dependencias:

```bash
npm install
```

## Generar parser

```bash
npm run build
```

## Ejecutar programa

```bash
npm start
```

## Archivos de ejemplo

La carpeta `ejemplos` contiene:
- 2 ejemplos correctos
- 2 ejemplos incorrectos

## Gramática

La gramática utilizada se encuentra en:

```text
MiLenguaje.g4
```