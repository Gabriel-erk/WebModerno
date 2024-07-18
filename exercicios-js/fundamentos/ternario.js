/* 
* criando uma função arrow
* nome da função é resultado, e como só possui 1 parâmetro (nota), não há a necessidade de colocar parentes (function lalala(param1))
* exemplo ternario, onde tem 3 operandos (nota >= 7, que vai retornar true ou false, 'Aprovado', caso seja retornado verdadeiro de nota >= 7, e 'Reprovado', caso seja retornado false de nota >= 7)
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// chamando a função e passando o valor do parâmetro
console.log(resultado(7.1));
console.log(resultado(6));