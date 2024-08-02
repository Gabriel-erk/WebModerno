// calcula quantos numeros estão no intervalo de 10, 20

const calculaNumerosIntervalo = numeros => {

    let armazenaNumerosNoIntervalo = []
    let armazenaNumerosForaIntervalo = []
    
    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] >= 10 && numeros[i] <= 20) {
            armazenaNumerosNoIntervalo.push(numeros[i])
        } else {
            armazenaNumerosForaIntervalo.push(numeros[i])
        }
    }

    console.log(armazenaNumerosNoIntervalo);
    console.log(armazenaNumerosForaIntervalo);
}

let meuArray = [70, 10, 4, 17, 18, 11, 9, 14]
calculaNumerosIntervalo(meuArray)