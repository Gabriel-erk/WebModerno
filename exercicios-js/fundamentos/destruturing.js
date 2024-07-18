// novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// retirando do objeto pessoa, os atributos nome e idade, agora, no programa, existem variaveis com estes atributos - utilizando chaves pois objetos são definidos com chaves, no caso de array, seria colchete [] - const {atributoQueDesejo, atributoQueDesejo} = daondeQueroRemove-lo,qual objeto, qual array
const { nome, idade } = pessoa;
console.log(nome, idade);

// passando o valor dos atributos nome e idade para as variaveis n e i (que estao sendo criadas neste momento)
const { nome: n, idade: i} = pessoa;
console.log(n, i);

// tentando acessar atributos que não existem dentro do objeto pessoa, e deixando um valor padrão para bemHumorada, onde, caso não retorne nada, do objeto, retorne true (sobrenome sera dado como undefined, pois não foi definido, não existe no objeto)
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// extraindo atributos de outro atributo definido no objeto pessoa, no caso, o atributo endereco, pegando os atributos logradouro, numero e tentando acessar um atributo que não existe dentro dele
const { endereco: { logradouro, numero, cep } } = pessoa;

console.log(logradouro, numero, cep);

//* tentando acessar atributos que não existem de forma aninhada - que gerará um erro, pois, para isto "funcinar", deve-se garantir que o caminho ate o dado esteja livre, e so um ultimo atributo não exista, no caso, os atributos filhos de ag, caso o atributo filho "principal" não exista (ou seja, o caminho não está livre para os dados alvo (ag, num)), será gerado um erro *//
const { conta: { ag, num } } = pessoa;
console.log(ag, num);