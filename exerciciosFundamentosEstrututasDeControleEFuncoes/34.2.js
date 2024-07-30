function verificaTodosCaracteres(string1, string2) {
  let stringMaior = 0;
  let stringMenor = 0;
  if (string1 > string2) {
    stringMaior = string1;
    stringMenor = string2;
  } else {
    stringMaior = string2;
    stringMenor = string1;
  }

  let armazenaCaracterStringMaior = [];
  // cont pois quero armazenar os caracteres em armazenaMaior em ordem
  let cont = 0;

  // laço externo só será alterado quando finalizar o interno, ou seja, quando percorrer todas as posições de 'stringMaior'
  for (let j = 0; j < stringMaior.length; j++) {
    // quando este laço interno se concluir, será incrementado 1 no laço externo, posso percorrer todas as posições de stringMenor, comparando com cada posição de stringMaior, enquanto não altero a posição de stringMaior
    for (let i = 0; i < stringMaior.length; i++) {
      // se a stringMenor na posição i for igual a stringMaior na posição que está sendo comparada, ou seja, se a letra de string menor existir em string maior, guarde em uma variavel na posição cont e aumente o valor de cont
      if (stringMenor[i] == stringMaior[j]) {
        armazenaCaracterStringMaior[cont] = stringMaior[j];
        cont++;
      }
    } 
  }
   if (stringMenor.length == armazenaCaracterStringMaior.length) {
      console.log(true);
      console.log(armazenaCaracterStringMaior);
      return
    } else {
      console.log(false);
    }
}

verificaTodosCaracteres("marcelo", "zzyyxxolecramxxyyzz");
verificaTodosCaracteres("ana", "valentina");
