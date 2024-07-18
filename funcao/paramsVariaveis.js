function soma(){
    let soma = 0;
    /* 
    * passando os indices de arguments para i 
    * arguments é um array interno de uma função
    * esta função não tem nada explicitamente dizendo que pode receber parâmetros, porém, nada impede de passa-los, e é possivel acessa-los através de arguments, um array interno de uma função 
    */
    for(i in arguments){
        soma += arguments[i];
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3));
/* 
* váriavei soma havia sido inicializada com 0, e ao passar uma string, será concatenado ao valo númerico que estiver na váriavel, este era o comportamenteo esperado
*/
console.log(soma('teste'))
console.log(soma())
console.log(soma('a', 'b', 'c'))
console.log(soma(10, 'b', 'c'))