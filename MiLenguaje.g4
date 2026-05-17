grammar MiLenguaje;

programa
    : instruccion+ EOF
    ;

instruccion
     : salida
    | asignacion
    | variar
    ;

salida
    : ESCRIBIR expresion
    ;
asignacion
    : ID '<-' expresion
    ;
    variar
       : VARIAR ID
      DESDE expresion
      HASTA expresion
      ( CON PASO expresion )?
      HACER
      bloque
      FIN_VARIAR
    ;
    bloque
    : instruccion*
    ;
expresion
    : termino (('+' | '-' | '*' | '/') termino)*
    ;

termino
    : NUMERO
    | ID
    | '(' expresion ')'
    ;
    VARIAR : 'variar';
DESDE : 'desde';
HASTA : 'hasta';
CON : 'con';
PASO : 'paso';
HACER : 'hacer';
FIN_VARIAR : 'fin_variar';

ESCRIBIR : 'escribir';

NUMERO : [0-9]+;
ID : [a-zA-Z][a-zA-Z0-9_]*;

WS : [ \t\r\n]+ -> skip;