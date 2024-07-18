/* 
* será retornado true, segundo js, '1' é igual a 1
* está sendo comparado somente o conteudo
*/
console.log('01)', '1' == 1);
/* 
* será retornado false, pois aqui estamos sendo estritamente restritos, e comparando com, ou seja, o tipo dos 2 tem que ser iguais
*/
console.log('02)', '1' === 1);
// false pois "3 nao é diferente de 3"
console.log('03)', '3' != 3);
// sendo estritamente restrito, será retornado true, pois estamos comparando o tipo também 
console.log('04)', '3' !== 3);

console.log('05)', 3 > 2 );
console.log('06)', 3 < 2 );
console.log('07)', 3 <= 2 );
console.log('08)', 3 >= 2 );

// 0 pois no js, quer dizer que ele pergara como referencia 01/01/1970
const d1 = new Date(0);
const d2 = new Date(0);

/* 
* nos dois casos será dado como false, já que aqui será comparado o enderço de memória
*/
console.log('09)', d1 == d2);
console.log('10)', d1 === d2);
/* 
* pegando o valor em segundos, e comparando com d2, neste caso, seus valores e tipos são iguais
*/
console.log('11)', d1.getTime() === d2.getTime());

// os valores de undefined e null são iguais
console.log('12)', undefined == null);
// mas seus tipos são diferentes
console.log('13)', undefined === null);
