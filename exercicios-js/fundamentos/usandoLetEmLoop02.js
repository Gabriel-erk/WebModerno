const funcs = [];

for (let i = 0; i < 10; i++){
    // Cada função anônima aqui mantém uma referência ao ambiente léxico (escopo) onde foi criada, capturando o valor de 'i' no momento da criação.
    funcs.push(function(){
        console.log(i)
    })
}

/* 
  Ao chamar funcs[2](), ele imprime o valor de 'i' que estava associado ao índice 2 no momento em que a função foi criada.
  O mesmo ocorre quando funcs[8]() é chamado.
  Isso acontece porque as funções anônimas têm acesso ao contexto léxico em que foram definidas, incluindo todas as variáveis declaradas nesse contexto, como a variável 'i'.
  Esse é o conceito de closure em JavaScript: o acesso a variáveis externas, mesmo após a execução da função que as criou.
*/
funcs[2]();
funcs[8]();

