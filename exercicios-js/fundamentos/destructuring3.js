
/* criando uma função que me devolve um numero aleatorio, passando 2 parametros  (nome: tese)
* utilizando operador destructuring para passar valores como parâmetos
* {min = 0, max = 1000}, dentro de chaves, pois quero dizer que o que sera passado será um objeto (e, ao inves de ter q entrar no objeto com a notação ponto e acessar estes atributos, isso será feito de forma automatica, a maquina vai entrar no objeto e extrair para mim estes dois atributos (sera feito tipo numero.min e numero.max))
* dentro destes parametros sera passado o intervalo desejado e dentro da função calculado um numero entre este intervalo
*/
function tese({min = 0, max = 1000}){
    // math.random gera um numero aleaotorio (entre 0 e 1 ) multiplica pelo resultado de max-min, soma com min
    const valor = Math.random() * (max - min) + min;
    // math.floor arredonda o valor decimal passado para o numero menor ou igual a ele, garantindo que o retorno seja de um valor inteiro (basicamente converte o numero quebrado para inteiro e arredonda para baixo ate o inteiro mais proximo)
    return Math.floor(valor);
}

// serão jogados numeros randomicos entre 50 e 40
const obj = { max: 50, min: 40}
// função entra no objeto 'obj' retira os atributos min e max, como passado nos parametros da função e os manipul-la, e aqui, impr
console.log(tese(obj));
// passando apenas o valor minimo, ja que, por padraão o valor de 'max' é 1000, então, se nao receber nada, assume o valor como 1000
console.log(tese({min: 955}));
// passando um objeto vazio, onde, como nenhum valor foi passado para min e max, eles assumirão seus valores padrão, 0 e 1000, e gerarão numeros neste intervalo
console.log(tese({}));
// chamando a função sem passar objeto nenhum, gerará um problema, pois ele tentará desestruturar um objeto null ou undefined (e como desestrutura algo assim?)
console.log(tese());
