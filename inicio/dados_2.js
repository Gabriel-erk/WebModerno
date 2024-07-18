console.log(19.9 * 0.5);

let preco = 19.90;
let desconto = 0.4;

// parenteses para priorizar a operação matematica, nesse caso quis priorizar 1- desconto, o retorno desta operação sera multiplicada pela variavel "preco"
console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "caderno";
let categoria = "papelaria";
// sem a concatenação do " " que no caso é um espaço, ambos os textos ficariam colados, entao, estou colocando um espaço entre as duas strings, para nao ficarem juntas - faço a mesma coisa com "produto: ", coloco um espaço apos os dois pontos para nao colar com a variavel nome
console.log("Produto: " + nome + ", Categoria: " + categoria + ", Preço: " + precoComDesconto);

