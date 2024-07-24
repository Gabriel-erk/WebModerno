// factory simples - função factory é uma função que retorna um objeto
function criarPessoa(){
    // poderia deixar atributos vazios, a serem preenchidos, ou passar nos parâmetros da função, neste exemplo, eles estão fixos
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
// toda vez que chamar a função, estaremos instanciando um novo objeto
console.log(criarPessoa());
