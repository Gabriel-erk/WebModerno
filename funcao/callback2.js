const notas = [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0 ];

// exemplo sem callback

const notasBaixas1 = [];
/* 
* itera sobre cada índice do array notas
* se iterasse sobre o conteúdo, daria errado, então fica fácil de saber q é somente o indice que está sendo iterado 
* for in termina depois que todos os indices foram percorridos (obs: ele passa por todas as propriedades enumeraveis de um objeto, no caso do array, os indices)
*/
for (let i in notas){
    if(notas[i] < 7.0){
        // método push adiciona ao final do array
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// exemplo com callback

console.log('Exemplo callback 01:')

/**
 * a função anônima vai retornar true ou false (por causa do return nota < 7, se for verdadeiro, se o elemento atual de 'notas' for menor que 7 retornará true para o filter)
 * se retornar true para o filter, o elemento em que ele estava percorrendo será passado para 'notasBaixas', primeira vez percorrendo: elemento do indice 0 (7.7), o valor passado para o parâmetro da função anônima dentro dentro de filter será 7.7, vai fazer a comparação, 7.7 é menor que 7? não, então retornará false
 * se retornar false, o valor 7.7 será 'excluido do array notas' (não do array original, mas desse 'sub-array' que estamos usando) e não será adicionado a notasBaixas2 
 */
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7;
})
console.log(notasBaixas2);

/*
* utilizando função arrow no filter 
* reduzindo a função do ex 01
*/
console.log('Exemplo 02:')

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

// armazenando a função arrow em uma váriavel para poder chamar em todo o sistema depois caso necessário
console.log('Exemplo 03:')

const notasMenorQue7 = nota => nota < 7;
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)

