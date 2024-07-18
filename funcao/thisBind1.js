const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    },
    falar2(){
        // apontando para um atributo que não existe neste objeto
        console.log(this.peidei);
    },
    falar3: ()=>{
        this.idade = 10;
        console.log(this.idade)
    }
};

const marquito = {
    peidei: 'boa noite'
}

/**
 * undefined pois this não está apontando para o objeto pessoa
 */
const pessoaFala = pessoa.falar;
pessoaFala();

/* 
* pessoa.falar.bind(pessoa); - utilizando o método bind (as funções tem outras funções associadas a elas, como bind, que podem ser chamadas), para "amarrar" o this (que coloquei dentro do método falar: console.log(this.saudacao) ) ao objeto pessoa, quero que o this do metodo falar aponte sempre para o objeto pessoa, já que, dependendo do contexto, o this pode variar, como por exemplo: const pessoaFala = pessoa.falar; pessoaFala(); - o resultado imprimido no console é undefined, pois o this não aponta para o objeto pessoa, ele não encontra o atributo 'saudacao'

*/
const pessoaFala2 = pessoa.falar.bind(pessoa);
pessoaFala2();
const pessoaFala3 = pessoa.falar2.bind(marquito);
// imprimindo um atributo que seu valor não existe no objeto no qual foi decladrado, porém, atraves do bind, fiz com que o this do método falar2 aponte para o objeto marquito e encontre o atributo "desejado"
pessoaFala3();

const pessoaFala4 = pessoa.falar3;
pessoaFala4();