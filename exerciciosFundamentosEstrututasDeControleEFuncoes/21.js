const planoDeSaude = (idade) => {
  valorPlano = 100;

  //   retornando função anônima interna
  return function () {
    if (idade < 10) {
      valorPlano += 80;
      console.log(`valor do plano: ${valorPlano}`);
    } else if (idade >= 10 && idade <= 30) {
      valorPlano += 50;
      console.log(`valor do plano: ${valorPlano}`);
    } else if (idade > 30 && idade <= 60) {
      valorPlano += 95;
      console.log(`valor do plano: ${valorPlano}`);
    } else if (idade > 60) {
      valorPlano += 130;
      console.log(`valor do plano: ${valorPlano}`);
    }
  };
};

// parenteses vazio para mostrar que também chamo a função interna
planoDeSaude(61)();
