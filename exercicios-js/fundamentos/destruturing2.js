// criando a variavel a, que sera o primeiro valor do array, e recebera 10
const [a, b] = [10];
console.log(a)

/* criando variaveis n1, n3, n5 e n6 com o valor definido por padrao em 0 
* variavel n1(indice 0), ira receber 10, indice 1 foi pulado, entao o valor 7 nao sera atribuido a nenhuma variavel, n3(indice 2) receberá 9, indice 3 receberia 8, porem foi pulado tambem, n5 nao tem nenhum valor sendo passado a ele, entao sera 'undefined' e n6 tem por padrão o valor 0
*/
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1,n3,n5,n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);