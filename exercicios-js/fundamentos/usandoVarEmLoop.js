// utilizando var, entao, a váriavel i, será vista no código inteiro, pois var não tem escopo de bloco
for (var i = 0; i <10; i++){
    console.log(i);
}

// i = 10, pois i só irá sair do laço quando a condição estabelecida for falsa, ou seja, i maior que 10
console.log(`i = ${i}`);