function calculaAumentoSalario(plano, salario) {
  switch (plano) {
    case "A":
      console.log(`salário novo: ${(salario += salario * 0.1)}`);
      break;
    case "B":
      console.log(`salário novo: ${(salario += salario * 0.2)}`);
      break;
    case "C":
      console.log(`salário novo: ${(salario += salario * 0.3)}`);
      break;

    default:
      console.log("plano invalido");
      break;
  }
}

calculaAumentoSalario("A", 1000);
