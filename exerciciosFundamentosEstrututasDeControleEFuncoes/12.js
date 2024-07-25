// fatorial de um número
// preciso pegar um valor (que sera recebido como parametro), multiplicar ele pelo seu anterior e o anterior dele...ate chegar a um e mostrar o resultado na tela, vou mostrar o número, e o resultado (10! = 3.628.800)
// preciso pegar o número, multiplica-lo por seu anterior, atribuir em uma váriavel, reduzir o número, multiplica-lo pelo anterior e atribuir a mesma váriavel, reduzir ate a multiplicação chegar em 1, 1 será a ultima multiplicação

function fatorialNumero(numeroPrincipal) {
  /*
   * a váriavel que irá acumular o resultado final do fatorial recebe o valor passado como parametro, já que, quero multiplicar o que vai estar dentro dele pelo proximo valor
   */
  let acumulaFatorialNumeroPrincipal = numeroPrincipal;

  for (let i = numeroPrincipal; i > 1; i--) {

    acumulaFatorialNumeroPrincipal = acumulaFatorialNumeroPrincipal * (i - 1);
    
  }
  // console.log(`o fatorial de:${numeroPrincipal}! é: ${acumulaFatorialNumeroPrincipal}`);
  console.log(`${numeroPrincipal}! = ${acumulaFatorialNumeroPrincipal}`);
}

fatorialNumero(5);
