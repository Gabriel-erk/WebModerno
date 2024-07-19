let dobro = function (a) {
    return 2 * a;
}
/*
* função arrow é sempre uma função anônima, então, para usa-la depois, pode-se guarda-la em uma váriavel/constante
 */
dobro = (a) => {
    return 2 * a;
}
/**
 * dobro = a => 2 * a; - aqui, ao tirar o corpo da função(os {}), ocorre um return implicito (em 2 * a) 
 * já que é uma função de uma linha só função de uma linha só
 */
dobro = a => 2 * a;
console.log(dobro(Math.PI));

let texto = function() {
    return 'Olá'
}

texto = () => 'Olá';

/**
 * _ pode substituir o '()', caso ache que deixará o código mais curto, ele ainda permite voce receber apenas 1 parâmetro(ele possui um parametro), porém, pode ignorar se quiser
 * 
 */
texto = _ => 'Olá';

console.log(texto())