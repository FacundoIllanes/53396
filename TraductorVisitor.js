import MiLenguajeVisitor from './MiLenguajeVisitor.js';

export default class TraductorVisitor extends MiLenguajeVisitor {

    visitPrograma(ctx) {
        let resultado = '';

        for (let instr of ctx.instruccion()) {
            resultado += this.visit(instr) + '\n';
        }

        return resultado;
    }

    visitSalida(ctx) {
        const expr = this.visit(ctx.expresion());

        return `console.log(${expr});`;
    }

    visitExpresion(ctx) {
        return ctx.getText();
    }
    visitAsignacion(ctx) {
    const variable = ctx.ID().getText();

    const expr = ctx.expresion().getText();

    return `let ${variable} = ${expr};`;
}

visitVariar(ctx) {

    const variable = ctx.ID().getText();

    const desde = ctx.expresion(0).getText();

    const hasta = ctx.expresion(1).getText();

    let paso = '1';

    if(ctx.expresion(2)) {
        paso = ctx.expresion(2).getText();
    }

    const bloque = this.visit(ctx.bloque());

    return `
for(let ${variable} = ${desde}; ${variable} <= ${hasta}; ${variable} += ${paso}) {
${bloque}
}
`;
}
visitBloque(ctx) {

    let resultado = '';

    for(let instr of ctx.instruccion()) {
        resultado += this.visit(instr) + '\n';
    }

    return resultado;
}
}