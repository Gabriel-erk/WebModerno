function rand([min = 0, max = 1000]) {
    // se min for maior que max, inverta os valores de ambos (min recebe o valor de max e max recebe o valor de min, deixando as funcionalidades corretas)
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// invertendo, passando para min um valor maior que max
console.log(rand([50, 40]));
// passando o valor somente para a primeira posição (min)
console.log(rand([992]));
// pulando a primeira posição e atribuindo 10 a segunda posição (max)
console.log(rand([, 10]));
// passando um array vazio, entao min, e max assumirão seus valores estipulados por padrão (0 e 10)
console.log(rand([]));
// tentando desestruturar algo undefined ou null, nesse caso undefined, por isso o erro
console.log(rand());