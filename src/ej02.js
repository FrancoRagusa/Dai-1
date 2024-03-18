import {PI, sumar, multiplicar} from './modules/matematica.js';
console.clear();
console.log(`La variable PI vale(${PI})`)

let total;
let resultado;
let num1 = 10;
let num2 = 20;
total = sumar(num1, num2);
resultado = multiplicar(num1, num2);
console.log(`sumar(${num1},${num2})= ${total}`);
console.log(`multiplicar(${num1},${num2})= ${resultado}`);