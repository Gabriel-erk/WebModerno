// criação de uma constante que recebe o endereço de um objeto na memoria (não armazena o conteudo do chave name)
const a = {name: 'teste'}

/* const b esta recebendo o mesmo endereço de objeto da constante a (ou seja, se o conteudo do endereço for alterado, o 'conteudo' das 2 constantes sera diferente, isso se chama atribuição por referencia, caso alterar o endereço do objeto a partir da const a, b vai sentir a mudança (os 2 apontam para o mesmo lugar de memoria, a partir das 2 variaveis é possivel acessr este objeto - tambem se aplica a funções, indica o mesmo endereço da memoria)) */
// quem fizer referencia a aquele dado na atribuição por referencia, sentira a mudança do mesmo
const b = a;

// posso acessar o endereço e alterar seu valor
b.name = 'opa';

// resultado sera opa
console.log(a)

console.log("Exemplo de valores primitivos");

let c = 3;

let d = c;

d++;
/* aqui trabalhando com "valores primitivos" da linguagem, onde, a mesma coisa do exemplo acima ocorre, porem, com valores primitivos, nao ocorre atribuição por referencia, e sim por valor, onde o d recebe a copia do valor de c, e por isso, quando for alterada, o valor de c nao sofrerá mudanças - cada variavel, cada constante tera sua dependencia, seu proprio valor */
console.log(d);