function Carro(velocidadeMaxima = 200, delta = 5) {
  /**
   * criando atributo privado (quando se usa let, const ou var)
   * caso fosse publico o usuário poderia ter acesso e alterar o valor da vel. maxima estipulado pelo meu programa, gerando incontaveis erros
   * será acessado somente pelo escopo da função construtora
   * */
  let velocidadeAtual = 0;

  // criando atributo público (this representa atributos públicos)
  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.getVelocidadeAtual = function(){
    // chamei a função, e quero que retorne este valor para mim, sempre fique atento para se a função que está criando precisa de um return (geralmente erramos sempre no mesmo lugar)
    return velocidadeAtual
  }
}

/**
 *  instanciando um objeto a partir de uma função construtora (sem os parentes para pegar os valores padrões) 
 * cada objeto vai ter sua própria referência dos atributos da classe construtora (não irão substituir os originais), cada um tera os seus próprios valores associados a si
 */
const uno = new Carro;

uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual());

// mostrando que Carro ainda é uma classe
console.log(typeof Carro);
// e uno um objeto instanciado a partir da função construtora carro
console.log(typeof uno);

