let a = 7;
let b = 94;
let temp;

// variavel temporaria para armazenar o valor que desejo, q iria sumir, ao atribuir a variavel a, outro valor
temp = a;
a = b;
b = temp;

console.log('o valor da variavel a é: ' + a);
console.log('o valor da variavel b é: ' + b);
