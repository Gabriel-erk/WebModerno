var numero = 1;

{
    var numero = 2;
    console.log("dentro = ", numero);
}

console.log("fora =", numero);

/* será imprimido 2, tanto no 1 console.log, quanto no segundo console.log, a palavra reservada var, só restringe o seu alcance em 1 caso, onde foi declarado no escopo de função, caso declare uma váriavel utilizando a palavra reservada var, a mesma não poderá ser acessada fora do mesmo, neste caso, ele não se restringe a blocos de código, apenas a funções, fora isto a variável declarada com var, será global, aqui, foi sobreescrita na linha 4, pois tem o mesmo nome, por isso, ambos os resultados impressos são 2 (valor do segundo var = numero) */