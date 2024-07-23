// Closure é o escopo criado quando a função é declarada
// este escopo permite a função acessar e manipular variáveis externas á função

// Contexto lexico em açõo

// declarado globalmente, em module.exports, no contexto do node
const x = "Global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  //retornando a função 'dentro' - nem precisa de parenteses
  return dentro;
}

const minhaFuncao = fora();
/*
* vai imprimir o valor de x declarado dentro da função 'fora'
* toda função é um closure 
* a função não tem acesso somente aos seus parametros e valores definidos dentro de seu corpo, também tem acesso a váriaveis externas, variaveis que estão no escopo ao redor da sua definição (e também variaveis globais)
* a função tem memória das suas origens, por isso ele não vai ler o valor de 'x' declarado globalmente
*/
console.log(minhaFuncao());
