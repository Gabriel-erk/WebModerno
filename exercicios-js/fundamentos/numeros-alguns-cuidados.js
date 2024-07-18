// retorna um valor do tipo ifinito
console.log(7 / 0);

console.log("10.2" / 2); // entrega um resultdao pois o js verifica o conteudo da string para ver se pode ser considerado um numero

/* neste caso vai concatenar, pois a string tem preferencia (na operação de cima isto nao acontece pois o computador entende que, nao faz sentido esta operação ser realizada com uma string, entao ele tenta converter o valor da string para ver se funciona, isto se aplica em outras operações tambem, como / e -) */
console.log("3" + 2);

console.log("3" - 2);

console.log("show!" * 8); // retorna que o retorno nao é um numero

console.log(0.1 + 0.7) //aparentemente é algo que varias linguagem de programação aderem, entao é "normal" isto acontecer, algumas operações podem ter problema por conta desse problema do ponto flutuante

// console.log(10.toString()); nao funciona, porem, ha outro jeito

console.log((10.32452).toFixed(2));

console.log((10).toString());