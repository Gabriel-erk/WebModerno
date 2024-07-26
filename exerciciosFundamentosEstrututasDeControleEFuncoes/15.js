const carros = tipoCarro => {
    switch(tipoCarro){
        case "hatch": console.log('Compra efetuada com sucesso');
        break
        case "sedans": case "motocicletas": case "caminhonetes":
            console.log('Tem certeza que não prefere este modelo?');
        break
        default: "não trabalhamos com este ttipo de automóvel aqui"
    }
}