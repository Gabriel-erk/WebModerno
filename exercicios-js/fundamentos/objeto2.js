// função
console.log(typeof Object);
// instanciando um objeto a partir de uma função - Objeto
console.log(typeof new Object);

// criando função
const Cliente = function(){};
console.log(typeof Cliente);
// instanciando um novo objeto a partir de uma função
console.log(typeof new Cliente);

/* "sintax sugar - Em resumo, sintaxe sugar é uma maneira de tornar o código mais claro e expressivo sem introduzir novos recursos ou funcionalidades à linguagem.", exemplos são os símbolos +=, -+, *=, q simplificam o código, mas não alteram nenhuma funcionalidade 
* internamente, esta classe será convertida para uma função, utilizar classes é apenas um meio diferente de criar funções 
*/
class Produto {};
console.log(typeof Produto);
console.log(typeof Produto);
console.log(typeof Produto);

// instanciando um objeto a partir da instância de uma função - typeof new Produto(), também seria a mesma coisa
console.log(typeof new Produto);


