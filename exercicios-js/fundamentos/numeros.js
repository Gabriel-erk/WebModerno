const peso1 = 1.0;
// outra forma de atribuir valor a uma variavel/constante - aqui estou atribuindo um numero, do tipo ponto flutuante, atraves de uma string (meio confuso, nao?)
const peso2 = Number('2.0');

console.log(peso1, peso2);
/* aqui, esta verificando se peso1, é um numero inteiro (js considera tanto ponto flutuante quanto numeros inteiro do tipo number (tipagem fraca)), mesmo sendo 1.0, ele sera considerado true (ou seja, numero inteiro) - porem, 1.1, nao */
console.log (Number.isInteger(peso1));
// mesma coisa se aplica a peso 2
console.log (Number.isInteger(peso2));

const avaliacao1 = 9.87;
const avaliacao2 = 6.78;

const total = avaliacao1 + peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

/* usando a função "toFixed(aqui vai o numero de casas decimais que quero imprimir)", para definir quantas casas decimais quero imprimir na tela, ja que é um resultado de ponto flutuante, e possui diversos numeros apos o ponto */
console.log(media.toFixed(2));
// transformando em string
console.log(media.toString());
// transformando em valor binario
console.log(media.toString(2));

// tipo de dado com valor numerico (no caso a variavel media)
console.log(typeof media);

// função, seu tipo é de função
console.log(typeof Number);