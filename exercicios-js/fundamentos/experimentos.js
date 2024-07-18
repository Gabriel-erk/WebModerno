let a = 1;
global.b = 2;
/* 
* this representa module.exports
* aqui estou dizendo que estas variaveis estão sendo exportadas, ou seja, estão disponiveis em outros arquivos
*/
this.c = 123;
this.d = 456;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// meio comum de definir o ue será exportado para fora deste modulo (arquivo - já que os arquivos em node são chamados de módulos, com isto estou exportando váriaveis deste módulo, ficando acessivel para outros)
// module.exports = { c: 123, d: 456, e: "teste" };

// definindo uma váriavel maluca, sem let ou const
abc = 'ola'; // não faça isso em casa, pode acabar causando colaterais no sistema depois
console.log(global.abc); // e ela foi jogada diretamente dentro de global, o que não é bom
