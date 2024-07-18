function getAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) + min;
    return Math.floor(valor);
}

let opcao = -1;

/* 
* única estrutura que tem a verificação de condição no final (while(opcao != -1)
* será executada pelo menos uma vez, antes da verificação da condição, mesmo se a condição for falsa, antes de entrar no laço, ela executará 1 vez antes de verificar e parar o código
*/
do {
    opcao = getAleatorioEntre(-1, 15);
    console.log(`O número aleátorio foi: ${opcao}`);

} while(opcao != -1)

    console.log("final")