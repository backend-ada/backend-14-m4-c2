// !SÓLAMENTE MODIFICAR LA FUNCIÓN sumaDiagonal()!

import { v4 as uuid } from 'uuid'; 

const arr = [
    90, 18, 27,
    45, 63, 54,
    81, 72, 18
];

// ---------------------------------------------- MODIFICAR SOLO ↓↓↓

function sumaDiagonal(array) {
    // Completar esta función para que retorne la suma de los números de "arr" ubicados en la diagonal ascendente. 
    // Usar los métodos forEach y reduce.
    
    // !!!COMPLETAR CON CÓDIGO POR AQUÍ!!!
}

// ---------------------------------------------- MODIFICAR SOLO ↑↑↑

const resultado = sumaDiagonal(arr);

const estaBienResuelto = resultado === 171;

estaBienResuelto ? console.log("¡Buen trabajo!", uuid()) : console.log("Algo anda mal");