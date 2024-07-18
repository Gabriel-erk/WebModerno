const valores = [7.7, 0.9, 6.3, 9.2];
console.log(`Valor associado ao indice 0 do array:${valores[0]}, e valor associado ao indice 3 do array:${valores[3]}`);

// aqui dara um valor "undefined", pois nao existe nenhum valor no indice 4 do array (ate o momento nem o indice 4 existe)
console.log(valores[4]);

// atribuindo um valor ao indice 4 do array
valores[4] = 10;
console.log(valores);
// para imprimir na tela a quantidade de elementos dentro de um array (no caso 5, pois o indice começa a partir do 0)
console.log(valores.length);

console.log("utilidade?");
// posso atribuir um valor ao indice 10, mesmo o restante estando vazio, porem, como mostrado, ele é esperto e alerta que existem 5 posições vazias
valores[10] = 10;
console.log(valores);

console.log("manipulando dados dentro do array");

// adicionando valores dentro de um array, um objeto, um valor falso, valor nulo e um do tipo texto
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// removendo o ultimo elemento do array, no caso 'teste', que sera retornado no console e removido do array
console.log(valores.pop());
console.log(valores);

// deletando o conteudo do indice 0 do array (fica mostrando que tem 1 item vazio)
delete valores[0];
console.log(valores);

// aqui vemos que, em js é do tipo object
console.log(typeof valores);