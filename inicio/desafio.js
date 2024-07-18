const PI = 3.141592;
const raio = 10;
let valorEmMetros = PI * raio * raio;

console.log('o valor em metros quadrados é: ' + valorEmMetros + 'm2.');

/* observação legal:
o javascript possui seu proptio PI, que seria o comando: console.log(Math.PI), que poderia ser usado no lugar da constante PI que criei
*/

valorEmMetros = Math.PI * raio * raio;
console.log('o valor em metros quadrados é: ' + valorEmMetros + 'm2.');
