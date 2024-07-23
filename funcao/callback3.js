// exemplo utilizado no browser
/**
 * getElements retorna um array, independente do elemento escolhido, e especificamos a posição do elemento que queremos (especificar pois é um array, e em apenas 10% dos casos o body pode ter mais de um)
 * quando o usuário clicar no body será disparado uma função anônima que recebe um evento (que você não necessariamente tem que especificar, se voce não usar as propriedades do evento não precisa declarar, por ex, event.target, não utilizamos nenhuma propriedade do tipo, no escopo da função, então não precisamos declarar o evento) como parâmetro e joga uma mensagem na tela
 * function(e){
    console.log('O evento ocorreu!'); é quando registramos/definimos o callback
 */
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!');
}