function soNoticiaBoa (nota){

    if( nota >= 7 ) {
        console.log('aprovado com ' + nota);
    }
}

console.log(soNoticiaBoa(8));
console.log(soNoticiaBoa(6.1));

function seForVerdadeiroEuFalo(valor) {
    /* 
    * aqui não tem nenhum operador relacionarl (>=, <=)
    * js irá ver o conteúdo que foi passado e converter pra true ou false, se for true, entrará no escopo e executará
    */
    if(valor){
        console.log('É verdade: ' + valor);
    }
}

console.log('-----imprimindo função se for verdade------');
console.log('valores que serão convertidos para false:')
console.log(seForVerdadeiroEuFalo());
console.log(seForVerdadeiroEuFalo(undefined));
console.log(seForVerdadeiroEuFalo(null));
console.log(seForVerdadeiroEuFalo(NaN));
console.log(seForVerdadeiroEuFalo(''));
console.log(seForVerdadeiroEuFalo(0));

console.log('valores que serão convertidos para true:')
console.log(seForVerdadeiroEuFalo(-1));
console.log(seForVerdadeiroEuFalo('oi'));
console.log(seForVerdadeiroEuFalo(' '));
console.log(seForVerdadeiroEuFalo([]));
console.log(seForVerdadeiroEuFalo([1, 2]));
console.log(seForVerdadeiroEuFalo({}));