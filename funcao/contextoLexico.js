const valor = 'Global'

/*
* a função tem 'consciência' do local onde foi definida, e o contexto léxico onde foi definida importa, mais do que o seu contexto de execução (foi chamada dentro da função exec)
* mesmo tendo sido chamada dentro de exec, com uma variavel no seu escopo também chamada de 'valor', a função irá procurar a váriavel 'valor' primeiro no escopo local, depois no contexto lexico de onde foi definida, que é onde encontra a variavel 'valor' declaraa globalmente, e imprime o seu valor, independente do seu contexto de execução 
*/
function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'uouo';
    minhaFuncao();
}

exec();