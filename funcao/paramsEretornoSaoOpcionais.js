function area(largura, altura) {
    const area = largura * altura;
    if(area > 20){

        console.log(`Valor acima do permitido: ${area}`);
        // sem o console.log e utilizando return não é retornado undefined ao chamar a função e o if ser executado
        // return `Valor acima do permitido: ${area}`;
    } else {
        return area
    }
}

console.log(area(2,2));
// retorna Not a Number(NaN), pois passei apenas 1 parâmetro (largura) deixando o outro undefined(altura), fazendo com q: const area = 2 * undefined, como não é > 20 entrou no else e me retornou um NaN
console.log(area(2));
// vai pegar apenas os 2 primeiros valores
console.log(area(2,3,5,6,7,18));
// retorna NaN pelo mesmo motivo, undefined * undefined
console.log(area())
/* 
* é retornado undefined pois a função area() não possui um retorno dentro do bloco if, e em JS por padrão, caso uma função não retorne explicitamente um valor, é retornado 'undefined' por padrão (para resolver é só usar um return, como no else)
* é retornado undefined pois a função area() não tem nenhum retorno explicito, e por padrão, internamente, as funções retornam undefined
*/
console.log(area(5,5))