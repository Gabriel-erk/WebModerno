// passando uma função anônima para a constante soma
const soma = function(x, y){
    return x + y;
}

// cao não passe nenhum valor ao parâmetro operacao, ele receberá a função soma
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b)) 
}

imprimirResultado(2,3)
imprimirResultado(5,4, function(c,d){
    return c * d;
})
// pode-se passar a própria função soma como parâmetto também
imprimirResultado(5,7, soma)
// passando função arrow anonima como 3 parâmetro também (função arrow sempre vai ser função anônima)
imprimirResultado(8,7, (z,v) => z-v);

console.log('Função anônima em objeto');

const objetoTeste = {
    falar: function(){
        console.log('ola')
    },
    falares(){
     console.log('ligh weight')
    }
}

// usa os parenteses pq é função, msm dentro de um objeto
objetoTeste.falar()

