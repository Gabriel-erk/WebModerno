// estrategia 1 para gerar valor padrão
function soma(a, b, c){
    // caso retorne 'falso' da comparação, assumirá o valor 1 (a || 1, se a retornar falso, o valor de a, será 1) (não é uma das melhores formas caso queira somar números, pois pode ter problema ao somar 0, porém, é uma otima forma de atribuir um valor padrão a váriaveis dentro de funções
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

// porém ao passar: soma(0, 0, 0), ele reconhece o 0 como false, e então assume o valor padrão de 1 (0 é considerado false nas comparações de valores)
console.log(soma(), soma(2), soma(3, 4, 2), soma('oi'), soma(0, 0, 0))

// estrategia 2, 3, 4

function soma2(a,b,c){
    // se a for estritamente diferente de undefined (se seu valor e seu tipo forem diferentes de undefined), retornará o valor de a, se não, retornará 1
    a = a !== undefined ? a : 1;
    // verifica se existe 1 em arguments (como b é o segundo parâmetro, ele representa o indice 1, se algum valor foi passado, ele passa a existir, então, "existe valor no indice 1?", se existir joga o valor de b nele mesmo, se não, o valor de 1)
    b = 1 in arguments ? b : 1;
    // aqui verificamos se c recebeu um número, então, se isNan retornar true(não recebemos um número, então c vai receber o valor 1, se não(caso isNan retornar false) retorna o valor de c)
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(soma2(), soma2(3),  soma2(5.5, 6.8, 9.9), soma2(0, 0, 0))

// estrategia 5

// forma mais assertiva de definir valor padrão
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3(2), soma3(4, 5), soma3(0, 5, 1), soma3(0, 0))