function criarProduto(nome, preco){
    return {
        // não precisa dos ':' já que o nome do meu atributo é o mesmo do parâmetro - também podemos retornar funções, funções aninhadas...
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Perfume', 1200));
console.log(criarProduto('cadeira', 700));

/*
* outra forma de fazer é passando o desconto com valor padrão no parâmetro 
*/
// function criarProduto(nome, preco, desconto = 0.1){
//     return {
//         nome,
//         preco,
//         desconto
//     }
// }

