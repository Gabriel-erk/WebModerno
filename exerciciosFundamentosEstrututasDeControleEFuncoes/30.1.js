// descobrir o maior e o menor

const maiorEmenor = numeros => {
    let maiorNumero = numeros[0];
    let menorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
        
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i]
        }
    }

    console.log(maiorNumero);
    console.log(menorNumero);
}
let meuArray = [10, 15, 70, 31]

maiorEmenor(meuArray)