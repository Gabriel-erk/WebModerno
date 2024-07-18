// erro histórico ao se utilizar var

const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/* nos 2 casos será imprimido 10 
* aparentemente, a constante funcs, que recebe arrays, teve todos seus índices percorridos, adicionando o valor atual de i (a cada incremento de i, era incrementado em cada indice de funcs, fazendo com que, todos os indices de funcs de 0 a 9, tenham o mesmo valor)
*/

funcs[2]();
funcs[8]();
