// !SÓLAMENTE MODIFICAR LA FUNCIÓN sumaDiagonal()!

import { v4 as uuid } from 'uuid'; 

const arr = [
    90, 18, 27,
    45, 63, 54,
    81, 72, 18
];

// ---------------------------------------------- MODIFICAR SOLO ↓↓↓

function sumaDiagonal(array) {
	const arrayReducido = array.reduce((accu, currentVal, index) => {
		if (index % 2 == 0 && index != 0 && index != 8) {
			return accu + currentVal;
		} else {
			return accu;
		}
	}, 0);

	return arrayReducido;
}

// ---------------------------------------------- MODIFICAR SOLO ↑↑↑

const resultado = sumaDiagonal(arr);

const estaBienResuelto = resultado === 171;

estaBienResuelto ? console.log("¡Buen trabajo!", uuid()) : console.log("Algo anda mal");
