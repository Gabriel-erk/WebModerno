
/* definindo  uma variavel chamada qualquer que possui o valor 'legal', imprimindo na tela e pedindo para imprimir o tipo dela, no caso, string */
let qualquer = 'legal';
console.log(qualquer);
console.log(typeof qualquer);

/* atribuindo um valor flutuante a variavel qualquer, mostrando seu valor na tela e mostrando seu tipo, mostrando que js é uma linguagem de tipagem fraca, ou seja, é bem flexivel, coisa que nao acontece em linguagens como o java (tipagem forte), que para o seu programa por algo do tipo */
qualquer = 3.1415;
console.log(qualquer);
console.log(typeof qualquer);

// Evitar nome genericos e siglas
let valor = ''; //que valor?
let numero = 1; //que numero, esta associado a que?
let pqp = false /* pqp? oq isso significa? - Produto Quimico Perigoso (significado colocado em forma de comentario, que poderia ser evitada, deixando o codigo mais claro, com um nome mais especifico) */