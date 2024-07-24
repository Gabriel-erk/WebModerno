// iife - Immediately invoked function expression
// função que já é chamada na hora da declaração (ao ser declarada, com a sintaxe correta, ele já será chamada), este tipo de função foge do escopo global, e suas variaveis, funções, etc ficarão apenas no escopo local
// será executada assim que o script for lido
// claro que existem regras, caso tente acessr deliberadamente o escopo global do browser (window.) ou do próprio node (global.) voce estará interagindo com o escopo global
(function(){
    console.log('Executada na hora!');
    console.log('Foge do escopo mais abrangente/global!');
})()

/*
* os scripts são parecidos, ambos serão executados ao inicializar o progrma, porém este esta tocando o escopo global 
*/
console.log('Executada na hora!');
console.log('Foge do escopo mais abrangente/global!');