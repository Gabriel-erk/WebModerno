function imparesEntre(inicio = 0, fim = 100) {
  let armazenaImpares = [];
  let cont = 0;

  if (inicio > fim) {
    [inicio, fim] = [fim, inicio];

    for (let i = inicio; i < fim; i++) {
      if (i % 2 !== 0) {
        armazenaImpares[cont] = i;
        cont++;
      }
    }
  } 
  else {
    for (let i = inicio; i < fim; i++) {
      if (i % 2 !== 0) {
        armazenaImpares[cont] = i;
        cont++;
      }
    }
  }

  return armazenaImpares;
}

console.log(imparesEntre(20, 30));
