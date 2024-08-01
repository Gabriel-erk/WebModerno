/*
 * como faço para encontrar o número menor?
 * ideia: caso o maior numero for menor que a posição anterior, menorNumero recebe ele, mas, 9 > 8, 9 é maior que a posição anterior, então menorNumero receberia 8, e na próxima vez q o programa passasse, 9 (fazendo deste meio, invalido)
 * ideia: fazer com que menorNumero também tenha o maior valor e se compare com cada posição, se encontra um número menor que ele, recebe o valor dele, e continua se comparando com outras posições - isso só iria acontecer QUANDO encontrasse o maior valor
 * se menor valor for maior que a posição atual do array, seu valor muda, se for maior, a váriavel maiorValor recebe ele - se não for maior, não acontece nada
 */

function maiorEmenor(vetorInteiros) {
  // inicializados com a primeira posição do array
  let maiorValor = vetorInteiros[0];
  let menorValor = vetorInteiros[0];

  //   percorrendo o array
  for (let cont = 0; cont < vetorInteiros.length; cont++) {
    /*
    * 1 vez percorrendo: 5 é menor que 5? não, olha o outro array, 5 é maior que 5? não
    * 2 vez percorrendo: 8 é menor que 5? não, olha o outro array, 8 é maior que 5? sim, então atualiza a váriavel com o valor 5 para 8(e assim sucessivamente) 
    */
    if (vetorInteiros[cont] < menorValor) {
      menorValor = vetorInteiros[cont];
    }
    if (vetorInteiros[cont] > maiorValor) {
      maiorValor = vetorInteiros[cont];
    }
  }
  console.log(maiorValor);
  console.log(menorValor);
}

let meuArray = [5, 8, 10, 9];

maiorEmenor(meuArray);
