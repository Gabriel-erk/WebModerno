const raio = 5.6;
/* Math.PI - aqui, o objeto Math possui uma constante com o valor de PI - Math.pow(), math tem uma função chamada pow (pówer), que calcula a potencia/exponenciação, entao, aqui estou passando 2 parametros, um é o raio (com valor de 5.6) e o segundo o valor da exponenicação, ou seja raio elevado a 2*/
const area = Math.PI * Math.pow(raio, 2)


console.log(area.toFixed(2));
// Math é um objeto
console.log(typeof Math)