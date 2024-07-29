// fazendo outra versão do exercicio 38 removendo a redundância e simplificando o código

function imparesEntre(inicio = 0, fim = 100) {
  let armazenaImpares = [];
  // let cont = 0;

  if (inicio > fim) {
    [inicio, fim] = [fim, inicio];
  }

  for (i = inicio; i < fim; i++) {
    if (i % 2 !== 0) {
      armazenaImpares.push[i];
    }
  }

  return armazenaImpares;
}

console.log(imparesEntre(20, 30));
console.log(imparesEntre(30, 20));
