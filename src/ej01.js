let palabra1 = "Chancho";
let palabra2 = "Niebla";
let palabraSalida;

palabraSalida = concatInvert(palabra1, palabra2);
console.clear()
console.log(`Palabra de entrada:"${palabra1}" y "${palabra2}"`);
console.log(`Palbra de salida: "${palabraSalida}"`);
console.log(palabraSalida = concatInvert(palabra1, palabra2))


function concatInvert(palabra1, palabra2)
{
    let concated = palabra1 + palabra2
    let reversed = concated.split("").reverse().join("")
    return reversed

}