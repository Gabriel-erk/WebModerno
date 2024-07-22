const fabricantes = [
    'Mercedes',
    'BMW',
    'Porsche'
]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

/* 
* forEach é uma função de um array, estou acessando essa função dentro do meu array e passando a função como parâmetro, que vai agir como um callback (callback é chamado para cada evento que acontecer, aqui o evento é "percorrer cada elemento do array", a cada elemento percorrido, será chamado a função imprimir, e automaticamente ele já preenche corretamente os campos indice e nome)
* primeiro parametro vai receber o conteudo do primeiro indice, o segundo, o proprio indice (indepedente do nome que tiverem)
*/
fabricantes.forEach(imprimir);
/* 
* usando só um parâmetro (com arrow function e uma função de uma linha fica-se dessa forma)
* forEach vai percorrer o conteúdo de cada indice de fabricantes e jogar em fabricante (e vai ter uma ação com isso, no caso, dar um console.log e depois retornar, ler outro indice e repetir até acabar)
*/
fabricantes.forEach(fabricante => console.log(fabricante))