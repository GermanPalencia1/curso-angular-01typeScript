export{};

//Variable que puede cambiar el valor
let name = 'Ger';

//Variable de valor fijo en el tiempo
const name2 = 'Gumi';

//: después de una variable indica el tipo que va a ser y | 
// se puede poner para añadir un segundo tipo o una clausula 
//en concreto que solo esa dará como permmitida.
let hpPoints: number | 'Full' = 95;
hpPoints = 'Full';

const isAlive: boolean = true;

console.log ({
    name, name2, hpPoints, isAlive
});