// algoritmo que retorna quantas vezes ele bateu o recorde, numero do jogo que foi o pior desempenho, e o 1 jogo não conta(começa a ler o array pela posição 1)
function verificaRecordeEpiorJogo(numeroJogos) {
  /*
   * pedro joga n jogos, e registra as pontuações feitas por jogo - irei registrar as pontuações de cada jogo em acumulaJogos (cada pontuação representa um jogo diferente, cada posição do array representa um jogo diferente)
   * ao entrar uma nova pontuação ele avalia se ele é maior ou menor que seu melhor e pior desempenho (uma lógica parecida com o exercicio de encontrar o maior e menor, preciso comaparara cada posição do array e primeiro encontrar o menor e o maior, a primeira posição, será o primeiro valor, e irei compara-lo com as outras posições, cada vez que este valor for maior, aumento o valor da variável recordeBatido, para indicar que ele bateu o recorde um x tanto de vezes, e o menor, é só encontrar o menor valor de todo o array, ou seja, a menor pontuação, e mostrar o número do jogo(ou seja, o indice do array))
   * começar a percorrer o array a partir da posição 1, não o zero, pois começa-se a contar os jogos somente a partir do segundo jogo
   * também preciso aumentar o valor de numeroRecordesBatidos, pois caso a posição atual for maior que ele, ela somente irá aumentar o indice, e comparar um valor diferente com o mesmo valor de numeroRecordes, já que ele não se altera, quero que quando o valor atual do array for maior que o valor da minha váriavel, a minha váriavel recebe esse valor maior que ele e aumente o valor de recordes batidos
   */

  let encontraRecordes = numeroJogos[1];
  //   0 pq até o momento ele não bateu nenhum recorde
  let guardaNumeroRecordes = 0;
  let encontraPiorJogo = numeroJogos[1];
  let piorJogo = 0;

  for (let i = 1; i < numeroJogos.length; i++) {
    if (numeroJogos[i] < encontraPiorJogo) {
      encontraPiorJogo = numeroJogos[i];
      piorJogo = i;
    }

    if (numeroJogos[i] > encontraRecordes) {
      encontraRecordes = numeroJogos[i];
      guardaNumeroRecordes++;
    }
  }
  console.log(guardaNumeroRecordes, piorJogo);
}

// armazena os jogos do pedro
const meuArray = [90, 20, 30, 35, 40, 0, 1];

verificaRecordeEpiorJogo(meuArray);
