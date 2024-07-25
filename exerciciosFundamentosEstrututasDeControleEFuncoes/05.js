const reduzCasasDecimais = valor => {
    // fixando casas decimais em 2
    formataValor = valor.toFixed(2);
    // substituindo ponto por virgula
    // formataValor = ele mesmo, porem, o que esta armazenado e o valor passado como parametro limitado em 2 casas, e a operação depois do = é basicante o valor recebido do parameto limitado em 2 casas, e a função replace acessando esse valor e substituindo o ponto por , e retornando para formataValor
    formataValor = formataValor.replace('.', ',');
    console.log(`R$:${formataValor}`)
}

reduzCasasDecimais(5.810956)
reduzCasasDecimais(0.1 + 0.2)