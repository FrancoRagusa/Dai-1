import Alumno from'./models/alumno.js';

let alumno1 = new Alumno("Keko Jones" ,"22888444",20);
let alumno2 = new Alumno("Rodrigo De Polshu" ,"33788444",30);
let alumno3 = new Alumno("Jhon Eserio", "45581713", 56)

console.clear()
console.log(alumno1)
console.log(alumno2)
console.log(alumno3.toString())