let valor; // nao inicializada

// undefined, nao foi inicializada (apenas foi criada e nenjum valor foi atribuido)
console.log(valor);

/* esta querendo dizer q a variavel valor nao aponta para nenhum endereço de memoria que tenha algum valor dentro (ausencia de valor, de forma resumida) - inicializada dizendo que nao aponta para nenhum local de memoria 
* utilizar dependendo da aplicação em contextos onde, por exemplo, voce nao quer indicar nenhum endereço de variavel, deixar-null pode ser uma boa opção neste caso
*/
valor = null;
console.log(valor);
// console.log(valor.toString()) // erro

// constante produto recebe um objeto vazio (inicializada com objeto vazio, entao nao é undefined)
const produto = {};

/* aqui nao gerara erro, pois nao tem problema tentar acessar um atributo de algo inicializado (porem, o resultado sera undefined, pois .preco nao tem valor, é como se tivesse sido criado, mas nao foi inicializado) */
console.log(produto.preco);

// gera um erro pois nao é possivel acessar algum atributo/valor de um undefined (nao foi inicializado, nao tem nada)
// console.log(produto.preco.reais);

// mostra que é um objeto vazio
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined;
// convertendo para boolean - resultado false pois nao tem um valor
console.log(!!produto.preco);

// estrategia mais inteligente para remover um atributo de um objeto
// delete produto.preco;
console.log(produto);

/* obs: sempre escolher entre undefined e null, null, deixe undefined para o sistema decidir quando utilizar */
produto.preco = null // sem preço
console.log(!!produto.preco); // false, pois nao tem valor no atributo

console.log(produto);