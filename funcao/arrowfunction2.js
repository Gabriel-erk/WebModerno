function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        /* 
        * dentro de uma arrow function, o this não varia, seu valor é baseado no contexto lexico, no contexto de onde ele foi definido (aqui, no contexto da função pessoa, onde this.idade foi definido) 
        * mesmo se chamar esta função de lugares de diferentes, graças a arrow function o this continua se referenciando ao mesmo lugar, ao this.idade de Pessoa (já que foi escrito na função, pessoa)
        * como no exemplo abaixo, caso tente definir um atributo dentro da arrow function e chama-lo fora da arrow function, ele não é encontrado, this começa o 'this' de this.nome começa a se referir ao this global do node
        */
        this.idade++;
        this.nome = 'sergio'
        console.log(this.idade);
    }, 1000);
    console.log(this.nome);
}

new Pessoa;