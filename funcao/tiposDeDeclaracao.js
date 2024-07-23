/**
 * js carrega tudo antes da execução de algo, inclusive as funções, elas são carregadas e já ficam prontas para serem utilizadas, independente da sua linha de declaração, por isso, é possivel chamar a função soma antes da sua linha de declaração sem problema algum
 * o que não acontece com a função sub e mult, armazenadas em constantes, só podem ser chamadas após sua linha de declaração
 */
console.log(soma(3,4));
// console.log(sub(5,4));

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(5,4));

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(5,4));