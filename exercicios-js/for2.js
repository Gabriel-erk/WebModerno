const notas = [6.7, 7.8, 9, 8.5, 5.5];

/* 
* let nota in notas - estou jogando o indice de notas dentro de 'nota', apenas o indice, não seu conteudo
* passou uma vez pelo laço, executou, 'nota' recebe o proximo indice e o processo se repete
* ${notas[nota]}`) - ainda tenho que entrar no array notas, na posição nota (pois ele está com o indice atual), pois 'nota' só recebe o indice, não o valor
* existem formas melhores de percorrer um array
*/
for(let nota in notas){
    console.log(`${nota} - ${notas[nota]}`)
}

const pessoa = {
    nome: 'Marcos',
    idade: 22,
    estadoCivil: 'Casado',
    peso: 89
}
/* 
* faz mais sentido este método neste caso, com um objeto
* realiza a mesma coisa do último exemplom porém, com um obejto
* atributoObjeto recebe o primeiro atributo de pessoa - e mostra na tela o nome do atributo e o conteúdo dele
*/
for(let atributoObjeto in pessoa){
    console.log(`${atributoObjeto}: ${pessoa[atributoObjeto]}`);
}