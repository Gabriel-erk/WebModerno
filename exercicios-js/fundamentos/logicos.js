function compras(trabalho1, trabalho2) {
  /*
   * comprarSorvete recebe o resultado da comparação de "trabalho1 || trabalho2", onde se o primeiro for true, nem olhará o segundo
   * operadores bit a bit
   */
  const comprarSorvete = trabalho1 || trabalho2;
  /*
   * os 2 tem que ser verdadeiros, caso o primeiro seja falso, ja sabe o resultado (false), e nem olhará o segundo
   * nome: operadores de curto circuito
   */
  const comprarTv50 = trabalho1 && trabalho2;
  /*
   *simulando um 'xor' (ou exclusivo), pois js não possui um operando especifico para representa-lo, então, seguindo a tabela F ou V, pode-mos simular utilizando o != (diferente de), onde, se os resultados forem diferentes, retornará true, ou seja, irá comprar a tv32, já que a condição estipulada é de apenas um dos trabalhos ser verdadeiro (se ambos forem true, retornará false, ou seja, vai comprar a de 50, ja q a sua condição e ambos serem true, se forem ambos false, retornará false, onde ai, nao vai ter oq fazer, vai juntar grana pq ta duro)
   */
  const comprarTv32 = trabalho1 != trabalho2;
  /* 
  * manter saudavel recebe a negação logica de 'comprarSorvete', ou seja (finalmente conseguindo pegar um exemplo e entender essa merda que não faz sentido nenhum), se comprarSorvete for true, manterSaudavel vai receber false, já que, o simbolo ! irá inverter o seu valor, fazendo com que 'manterSaudavel' = false (ou seja, voce nao vai estar saudavel fdp)
  * se comprarSorvete for false, manterSaudavel = true
  */
  const manterSaudavel = !comprarSorvete;

  /* 
  * JS suporta apenas 1 retorno, e eu precisaria retornar 4 constantes
  * retornando elas criando um objeto
  * normalmente a forma "correta", seguindo os conceitos de um objeto (onde objetos são uma coleção de pares, chave e valor), seria colocando o nome do atributo e o seu valor (ex: saudavel: manterSaudavel - o atributo "saudavel" recebe o valor da constante manterSaudavel)
  * porém, neste contexto, ao criar um atributo com o mesmo nome da constante, este processo de pares chave valor será feito automaticamente por debaixo dos panos, será criado o atributo "manterSaudavel" (nome da constante) e vai receber o valor da constante, ou seja, o resultado booleano (true ou false)
  */   
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

console.log('caso 01)');
console.log(compras(true, true));
console.log('caso 02');
console.log(compras(true, false));
console.log('caso 03');
console.log(compras(false, true));
console.log('caso 04');
console.log(compras(false, false));