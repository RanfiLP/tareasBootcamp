// Escribe un programa para calcular la suma y el producto (multiplicación) de una serie de números. Imprime la suma y el producto. 
// Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.

// función usando let para la matriz de números de ejemplo
let numeros = [1, 2, 3, 4];

// Aplicar reduce para calcular la suma
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

//Calcular el producto
let producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

// Imprimir en html
document.getElementById('resultado').textContent = `La suma es: ${suma}. El producto es: ${producto}.`;


// En este no pude imprimirlo en el html, aún no encuentro bien el error o la instrucción que me falta