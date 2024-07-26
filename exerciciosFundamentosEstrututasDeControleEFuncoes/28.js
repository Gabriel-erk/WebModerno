const verificaParImpar = (numeroArray) => {
  let par = 0;
  let impar = 0;
  /*
     * lembrei que for in joga os indices dentro da minha váriavel parOuImpar, então se tiver 6 números, serão os indices de 0 a 6, não o conteúdo deles, por isso não posso colocar parOuImpar % 2 == 0 
     * é possivel fazer com forEach isso também (até seria mais facil)
   */
  for (let parOuImpar in numeroArray) {
    // parOuImpar está percorrendo os indices de "numeroArray", então numeroArray[parOuImpar], ou seja, verifico se o valor de cada indice é par
    if (numeroArray[parOuImpar] % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log(`números pares: ${par}, números impares: ${impar}`);
};

const meuArray = [17, 7, 8, 4, 2, 5, 6, 10, 7];
verificaParImpar(meuArray);
