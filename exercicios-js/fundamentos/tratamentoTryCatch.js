// criando uma função que vai receber um erro, trata-lo, e vai exibir alguma coisa
// não mostrar diretamente o erro, todo confuso, de forma que assute o usuário, sempre trata-lo e deixar algo, msm q seja genérico
function tratarElancarErro(error) {
  // throw 10;
  // throw 'Ocorreu um erro inesperado, por favor, tente novamente mais tarde';]
  // mensagem que sera exibida caso retorne algum erro (lançando realmente um Erro, que foi gerado atraves de new Error)
  throw new Error("...");

//   retornando um objeto
  throw {
    nome: error.name,
    msg: error.message,
    date: new Date
  }
}

// criando função que recebe um objeto
function imprimirNomeGritado(obj) {
  /*
   * realizando tratamento de erro com try/catch
   * utilizar try em códigos potencialmente perigosos/sensiveis que podem ocorrer algum erro e será necessário tratar
   * try = tente, catch = pegue
   * tente { esta linha de codigo } - caso tenha alguma exceção, ou seja, caso tenha algum erro, vai para o catch
   * catch (e) - catch pega o erro, e pode trata-lo no seu escopo, aqui, estamos chamando a função: tratarElancarErro(e), passando como parametro o erro
   * finally { console.log('final'), finaly sera sempre executado, casso de certo atraves do try, ou de errado e passe pelo catch, ele sempre será executado }
   */

  let deuCerto = null;

  try {

    console.log(obj.name.toUpperCase() + "!!!");
    return deuCerto = true;

  } catch (e) {
    tratarElancarErro(e);
    return deuCerto = false;

  } finally {
    if (deuCerto == true) {
      console.log("nenhum erro");
    } else {
      console.log("erro gerado");
    }
  }
}

const obj = {
  name: "Roberto",
};

console.log(imprimirNomeGritado(obj));
