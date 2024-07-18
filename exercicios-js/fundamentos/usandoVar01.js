{
    {
        {
            {
                { 
                    // utilizando var
                    var sera =  'sera???';
                    // imprimindo o contuéudo de var na tela - com o seu código dentro de um escopo
                    console.log(sera);
                }
            }
        }
    }
}

// imprimindo o conteúdo da variável var na tela, mesmo estando fora do escopo (pegue o contexto de funções e objetos, mesmo estando dentro de um escopo que, não seja de uma função ou de um objeto, as variáveis só seriam visiveis dentro dos seus respectivos escopos, coisa que não acontece com var neste caso, pode-se chama-la no código inteiro (variável global))
console.log(sera);
