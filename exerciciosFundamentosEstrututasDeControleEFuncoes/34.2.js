function verificaTodosCaracteres(string1, string2) {
  let stringMaior = "";
  let stringMenor = "";

  /* 
  *  Determina qual string é maior em comprimento
  * não se pode usar string1 > string2 pois isso não determina realmente qual é maior ou menor com base no comprimento - Use string1.length > string2.length para determinar a string maior com base no comprimento. 
  */
  if (string1.length > string2.length) {
    [stringMaior, stringMenor] = [string1, string2];
  } else {
    [stringMaior, stringMenor] = [string2, string1];
  }

  let armazenaCaracterStringMaior = [];

  // laço externo só será alterado quando finalizar o interno, ou seja, quando percorrer todas as posições de 'stringMaior'
  for (let j = 0; j < stringMaior.length; j++) {
    // quando este laço interno se concluir, será incrementado 1 no laço externo, posso percorrer todas as posições de stringMenor, comparando com cada posição de stringMaior, enquanto não altero a posição de stringMaior
    for (let i = 0; i < stringMaior.length; i++) {
      // se a stringMenor na posição i for igual a stringMaior na posição que está sendo comparada, ou seja, se a letra de string menor existir em string maior, guarde em uma variavel na posição cont e aumente o valor de cont
      if (stringMenor[i] == stringMaior[j]) {
        // jogando na última posição do array quando executada esta linha
        armazenaCaracterStringMaior.push(stringMaior[j]);
        // cont++;
      }
    }
    if (stringMenor.length == armazenaCaracterStringMaior.length) {
      console.log(true);
      console.log(armazenaCaracterStringMaior);
      // console.log(stringMaior);
      return true;
    } else {
      console.log(false);
      console.log(armazenaCaracterStringMaior);
      // console.log(stringMenor);
      // return false
    }
  }
}

// verificaTodosCaracteres("marcelo", "zzyyxxolecramxxyyzz");
verificaTodosCaracteres("ana", "valentina");
// verificaTodosCaracteres("maraa", "fermantaa");
