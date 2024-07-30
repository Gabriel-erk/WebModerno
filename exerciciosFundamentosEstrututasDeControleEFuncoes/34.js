function verificaTodosCaracteres(string1, string2) {
  if (string1 > string2) {
    let stringMaior = string1;
    let stringMenor = string2;
  } else {
    stringMaior = string2;
    stringMenor = string1;
  }

  let armazenaCaracterStringMenor = [];
  let armazenaCaracterStringMaior = [];
  let cont = 0;
  for (i in stringMenor) {
    armazenaCaracterStringMenor[i] = stringMenor[i];

    /* 
    * se for igual, armazenaStringMaior recebe esse caracter e aumenta o valor de cont para verificar a próxima posição, se não for igual, aumenta o valor de cont e verifica a proxima posição 
    * quero que compare todos os caracteres de armazenaMaior com um unico caracter de cont antes de aumentar seu valor
    */ 
    if (armazenaCaracterStringMenor[i] == stringMaior[cont]) {
      armazenaCaracterStringMaior[i] = stringMaior[cont];
      cont++
    } else {
        cont++
    }
  }

  if (string1 === string2) {
    console.log("são iguais");
  }
}

verificaTodosCaracteres("oi", "oi");
