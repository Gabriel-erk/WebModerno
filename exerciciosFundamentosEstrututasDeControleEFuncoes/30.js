/*
* como faço para encontrar o número menor? 
* ideia: caso o maior numero for menor que a posição anterior, menorNumero recebe ele, mas, 9 > 10, 10 é maior que a posição anterior, então o menorNumero receberia 9, e não 5
* ideia: fazer com que menorNumero também tenha o maior valor e se compare com cada posição, se encontra um número menor que ele, recebe o valor dele, e continua se comparando com outras posições - isso só iria acontecer QUANDO encontrasse o maior valor
*/

function maiorEmenor(vetorInteiros){
    let maiorValor = 0;
    let menorValor = 0;

    for(let i = 0; i < vetorInteiros.length; i++){
        if(vetorInteiros[i] > maiorValor){
            maiorValor = vetorInteiros[i]
        };
        // if(menorValor < vetorInteiros[i]){
        //     menorValor = vetorInteiros[i]
        // }
    }
    console.log(maiorValor);
    console.log(menorValor);
}

let meuArray = [5, 8, 10, 9]

maiorEmenor(meuArray)