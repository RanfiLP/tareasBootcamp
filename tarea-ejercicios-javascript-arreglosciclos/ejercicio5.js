// Para cada uno de los ejercicios siguientes, suponga que está comenzando con la siguiente matriz de personas.
// let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
// Escriba un comando que imprima todas las personas de la lista.
// Escriba el comando para eliminar "Dani" de la matriz.
// Escribe el comando para eliminar "Juan" del array.
// Escribe el comando para mover a "Luis" al frente de la matriz.
// Escriba el comando para agregar su nombre al final de la matriz.
// Usando un bucle, itere a través de esta matriz y después de console.log "Maria", salga del bucle.
// Escribe el comando que da el indexOf donde se encuentra "Maria".
// Al final del ejercicio, debería haber 4 personas en la formación.


let gente = ["María", "Dani", "Luis", "Juan", "Camila"];

// Imprimir personas de la lista
console.log("Lista inicial: " + gente);
document.getElementById('resultado5').innerHTML = "Lista inicial: " + gente.join(', ');

// Elimino a "Dani" de la matriz
gente.splice(gente.indexOf("Dani"), 1);
console.log("Después de eliminar a Dani: " + gente);

// Elimino a "Juan" del array
gente.splice(gente.indexOf("Juan"), 1);
console.log("Después de eliminar a Juan: " + gente);

// Muevo a "Luis" al frente de la matriz
let luis = gente.splice(gente.indexOf("Luis"), 1)[0]; // Y luego se elimina a Luis
gente.unshift(luis); // Se añade al frente
console.log("Después de mover a Luis al frente: " + gente);

// Agregar mi nombre al final de la matriz
gente.push("Ranfi");
console.log("Después de agregar mi nombre: " + gente);

// Crea bucle para iterar la matriz y detenerse después de "Maria"
for (let i = 0; i < gente.length; i++) {
    console.log(gente[i]);
    if (gente[i] === "María") break;
}

// Obtener el index de "Maria"
let indiceMaria = gente.indexOf("María");
console.log("El índice de Maria es: " + indiceMaria);

// Mostrar el resultado final
document.getElementById('resultado5').innerHTML += "<br>Lista final: " + gente.join(', ');
