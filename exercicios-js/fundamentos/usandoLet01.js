var numero = 1;
{
    let numero = 2;
    /* aqui sera impresso, o valor de let, pois let prioriza o escopo, entao: "tem este valor aqui dentro do escopo? sim, entao use ele", se não, procure for do escopo, se tiver, use ele (mesmo se o fora do escopo for var, encontre a variavel com este nome) 
    * caso as duas váriaveis "número" fossem declaradas com let, ainda sim, seria priorizado o let que esta dentro do escopo, caso não encontre, use o de fora
    * váriaveis utilzando a palavra reservada let, possuem escopo de função, escopo de bloco (como utilizado aqui) e escopo global
    * Váriaveis utilizando a palavra reservada var, possuem escopo de função e escopo global
    */
    console.log("dentro =", numero);
}
console.log("fora =", numero);