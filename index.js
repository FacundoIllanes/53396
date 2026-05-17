import fs from 'fs';

import antlr4 from 'antlr4';

import MiLenguajeLexer from './MiLenguajeLexer.js';
import MiLenguajeParser from './MiLenguajeParser.js';
import TraductorVisitor from './TraductorVisitor.js';

const input = fs.readFileSync('input.txt', 'utf8');

const chars = new antlr4.InputStream(input);

const lexer = new MiLenguajeLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();

console.log("TABLA DE TOKENS:");

tokens.tokens.forEach(token => {
    console.log(
        `Lexema: ${token.text} -> Token: ${MiLenguajeLexer.symbolicNames[token.type]}`
    );
});

const parser = new MiLenguajeParser(tokens);

parser.buildParseTrees = true;

const tree = parser.programa();

console.log(tree.toStringTree(parser.ruleNames));

const traductor = new TraductorVisitor();

const codigoJS = traductor.visit(tree);

console.log("\nCODIGO JAVASCRIPT GENERADO:\n");

console.log(codigoJS);

console.log("\nRESULTADO DE EJECUCION:\n");

eval(codigoJS);

console.log("\nEntrada válida");