const nums = [1,2,3,4,5,6,7,8,9,10];

for(x in nums){

    if(x == 5){
        /* 
        * o laço de repetição irá parar quando a condição do if for verdadeira e este break for executado
        * o break não age sobre "if", e sim sobre "for, while", então, ele irá procurar o bloco mais perto deste if no qual o break foi colocado, irá se deparar com o for, e irá parar a exeução dele, realizando um desvio de fluxo para fora do laço, indo para a próxima sentença de código
        */
        break
    }
    console.log(`${x} - ${nums[x]}`);
}

console.log('Exemplo continue:')
for(y in nums){
    if(y == 5){
        /* 
        * quando y for == 5, ele irá pula-lo e continuar a execução a partir do próximo, é como se o indice 5 de nums simplesmente não pudesse/fosse lido, como se fosse ignorado, continuando a execução a partid do indice 6 (tanto que, no console.log abaixo, observa-se que o indice 5 não pode ser lido, leu o indice 4 e logo em seguida o indice 6)
        */
        continue
    }
    console.log(`${y} - ${nums[y]}`);
}

console.log('Exemplo de rotulo para for')
/* 
* atribuindo um rotulo para o for chamado de 'externo'
* exister formas mais interessantes de realizar isto (map, reduce, filter...) 
* não utilizar estes rótulos
*/
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
            // colocando um break e especificando que é para ter um break em 'externo', pois, sem a especificação cairia no bloco mais proximo do if que ele atua (o for mais interno, o for atual)
            break externo
        }
        /* 
        * após o for interno ler todos os valores de nums, ele sai do for interno, entra no for externo, ai sim fazendo com que o for externo leia o indice seguinte, e repete o processo até coincidir do for externo estar no indice 2 e o for interno no indice 3
        */
        console.log(`Par = ${a}, ${b}`);
    }
}