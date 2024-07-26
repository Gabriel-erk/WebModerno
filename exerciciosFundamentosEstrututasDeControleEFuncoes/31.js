const verificaNumerosNegativos = arrayNumeros => {
    let numerosNegativos = 0;
    for(let indiceArray in arrayNumeros){
        if(arrayNumeros[indiceArray] < 0){
            numerosNegativos++
        }
    }
    console.log(numerosNegativos)
}

const meuArray = [-1, 10, -5, -9]
verificaNumerosNegativos(meuArray)