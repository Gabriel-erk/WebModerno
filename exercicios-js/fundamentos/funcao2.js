// Armazenando uma função em uma variável
// Não são todas as linguagens que permitem armazenas funções dentro de variaveis (js, linguagem fracamente tipada)
const imprimirSoma = function (a,b){
    console.log(a +b);
}

imprimirSoma(2,3);

// Armazenando uma função arrow em uma variavel;
/* função arrow é uma forma resumida de escrever uma função em js, onde, substitui-se a palavra reservada function, por: "=>" e logo em seguida o corpo da função 
* o nome da "variavel", apos const, é o nome da função, ao utilizar função arrow
*/
const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3));

// retorno implicito (sem o uso do return)
/* nome da função = subtracao, recebe 2 parametros (a e b), e retorna a - b
* neste formato, sem as chaves da função, signica que a função terá somente uma linha de código, executará apenas uma sentença de código (não poderá ter mais que isso, é basicamente para quando a única coisa que a função irá fazer será retornar algo)
*/
const subtracao = (a, b) => console.log(a - b);

subtracao(2,1);

const subtracaoSemConsole = (a, b) => a - b;

// mostrando que, nao é necessariamente tem q ter console.log, mas sim a lógica para utilizar isto, é ter apenas uma sentença de código
console.log(subtracaoSemConsole(5,2));

// criando função dentro de variável que contém apenas 1 parâmetro (como é só um parâmetro, não é necessário uso de parênteses)
const imprimir2 = a => console.log(a);
imprimir2("Legal!!");