for(let i = 0; i < 10; i++){
    console.log(i);
}

/* neste exemplo a váriavel i possui escopo de bloco também (let), então só era visível no bloco da função, por isso, ao chamar a váriavel i (que não existe fora do escopo, é gerado um erro) */
console.log(`i = ${i}`);