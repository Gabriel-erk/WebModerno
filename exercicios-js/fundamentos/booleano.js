let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
/*  descobrindo se, o valor 1 é false ou true, utilizando a negação (cada exclamação quer dizer que é negação, com duas, a segunda anula a negação da primeira) - resultado aqui: true */
console.log(!!isAtivo);

// aqui, seria falso
console.log(!isAtivo);

console.log('verdadeiros....');
// qualquer numero inteiro sera convertido para verdadeiro em js

console.log(!!3);
console.log(!!1);
// numeros negativos
console.log(!!-1);
//um espaço em branco tambem sera validado como verdadeiro
console.log(!!' ');
//textos tambem
console.log(!!"texto");
//array tambem
console.log(!![]);
//objetos
console.log(!!{});
// valor ifinito
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos.....");
console.log(!!0);
// string vazia
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
// aqui ele nao so sera olhado o valor atribuido, ou seja, false, resultando em false novamente(que se aplica a true tambem)
console.log(!!(isAtivo = false));

console.log("pra finalizar, utilizando ||");

// aqui pegara os elementos, e por causa do contexto, convertera par true ou false
console.log(!!('' || null || 0 || ' '));

// 'desconhecido' é o valor padrao, caso ele nao encontre um valor dentro da variavel nome, sera imprimido desconhecido 
let nome = '';
console.log(nome || 'Desconhecido');

nome = 'lucas';
console.log(nome || 'Desconhecido');

console.log("Explicação de como funciona ! - utilizando false");

/* exemplo mais pratico de como essa merda funciona (aqui, estou usando ! = "nao/negação", no falso, ate onde entendi isso basicamentr inverte o signifcado, se a condição seria verdadeira, passa a ser falsa, e deve ser utilizada de acordo com o contexto do sistema):*/

console.log(!false);

/* aqui continua sendo false, pois, o primeiro exclamação inverte (deixando true), e o segundo anula o primeiro, voltando ao estado original = false*/
console.log(!!false);

console.log("Explicação de como funciona ! - utilizando true");

console.log(!true);

console.log(!!true);


