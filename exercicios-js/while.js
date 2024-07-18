function getNumeroInteiroAleatorioEnre(min, max) {
    // calculando um valor aleatório entre o valor dos parâmetros min e max e jogando dentro da constante valor
    const valor = Math.random() * (max - min) + min;
    // retornando o valor da const "valor" arredondado para baixo caso não seja um valor inteiro que for passado a ele
    return Math.floor(valor);
}


let opcao = 0;

// enquanto opcao for diferente de -1, execute (enquanto a condição for verdadeira, execute) - utilizado para laços de repetições com uma quantidade indeterminada de vezes
while(opcao != -1) {
    opcao = getNumeroInteiroAleatorioEnre(-1, 10);
    console.log(`O número aleatório foi: ${opcao}`);
}

console.log('Até a proxima!');

