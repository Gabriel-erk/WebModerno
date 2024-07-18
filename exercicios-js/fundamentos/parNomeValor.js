// par nome(saudacao)/valor("olá")
const saudacao = "Olá"; // Contexto lexico 1
/* contexto léxico é "onde aquela variavel foi atribuida, onde foi definida", neste caso, no arquivo parNomeValor.js, este é o seu contexto lexico - exemplo, objeto window, seu contexto lexico é o browser, o navegador (onde ele irá manipular), também se aplica a funções, tendo contextos lexicos mais restritos, onde, caso uma variavel nao exista no seu escopo, procura nos escopos mais abrangentes (fora do seu escopo) */

function exec () {
    const saudacao = 'falaaa' // contexto lexico 2
    /* como no contexto da função existe a váriavel saudacao, por mais que, de mesmo nome que a váriavel que se encontra em um contexto diferente, será retornado o valor do conteudo de 'saudacao' no contexto lexico da função, caso nao estiveste neste contexto, seria procurado no contexto 1, se nao achasse seria retornado que a váriavel não foi definida */
    return saudacao 
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = { 
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

// ola, pois nao estou chamando a função, e o contexto lexico acessivel é o de saudacao declarado globalmente
console.log(saudacao);
// estou chamando especificamente a função e o valor que ela retonra
console.log(exex());
// retornando todos os conjuntos de pares chave(nome)/valor
console.log(cliente);