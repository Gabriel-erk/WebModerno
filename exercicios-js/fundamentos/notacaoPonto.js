/* atraves da notação '.', é possivel acessar funções dentro de objetos (acessar seus membros), como agora, estamos acessando a função ceil(), dentro do objeto math, para arredor para cima o numero decimal passado*/
console.log(Math.ceil(6.1));

const obj1 = {};
// criando um atributo dentro de um objeto com o nome 'nome' e valor 'bola'
obj1.nome = 'Bola';
/* outra maneira de criar um atributo de um objeto, te da mais flexibilidade, pois a definição do nome do atributo sera como definir o nome de uma string, utilizando espaços, e outras coisas que a string proporciona, porem, utilizar . para acessar atributos é uma maneira mais conveniente, ja que nem sempre esta flexibilidade que a linguagem proporciona é de fato, a maneira mais assertiva de trabalhar, podendo acarretar em alguns futuros problemas */
// obj1['nome'] = 'Bola2';

console.log(obj1.nome);

// criando uma fução com o nome obj, com um parametro chamado 'nome'
function Obj(nome) {
    // this.(nome do atributo) = nome
    // fazendo com que 'fique publico' o atributo nome, para novas instancias a partir do mesmo
    this.nome = nome;
    // criando uma função (onde seu nome é exec)
    this.exec = function() {
        console.log('Exec...');
    }
}

// criando uma constante que recebe os atributos de Obj, e passando como parametro o valor 'cadeira' e 'mesa' 
const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();