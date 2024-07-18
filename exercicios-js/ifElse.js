const imprimirNota = function (nota) {
    // ambos if, e else possuem apenas uma sentença de código, então caso queira é possivel remover as {}
  if (nota >= 7) {
    console.log("Aprovado!");
  } else {
    console.log("Reprovado!");
  }
};

console.log(imprimirNota(8));
console.log(imprimirNota(6));
console.log(imprimirNota('epa')); // aqui esta string esta sendo convertida e comparada, e como ela não era >= 7, retornou reprovado, o que não está certo e deveria retornar um erro, nestas situações deveria tentar converter o valor para um número para ai sim passar para a etapa de comparação
