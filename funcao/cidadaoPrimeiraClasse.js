// função em JS é first class object ou citzens
// high order functions (quando uma função recebe outra função como parâmetro ou retorna uma função)

/* 
* criando uma função literal
* por padrão retorna undefined caso não use o return, então pode-se dizer q uma função sempre retorna algo
*/
function fun1() {}

// armazenndo função em váriavel
const fun2 = function(){}

// armazendando em um array

const array = [function(a,b){ return a + b }, fun1(), fun2];

/* 
* chamando o indice 0, que armazena uma função anônima que recebe 2 parâmetros e retorna a soma dos 2
* e passando os valores dos parâmetros a e b
*/

console.log(array[0](2,3));

// armazenando em um objeto
/* 
* criando um objeto vazio
*/
const obj = {};
// criando dinamicamente um atributo (criando ele na hora, fora do escopo do objeto), que recebe uma função anônima que retorna "opa"
obj.falar = function(){ return "Opa" }
/*
* chamando a função dentro do atributo do objeto 
* obj.falar() - parenteses para deixar claro que quero executar a função dentro do atributo
*/
console.log(obj.falar())

// passar função como parâmetro

function run(fun){
    fun();
    // return fun()
}

// passando função anônima como parametro que executa um console.log quando é chamada
run(function(){ console.log("Executando")})

// aqui seria necessário ter um return em run() já que este return deixa acessivel este texto apenas dentro do escopo da função que acabamos de criar
// console.log(run(function(){return "Executando"}))

// uma função pode retornar/conter uma função

function soma(a,b){
    // retornando uma função que recebe um parâmetro
    return function(c){
        console.log(a + b + c)
    }
}

// chamando a função soma passando os parâmetros de a e b (2,3), e o parâmetro da função que ele retorna logo a frente(4)
soma(2,3)(4);
// criando uma constante que recebe a função soma passando para a e b os valores 2 e 3
const cincoMais = soma(2,3);
/* 
* chamando a função através da constante e passando o valor do parâmetro da função retornada 
* cincoMais(4) - sempre será passado para c, o valor que for atribuido desta maneira, pois, os valores de a e b sempre serão 2, 3 (descobri na base de teste, mesmo com let os valores de a,b passados na declaração não mudam)
*/
cincoMais(4)
cincoMais(9)

// let testeMenos = soma(1,2);

// testeMenos(1,5)