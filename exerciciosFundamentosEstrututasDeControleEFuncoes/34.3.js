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

  // váriavel que vai guardar os caracteres da string menor que existem na string maior
  let armazenaCaracterStringMaior = [];

  for(let i = 0; i < stringMenor.length; i++){
    // verifica se o caractere atual da string menor existe na string maior
    if(stringMaior.includes(stringMenor[i])){
      armazenaCaracterStringMaior.push(stringMenor[i])
    }
  }
  /*
  * ao terminar o laço, vai entrar verificar se essa condição é verdadeira
  * se for, significa que os mesmos caracteres da string menor estão presentes na string maior, independente da ordem em que são encontrados na string maior
  * percorreu ele inteiro, armazenou apenas os caracteres que existem na string maior e saiu do laço, se todos os caracteres existirem, chegará nessa condição, ou seja, se todos os caracteres existirem, o tamanho de ambos vai ser igual também 
  */
  if(stringMenor.length == armazenaCaracterStringMaior.length){
    console.log(armazenaCaracterStringMaior);
    return true
  } else {
    console.log(`falso: ${armazenaCaracterStringMaior}`);
    return false
  }
}

verificaTodosCaracteres("marcelo", "zzyyxxolecramxxyyzz");
verificaTodosCaracteres("ana", "valentina");
verificaTodosCaracteres("maraa", "fermantaa");
verificaTodosCaracteres("pietro", "orteip");

