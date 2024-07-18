/* 
* criando uma função construtora
* usada para criar objeto em js
*/
function Pessoa() {
    /*
    * criando um objeto/propriedade e atribuindo valor de 0 
    * o this se refere ao novo objeto que for criado quando a função 'Pessoa' for chamada com o operador 'new', ex: new Pessoa, this irá apontar para este objeto (ou era, em js é diferente)
    */
    this.idade = 0;

    /*
    * crianndo uma constante chamada self(geralmente nome padrão para qunado irá receber o this)
    * forma de driblar este comportamenteo indadequado do this variar
    * declarada dentro da função construtora pessoa e por ser uma constante, seu valor não vai mudar, this sempre irá se referir a instância atual (exemplo: new Pessoa, this irá se referir sempre a ele, e não ao objeto global do node ou do navegador)
    * com isso posso acessar tranquilamente as propriedades de 'Pessoa' dentro de outras funções, como: self.idade++; console.log(self.idade); - que antes apontava para o objeto global e retornava NaN
    */
    const self = this;

    // criando a função setInterval e passsando uma função anônima em seus parenteses
    setInterval(function(){
        // incrementando o valor de this.idade e mostrando na tela, com um intervalo de 1000 milisegundo (1 segundo)
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
    /* 
    * .bind(this) funcionaria, faria com que this apontasse para o objeto que fosse criado quando a função pessoa fosse chamada com o operador new, já que o estou executando dentro do escopo da função construtora Pessoa
    */
};

/*
* this é chamado por um temporazidor (disparado de 1 em 1 segundo), por isso, this não encontra o valor que desejamos (this.idade) 
* this esta sendo chamado pelo objeto global (global, aqui no node)
* criando um novo objeto do tipo 'Pessoa' com o operador new
* chama a função construtora pessoa, inicializa um novo objeto com a propriedade idade inicializada em 0 e configuramos o intervalo que incrementa essa propriedade a cada 1 segundo
*/
new Pessoa;