
//Funciones genericas para tipos de datos que todavía no están definidos.
export function whatIsMyType<T>(argument: T): T {
    
    return argument;
}

let amIString = whatIsMyType<string>('Hola mundo');
let amINumber = whatIsMyType<number>(100);
let amIArray = whatIsMyType<number[]>( [1, 2, 3]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
