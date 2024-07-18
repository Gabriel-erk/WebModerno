const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

/* aqui um exemplo, de template string, utilizando interpolação de string com a crase ``, aqui, diferente da string com aspas normais/duplas, pode-se quebrar o conteudo da string, como feito aqui:
const template =`
      Olá`
isto em uma circunstancia normal daria erro:
const nome = 'Rebe
ca' assim geraria um erro
e a interpolação de string padrao: `Olá ${aqui vai a variavel}!`*/
const template =`
      Olá 
      ${nome}!`
console.log(concatenacao, template);

//utilizando expressoes matematicas
console.log(`1 + 1 = ${1 + 1}`);

// toUpperCase, função para deixar o texto em miusculo
const to = texto => texto.toUpperCase()

/* chamando a constante 'to' que deixara o conteudo do texto em maiusculo, esta entre parenteses para entrar na função */
console.log(`Ei... ${up('cuidado')}!`);