const encontraParesEntre1e100 = () => {
    let zeroAcem = 0;
    let armazenaPares = [];
    let armazenaImpares = [];
    // 101 pois quero que conte até 100 antes de parar
    while(zeroAcem < 101){
        if(zeroAcem % 2 == 0){
            armazenaPares[zeroAcem] = zeroAcem;
        } else /* se não fo par, é impar, só de graça, armazenando os impares também */ {
            armazenaImpares[zeroAcem] = zeroAcem;
        }
        zeroAcem++
    }
    return armazenaPares, armazenaImpares
}

console.log(encontraParesEntre1e100());