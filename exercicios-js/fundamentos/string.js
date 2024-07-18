const escola = "Cod3r";

// retornando o caracter que esta na 4 posição do indice de escola, no caso r
console.log(escola.charAt(4));

/* retonra um valor vazio, indicando que o javascript nao encontrou o valor na quinta posição do indice de escola (pq realmente nao tem) - js por ser flexivel nao retornou um erro (poderia, mas tem uma % menor em relação a outras linguagens), em outras linguagens poderia facilmente acontecer isto */
console.log(escola.charAt(5));

/* codigo relacionado a tabela uniCode - esta retornando o valor do 3 indice de escola, porem, neste "formato", neste codigo que representa o 3 de acordo com a tabela uniCode */
console.log(escola.charCodeAt(3))

/* basicamente o contrario do exemplo acima, voce tem o digito e quer verficar se ele exite na variavel em questao */
console.log(escola.indexOf('3'));

/* vai imprimir na tela a partir do indice 1, ou seja, a partir do O*/
console.log(escola.substring(1));

/* dizendo que, ira começar a imprimir na tela a partir do indice 0 ATE o indice 3, ou seja, quando chegar no indice 3, ele para de imprimir, nao inclui o indice 3 (va ate o indice final sem incluir o indice final), impressão: Cod */
console.log(escola.substring(0, 3));

// utilizando concatenação - "texto escola que coloquei, é um "direto", que nao esta em variavel, literal
console.log('Escola:' . concat(escola)  . concat("!"));

// outra maneira de concatenar (no contexto de string, concatena, no contexto de numero, soma)
console.log('Escola:' + escola + "!");

/* função replace, com 2 parametros, o primeiro é a posição que quero alterar, e o segundo, o que irei colocar nesta posição, no caos, estou substituindo o vaor '3' da palavra cod3r por 'e' */
console.log(escola.replace(3, 'e'));

/* gerando um array com tres elementos diferentes (ana, maria e pedro), utilizando como separador, a virgula, que determinei dentro do parenteses de da função .split() - dentro do parenteses, o separador selecionado, foi a virgula, entao, ele dividir os elementos em diferentes posições a partir disso, ele vai entrar na string: 'ana, maria, pedro' vai pegar a virgula que esta nesta string, e, oq vem antes, e depois da virgula, serao elementos diferentes, tambem posso tentar isto com outros caracteres, como "-" */
console.log('Ana,Maria,Pedro'.split(','));