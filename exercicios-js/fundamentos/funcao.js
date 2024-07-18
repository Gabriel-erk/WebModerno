// Função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b);
}

imprimirSoma(2,3);
// passando somente 1 parâmetro, que retornará NaN, pois esta somando o valor 2, com um undefined (pois o segundo parâmetro não foi passado, então o mesmo fica undefined)
imprimirSoma(2);
// somará apenas os 2 primeiros valores e ignorará o restante (pois são apenas 2 parâmetros)
imprimirSoma(2, 10, 15, 6, 7);
// pelo menos em js, por se de fraca tipagem, chamará a função, somará a + b, porém, o retorno é NaN pois nenhum valor foi passado como parâmetro
imprimirSoma();

// Função com retorno

// passando um valor padrão para b, caso não receber nenhum valor (caso seja passado só um valor como parâmetro)
function soma(a, b = 1) {
    return a + b;
}

// console.log pois dentro da função estou apenas retornando os valores, não estou pedindo para, dentro da função imprimir os valores na tela
console.log(soma(5, 10));
// retornará 3 pois o valor padrão de b para caso não receber nenhum parâmetro é 1
console.log(soma(2));
// retornará undefined, pois a, não recebe nenhum valor, e não tem nenhum valor definido como padrão (não é possivel realizar operações com qualquer tipo de valor undefined, resultado NaN)
console.log(soma());