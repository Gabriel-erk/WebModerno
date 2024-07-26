const frutas = (nomeFruta = ' ') => {
    switch(nomeFruta){
        case "maça": console.log('não vendemos esta fruta aqui');
        break
        case "kiwi": console.log('estamos com escasez de kiwi');
        break
        case "melancia": console.log('aqui está, são 3 reais o quilo')
        break
        default: console.log("produto inválido");
        // default: console.log(new Error);
        break
    }
}

frutas("maça");
frutas("kiwi");
frutas("melancia");
frutas("rai");
