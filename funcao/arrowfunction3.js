let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {};
// fazendo com que o this de 'comparaComThis' aponte para este novo objeto, e não mais para o global
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

console.log('utilizando arrow function');
let comparaComThis2 = (param) => console.log(this === param);

comparaComThis2(global);
comparaComThis2(this);
/**
 * neste caso utilizando arrow function, o this é exatamente igual a module.exports(por causa do runtime q estamos usando, o node), o local onde foi definido, q no caso, module.exports é o arquivo em que foi definido
 * (oq da a entender q o 'global' se referencia a algo superior?) 
 * objeto que foi atribuido para o this (module.exports)
 */
comparaComThis2(module.exports);

/**
 * aqui tentamos alterar onde o this aponta, de module.exports para outro objeto utilizando binf
 * porém não functiona, a função arrow se mantém firme e não se altera, e ainda continua apontando para module.exports, como podemos ver
 * o this de uma função arrow não varia nunca
 */
comparaComThis2 = comparaComThis2.bind(obj);
comparaComThis2(obj);
comparaComThis2(module.exports);
