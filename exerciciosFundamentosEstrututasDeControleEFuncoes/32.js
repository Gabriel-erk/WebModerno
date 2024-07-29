const calculaMediaAritmetica = (valoresMedia) => {

    let acumulaMedia = 0;
    // declarando esta variavel no laço for in ele está sendo definido como string, mesmo recebendo apenas números, oq pode não causar problemas até os números que serão passados serem maiores que 10, já que strings, vendo a partir de dezenas, divide, apenas o primeiro número, e esquecem a outra casa
    // let indiceValorMedia = 0;

    for(let indiceValorMedia in valoresMedia){
        acumulaMedia += valoresMedia[indiceValorMedia];    
    }

    acumulaMedia = acumulaMedia / valoresMedia.length
    return console.log(`A média dos valores é: ${acumulaMedia}.`)

};

let meuArray = [ 7, 9, 6, 4, 3, 1, 8, 7, 1, 5, 4, 1, 2]
// .lenght, começa a contar a partir de 1 (se tiver 1 elemento retornará 1, não é essa brisa q msm tendo 1 elemento ele vai retornar contando 0, só pq array começa a contar do indice 0, no exemplo de 'meuArray' .lenght retornará 6 elementos)
console.log(meuArray.length);

calculaMediaAritmetica(meuArray);

