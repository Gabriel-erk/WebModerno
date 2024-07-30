function conceitosNotas(arrayNotas){
    let conceito = ' '
    for(nota in arrayNotas){
        if (arrayNotas[nota] >= 0.00 && arrayNotas[nota] <= 4.9) {
            conceito = 'D'
            console.log(conceito);
        } else if(arrayNotas[nota] >= 5.0 && arrayNotas[nota] <= 6.9){
            conceito = 'C'
            console.log(conceito);
        } else if(arrayNotas[nota] >= 7.0 && arrayNotas[nota] <= 8.9){
            conceito = 'B'
            console.log(conceito);
        } else if(arrayNotas[nota] >= 9.0 && arrayNotas[nota] <= 10){
            conceito = 'A'
            console.log(conceito);
        }
    }
}

let meuArray = [8.0, 7.7, 4.4, 6.9, 9.0]
console.log(conceitosNotas(meuArray));