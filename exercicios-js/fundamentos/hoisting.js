console.log("a =", a);
var a = 2;
console.log("a =", a);

/* neste exemplo acima, a váriavel a sofreu um hoisting (içamento), ou seja, "foi jogada para cima", ja que, na primeira linha, estou chamando uma váriavel que tecnicamente, ainda não existia, em outras linguagens, daria um erro, pois a máquina começa a ler o código de cima para baixo, porém, js é mais flexivel, entao, na primeira impressão de a, na linha 1, ela será dada como undefined (existe, mas não há nenhum valor associado a mesma, na linha 3 ela já será impressa normalmente)*/

console.log("Utilizando let");

console.log("b =", b);
let b = 2;
console.log("b =", b);

/* neste exemplo, utilizando let, o hoisting não acontece, caso a váriavel não for definida antes de ser chamada, um erro será gerado*/

