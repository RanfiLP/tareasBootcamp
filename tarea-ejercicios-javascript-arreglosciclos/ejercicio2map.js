//Escribir una función que acepte una serie de números y duplique el valor de cada elemento de la matriz. Imprime la nueva matriz actualizada. Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10]

// Función que duplica los números en una matriz
function duplicarNumeros(arr) {
    const duplicados = arr.map(numero => numero * 2);
    return duplicados;
}

// Ejemplo:
const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = duplicarNumeros(numeros);

// Mostrar el resultado en el HTML y en consola
document.getElementById('resultado2').textContent = `Números originales: ${numeros} 
 Números duplicados: ${numerosDuplicados}`;

console.log("Números originales:", numeros);
console.log("Números duplicados:", numerosDuplicados);
