// adicionando um método chamado 'entre' no protótipo de "number", e isso signidica que todos os números em javascript terão acesso a este método (ao declara-lo, todas as instâncias de números em javascript herdarão este método "entre", todas poderão acessa-lo)
Number.prototype.entre = function(inicio, fim){
    // this, significa o número no qual o método foi chamado, exemplo: if(nota.entre(9,10)), nota, dentro do método entre será representado como 'this', que vai ter a comparação: return nota >= inicio && nota <= fim; (por debaixo dos panos será assim) 
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    
    if(nota.entre(9, 10)){
        console.log('Medalha de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota invalida')
    }
}

console.log(imprimirResultado(10));
console.log(imprimirResultado(7));
console.log(imprimirResultado(4));
console.log(imprimirResultado(0));
console.log(imprimirResultado(11));