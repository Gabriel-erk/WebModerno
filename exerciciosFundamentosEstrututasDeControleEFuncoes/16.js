// mini calculadora, de um jeito mais dificil, sem switch

function calculadora(valor1, operacao, valor2) {

  let resultadoOperacao = 0;

  if (operacao == "+") {
    resultadoOperacao = valor1 + valor2;
  } else if (operacao == "-") {
    resultadoOperacao = valor1 - valor2;
  } else if (operacao == "*") {
    resultadoOperacao = valor1 * valor2;
  } else if (operacao == "/") {
    resultadoOperacao = valor1 / valor2;
  } else {
    console.log("Operação inválida");
  }

 console.log(resultadoOperacao);
}

calculadora(10, '+', 20)