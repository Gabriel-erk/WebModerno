/*
* desenvolvendo 2 funções, que recebem três parâmetros(capital inicial, taxa de juros e tempo de aplicação), 1 retorna o valor dos juros simples, e outra os juros compostos 
*/

const retornaJurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    // taxaJuros /= 100;
    let montante = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)

    return console.log(montante)
    //outra forma:
    // return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
}

retornaJurosSimples(1000, 0.05, 12)

const retornaJurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let montante = capitalInicial * (1 + taxaJuros)**tempoAplicacao

    // método toFixes para limitar em 2 casas decimais
    return console.log(montante.toFixed(2))
    // outra forma
    // return capitalInicial * (1 + taxaJuros) **tempoAplicacao
}

retornaJurosCompostos(1000, 0.05, 12)


