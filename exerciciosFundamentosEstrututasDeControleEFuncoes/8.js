// algoritmo que retorna quantas vezes ele bateu o recorde, numero do jogo que foi o pior desempenho, e o 1 jogo não conta(começa a ler o array pela posição 1)
function verificaRecordeEpiorJogo(numeroJogos) {
    let acumulaJogos = []
    let jogo = numeroJogos[0]
    let recordeBatido = 0
    let piorJogo = numeroJogos[0]
    // começa em 1 já que o indice 0 não conta
    for (let i = 1; i < numeroJogos.length; i++) {
        if (jogo > numeroJogos[i]) {
            recordeBatido++
        } else if(numeroJogos[i] < piorJogo){
            piorJogo = i
        }
    }

    acumulaJogos[0] = recordeBatido;
    acumulaJogos[1] = piorJogo;
    console.log(acumulaJogos);
    
}

// armazena os jogos do pedro
const meuArray = [10, 20, 30, 35, 40, 1, 2];
