// Generated from MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,18,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,3,4,45,8,4,1,4,1,4,1,4,1,4,1,5,5,5,52,8,5,10,5,12,5,55,9,5,1,6,1,6,1,6,
5,6,60,8,6,10,6,12,6,63,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,71,8,7,1,7,0,0,8,
0,2,4,6,8,10,12,14,0,1,1,0,2,5,72,0,17,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,
6,31,1,0,0,0,8,35,1,0,0,0,10,53,1,0,0,0,12,56,1,0,0,0,14,70,1,0,0,0,16,18,
3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,
0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,23,27,3,4,2,0,24,27,3,6,3,0,25,27,3,8,4,
0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,15,0,0,
29,30,3,12,6,0,30,5,1,0,0,0,31,32,5,17,0,0,32,33,5,1,0,0,33,34,3,12,6,0,
34,7,1,0,0,0,35,36,5,8,0,0,36,37,5,17,0,0,37,38,5,9,0,0,38,39,3,12,6,0,39,
40,5,10,0,0,40,44,3,12,6,0,41,42,5,11,0,0,42,43,5,12,0,0,43,45,3,12,6,0,
44,41,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,13,0,0,47,48,3,10,5,0,
48,49,5,14,0,0,49,9,1,0,0,0,50,52,3,2,1,0,51,50,1,0,0,0,52,55,1,0,0,0,53,
51,1,0,0,0,53,54,1,0,0,0,54,11,1,0,0,0,55,53,1,0,0,0,56,61,3,14,7,0,57,58,
7,0,0,0,58,60,3,14,7,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,
0,0,0,62,13,1,0,0,0,63,61,1,0,0,0,64,71,5,16,0,0,65,71,5,17,0,0,66,67,5,
6,0,0,67,68,3,12,6,0,68,69,5,7,0,0,69,71,1,0,0,0,70,64,1,0,0,0,70,65,1,0,
0,0,70,66,1,0,0,0,71,15,1,0,0,0,6,19,26,44,53,61,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'<-'", "'+'", "'-'", "'*'", "'/'", "'('", 
                            "')'", "'variar'", "'desde'", "'hasta'", "'con'", 
                            "'paso'", "'hacer'", "'fin_variar'", "'escribir'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "VARIAR", "DESDE", "HASTA", "CON", "PASO", 
                             "HACER", "FIN_VARIAR", "ESCRIBIR", "NUMERO", 
                             "ID", "WS" ];
    static ruleNames = [ "programa", "instruccion", "salida", "asignacion", 
                         "variar", "bloque", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.instruccion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 164096) !== 0));
	        this.state = 21;
	        this.match(MiLenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_instruccion);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.salida();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.asignacion();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.variar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(MiLenguajeParser.ESCRIBIR);
	        this.state = 29;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(MiLenguajeParser.ID);
	        this.state = 32;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 33;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_variar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(MiLenguajeParser.VARIAR);
	        this.state = 36;
	        this.match(MiLenguajeParser.ID);
	        this.state = 37;
	        this.match(MiLenguajeParser.DESDE);
	        this.state = 38;
	        this.expresion();
	        this.state = 39;
	        this.match(MiLenguajeParser.HASTA);
	        this.state = 40;
	        this.expresion();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 41;
	            this.match(MiLenguajeParser.CON);
	            this.state = 42;
	            this.match(MiLenguajeParser.PASO);
	            this.state = 43;
	            this.expresion();
	        }

	        this.state = 46;
	        this.match(MiLenguajeParser.HACER);
	        this.state = 47;
	        this.bloque();
	        this.state = 48;
	        this.match(MiLenguajeParser.FIN_VARIAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 164096) !== 0)) {
	            this.state = 50;
	            this.instruccion();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.termino();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 57;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 58;
	            this.termino();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiLenguajeParser.RULE_termino);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(MiLenguajeParser.NUMERO);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(MiLenguajeParser.ID);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(MiLenguajeParser.T__5);
	            this.state = 67;
	            this.expresion();
	            this.state = 68;
	            this.match(MiLenguajeParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.T__6 = 7;
MiLenguajeParser.VARIAR = 8;
MiLenguajeParser.DESDE = 9;
MiLenguajeParser.HASTA = 10;
MiLenguajeParser.CON = 11;
MiLenguajeParser.PASO = 12;
MiLenguajeParser.HACER = 13;
MiLenguajeParser.FIN_VARIAR = 14;
MiLenguajeParser.ESCRIBIR = 15;
MiLenguajeParser.NUMERO = 16;
MiLenguajeParser.ID = 17;
MiLenguajeParser.WS = 18;

MiLenguajeParser.RULE_programa = 0;
MiLenguajeParser.RULE_instruccion = 1;
MiLenguajeParser.RULE_salida = 2;
MiLenguajeParser.RULE_asignacion = 3;
MiLenguajeParser.RULE_variar = 4;
MiLenguajeParser.RULE_bloque = 5;
MiLenguajeParser.RULE_expresion = 6;
MiLenguajeParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MiLenguajeParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instruccion;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_salida;
    }

	ESCRIBIR() {
	    return this.getToken(MiLenguajeParser.ESCRIBIR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_variar;
    }

	VARIAR() {
	    return this.getToken(MiLenguajeParser.VARIAR, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	DESDE() {
	    return this.getToken(MiLenguajeParser.DESDE, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	HASTA() {
	    return this.getToken(MiLenguajeParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(MiLenguajeParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FIN_VARIAR() {
	    return this.getToken(MiLenguajeParser.FIN_VARIAR, 0);
	};

	CON() {
	    return this.getToken(MiLenguajeParser.CON, 0);
	};

	PASO() {
	    return this.getToken(MiLenguajeParser.PASO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitVariar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(MiLenguajeParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.ProgramaContext = ProgramaContext; 
MiLenguajeParser.InstruccionContext = InstruccionContext; 
MiLenguajeParser.SalidaContext = SalidaContext; 
MiLenguajeParser.AsignacionContext = AsignacionContext; 
MiLenguajeParser.VariarContext = VariarContext; 
MiLenguajeParser.BloqueContext = BloqueContext; 
MiLenguajeParser.ExpresionContext = ExpresionContext; 
MiLenguajeParser.TerminoContext = TerminoContext; 
