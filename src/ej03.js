import Alumno from'./models/alumno.js';

let alumno1 = new Alumno("Maria Unpajote" ,"22888444",20);
let alumno2 = new Alumno("Rodrigo De Polshu" ,"33788444",30);
let alumno3 = new Alumno("Mica Bezona", "45581713", 56)

console.clear()
console.log(alumno1)
console.log(alumno2)
console.log(alumno3.toString())