let valorTeste = 1;

while(valorTeste <= 10) {
    console.log(`Contador: ${valorTeste}`);
    valorTeste++
}

for(let i = 1; i<=10; i++){
    console.log(`i: ${i}`);
}

const notas = [6.7, 7.8, 9, 8.5, 5.5];

// for(let i = 0; i <= 4; i++) {
//     console.log(`nota: ${notas[i]}`);
// }

/* 
* i < notas.length - quer dizer que irá executar enquanto i, for menor que o tamanho do array (melhor forma para se percorrer um array quando não se sabe o seu tamanho), ou seja, enquanto i for menor que 5 (já que 5 é o tamanho do array, 5, pois, se colocar: >= irá retornar um valor undefined, ou seja, existe um undefined na posição 5, como se estivesse "reservada", só que por nenhum valor - quando chegar no valor do array ele irá sair do laço, mas irá executar primeiro)
*/
for(let i = 0; i < notas.length; i++) {
    console.log(`nota: ${notas[i]}`);
}

