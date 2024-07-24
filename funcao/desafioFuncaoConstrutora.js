/*
* por debaixo dos panos a classe é uma função, só é escrita de maneira diferente */
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Pietro');

p1.falar()

// transformando classe Pessoa em função construtora
function People(name) {
    // tudo o que fazemos dentro do construtor da classe, fazemos no escopo da função construtora
    this.name = name

    // atributo publico
    this.talk = function(){
        // poderia sim omitir o this ali em cima e usar apenas a váriavel passada como parametro, porém, não teriamos mais acesso a ela depois, ex: objeto instanciado: p2 - console.log(p2.name) = undefined
        console.log(`meu nome é ${this.name}`)
    }

}

const p2 = new People('Jonas')
p2.talk()
console.log(p2.name);