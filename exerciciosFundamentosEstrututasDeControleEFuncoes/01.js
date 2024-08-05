const operacoes = (valor1, valor2) => {
    console.log(`soma: ${valor1 + valor2}`);
    console.log(`subtração: ${valor1 - valor2}`);
    console.log(`multiplicação: ${valor1 * valor2}`);
    console.log(`divisão: ${valor1 * valor2}`);
}

// pode-se colocar todas as operações no mesmo console.log, realizando operações diferentes com os mesmos operadores e imprimir seus resultados na tela
function calcularOperacoes(operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
    
}

console.log(operacoes2(3,2));