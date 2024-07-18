const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Medalha de honra');
            break
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            /* 
            * case 3: case 2: case 1: case 0: - todos terão o mesmo texto, então, ao inves de repeti-los em cada case, fica o mesmo para todos, onde, caso seja 3, como 3 não tem nenhum conteudo, ele irá procurar no conteúdo do proximo case, o case 2, que tbm não tem nada e vai procurar no case 1, que não tem nada, e por fim, no case 0, que será executado seu conteúdo mesmo caindo no case 3, 2 ou 1
            * break para dizer que, ao executar o case, saia do bloco switch e não execute mais, não execute os cases abaixo 
            */
            break
        default:
            console.log('Nota invalida')
    }
}

console.log(imprimirResultado(10));
console.log(imprimirResultado(8));
console.log(imprimirResultado(6));
console.log(imprimirResultado(2));
console.log(imprimirResultado(11));