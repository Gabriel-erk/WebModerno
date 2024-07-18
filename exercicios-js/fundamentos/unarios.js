let num1 = 1;
let num2 = 2;

// nao tem tanta pressa para somar
num1++
console.log(num1);

// tem pressa para subtrair
--num1
console.log(num1);

/* 
* aqui se mostra a diferença entre os dois
* neste caso de comparançao, primeiro é somado +1 ao valor de num1 e depois comparado
* num2 é comparado e depois da comparação reduzido
* ou seja, sera imprimido "true", pois naquele momento eles são iguais, porém, se olhar na linha debaixo, o resultado será diferente, pois depois da comparação, o valor já é reduzido
* evitar fazer este tipo de comparação em uma linha, para manter o código mais limpo e simples possivel
*/
console.log(++num1 === num2--);
console.log(num1 === num2);
