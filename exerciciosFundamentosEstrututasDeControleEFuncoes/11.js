/* 
* desenvolvendo uma função que verifica se o ano o ano é bissexto e retorna se ele é bissexto ou não
* se o resto da divisão pelo ano passado for diferente de 0 e o resto da divisão do ano passado por 400 for igual a 0, OU se o resto da divisão do ano passado por 4 for igual a 0 E o resto da divisão pelo ano passado por 100 for diferente de 0, o ano é bissexto (retorno, 'ano bissexto')
* se for falso, retorno: não é bissexto
*/

function calculaAnoBissexto(ano) {
  if (ano <= 0) {
    console.log('não é bissexto');
  }
  else if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log("ano bissexto");
  } else {
    console.log("não é bissexto");
  }
}

calculaAnoBissexto(0)
calculaAnoBissexto(4)
calculaAnoBissexto(100)
calculaAnoBissexto(400)
calculaAnoBissexto(800)
calculaAnoBissexto(2020)
calculaAnoBissexto(2021)