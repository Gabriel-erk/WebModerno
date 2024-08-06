function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    preco: 4589,
    desc: 0.15,
    // criando um atributo chamado getPreco, porém, como este também é o mesmo nome da função, é como se eu estivesse chamando a função
    getPreco
}
/*
* retorna NaN pois o this neste contexto global da função, não está definido (this.preco, this.deesc, não estão definidas, por isso este retorno) 
* o this padrão de uma função acessa o escopo global
*/
console.log(getPreco());

// também não acessa por meio de váriaveis normais
let preco = 20;
let desc = 0.1
console.log(getPreco());

// porém ao definir as váriaveis no escopo global, são encontradas pela função, através do this, q encontra no escopo global
global.preco = 20;
global.desc = 0.1
console.log(getPreco());

// chamando a função através do objeto (onde o this será resolvido a partir das informaçoes do objeto pelo qual a função foi chamada)
console.log(produto.getPreco());

const carro = { preco: 300, desc: 0.1 }
// chamando a função getPreco e o método call, passando o seu contexto de execução como parâmetro, ou seja, o this daquela função, vai apontar para o objeto carro
console.log(getPreco.call(carro));
// metodo aply também faz isso, onde a única diferença entre os 2 é a passagem de parâmetros
console.log(getPreco.apply(carro));

/* diferenças da passagem de parâmetros */

/*
* primeiro passamos o contexto da execução, no caso, o objeto carro, a função será executada utilizando suas informações
* depois passamos os parâmetros da própria função, aqui: o imosto e a sigla da moeda 
* será executado no escopo do objeto carro
*/
console.log(getPreco.call(carro, 0.17, '$'));
/*
* para o apply, primeiro passamos o contexto de execução, e como segundo parâmetro, passamos um array, que é ai onde voce irá colocar todos os parâmetros da função 
* será executado no escopo do objeto carro
*/
console.log(getPreco.apply(carro, [0.17, '$']));

/*
* será executado no escopo global (escopo que possui valores diferentes, por isso, gera um resultado diferente) 
*/
console.log(getPreco.apply(global, [0.17, '$']));

/*
* a diferença entre call e apply é a forma que os parâmetros são passados, um pega primeiro o contexto de execução e depois os parâmetros, enquanto o outro pega também primeiro o contexto de execução e dps, os parâmetros da função que está chamando o metodo apply, são passados dentro de um array
 */


