class Pessoa {
    // aqui vai ter o que vai ser passado na instância do objeto, na construção do objeto que será instanciado a partir da classe Pessoa, seus atributos
    constructor(nome){
        /*
        * ao usar o this, defino o atributo como publico, e posso chama-lo quando quiser
        * o this refere-se ao objeto atual que foi instanciado, ex: const p1 = new Pessoa - o this está se referindo a p1 
        */
        this.nome = nome
        /* 
        * testando para ver se dá para contornar o fato do this variar, já q dependendo da execução do metodo 'falar'( como por, ex, no browser), o this pode variar
        */
        this.falo = () =>{ return console.log('oi');}
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
// 'Pietro' foi passado para o construtor
const p1 = new Pessoa('Pietro');
/* 
* caso eu realize esta mesma chamada no browser, instanciando p1 e, por ex: document.getElementsByTagName('body')[0].onclick = p1.falar() - será retornado undefined, pois dependendo da chamda, o this pode variar 
*  
*/
p1.falar()
p1.falo()

// função factory
const criarPessoa = nome => {
    /* 
    * este objeto tem ciência do contexto lexico de onde ele foi declarado
    * ele foi declarado dentro desta função (criarPessoa), oq faz ele ter acesso mais abrangente, tendo acesso ao escopo da função em que foi criado
    * mesmo ao instanciar voce tendo acesso apenas ao objeto, o objeto tem acesso a variavel do método no qual ele foi criado   
    */
    return {
        /*
        * não foi necessário acessar a váriavel nome a partir do this, logo, ele não varia dependendo do contexto de onde for chamado 
        */
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()