/*
* desenvolvendo 2 funções
* ambas recebem como primeiro parâmetro um vetor com numeros inteiros, e como segundo parâmetro um numero inteiro
* na primeira função será multiplicada o segundoParâmetro(numero inteiro) por cada posição do vetor passado(primeiro parâmetro) e irá retornar o resultado desta operação em outro vetor
* a segunda função só ira realizar a multiplicação do segundo parâmetro pelas posições do primeiro parâmetro, SE, o segundo parâmetro for maior que 5
*/

function funcao01(vetor = [], numeroInteiro) {
  // inicializando o array com um valo, já que irei realizar a soma da posição 0 do array com ela mesma e o resultado da multiplicação do numero interio passado * a posição atual do vetor passado como parametro
  let vetorVezesInteiro = [0];

  for (let i = 0; i < vetor.length; i++) {
    vetorVezesInteiro[0] += numeroInteiro * vetor[i];
  }
  return console.log(vetorVezesInteiro);
}

let meuArray = [10, 10, 10];
funcao01(meuArray, 5);

function funcao02(vetor = [], numeroInteiro) {
  let vetorVezesInteiroMaiorQue5 = [0];
  if (numeroInteiro > 5) {
    for (let i = 0; i < vetor.length; i++) {
      vetorVezesInteiroMaiorQue5[0] += numeroInteiro * vetor[i];
    }
    return console.log(vetorVezesInteiroMaiorQue5);
  } else {
    console.log("número menor ou igual a 5");
  }
}

funcao02(meuArray, 6);
