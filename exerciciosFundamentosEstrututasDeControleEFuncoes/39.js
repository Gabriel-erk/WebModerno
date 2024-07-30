const trocaElementosVetores = (vetor1, vetor2) => {
    if(vetor1.length === vetor2.length){
        // [vetor1[0], vetor1[1], vetor1[2]] = [vetor2[0], vetor2[1], vetor2[2]]
        [vetor1, vetor2] = [vetor2, vetor1]
        return { vetor1, vetor2 } 
    }
}

const resultado = trocaElementosVetores([10,20,30], [40,50,60]);
console.log(resultado.vetor1);
console.log(resultado.vetor2);

console.log('teste 2');

/*
* como minha função estava armazenada dentro de uma váriavel, pensei que poderia realizar sua chamada já passando seus parâmetros e acessando o seu retorno logo abaixo, como fiz acima, porém armazenando a função arrow em outra váriavel 
* a função retorna um objeto contendo 'vetor1' e 'vetor2', porém, não armazenei este retorno em lugar nenhum, por isso, não posso acessa-lo, estou tentando acessas propriedades inexistentes dentro da função em si, não o seu retorno 
* para conseguir acessar este retorno, é preciso armazenar o objeto retornado em uma váriavel e acessar suas propriedades (resultado1.vetor1 && resultado1.vetor2)
*/
trocaElementosVetores([70,80,90], [100,110,120])
console.log(trocaElementosVetores.vetor1);
console.log(trocaElementosVetores.vetor2);