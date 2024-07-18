function teste1 (num) {
    /*
    * como não tem chaves, 'para determinar o que vai ter no bloco if', ele terá apenas uma sentença de código associada a ele (apenas uma linha de código associada a ele)
    * e a linha: console.log("final"), está "fora" do seu escopo, então, sempre será executada, independente se if for verdadeiro ou não
    * isto é valido somente em casos onde voce terá apenas 1 sentença de código (mesmo eu tendo só uma, prefio utilizar chaves, para uma melhor identação)
    */
    if(num >= 7)
        console.log('Numero é:' + num);

    console.log('final');
}

// console.log(teste1(7));
// console.log(teste1(5));

function teste2 (num){
    /* 
    *  if(num > 7) ; { console.log( num )}
    * devido ao ; apos o definir o if, dou a entender que a sua sentença de código acaba ali, ou seja, vazia
    * por isso, será executado o console.log(num) independente se num > 7 for false ou true, já que ele não está associado com o if
    */ 
    if(num > 7) ; { // não usar ';' em estruturas de controle
        console.log(num);
    }
}

console.log(teste2(6));
console.log(teste2(8));