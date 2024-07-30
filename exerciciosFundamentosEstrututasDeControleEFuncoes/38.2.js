// fazendo outra versão do exercicio 38 removendo a redundância e simplificando o código

function imparesEntre(inicio = 0, fim = 100) {
  let armazenaImpares = [];
  let cont = 0;

  /*
   * Portanto, não é necessário alterar a declaração do for, pois a inversão dos valores garante que inicio seja sempre o valor menor e fim o valor maior antes do loop começar. Isso simplifica o código e evita duplicação
   * Como a inversão já garante que inicio seja menor ou igual a fim, o loop for (let i = inicio; i < fim; i++) funcionará corretamente.
   * Ele começará de inicio e irá até fim - 1, independente dos valores originais de inicio e fim.
  */
  if (inicio > fim) {
    [inicio, fim] = [fim, inicio];
  }

  for (i = inicio; i < fim; i++) {
    if (i % 2 !== 0) {
      armazenaImpares[cont] = i
      cont++;
    }
  }

  return armazenaImpares;
}

console.log(imparesEntre(20, 30));
console.log(imparesEntre(30, 20)); // testando passando valores maiores primeiro
