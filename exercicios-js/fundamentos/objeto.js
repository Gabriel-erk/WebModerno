/* criando um objeto vazio, e determinando que, ele tem um chave/identificador chamado 'nome', e o valor que esta no identificador nome é 'Celular Ultra Mega' - isto tambem é atributo */
const prod1 = {}
prod1.nome = 'Celular Ultra Mega';

prod1.preco = 4623.23;
// criando uma chave que possui espaço entre as palavras e atribuindo um valor
prod1['Desconto Legal'] = 0.40; // evitar utilizar atributos com espaço

/* sera exibido no console 'pares', contendo o nome da chave e o valor (nome: 'Celular Ultra Mega'), apos a virgula outra par */
console.log(prod1);

// criando atributos dentro do proprio escopo de  do objeto prod2, de forma literal, adicionando dentro do proprio objeto (prod1 foi um objeto vazio q os atributos foram atribuidos depois)
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}