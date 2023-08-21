export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Germán',
}

const passenger2: Passenger = {
    name: 'Aurelio',
    children: ['Marco', passenger1.name],
}

// El optional chaining (?) es para si viene la propiedad ejecuta el length si no, valor por defecto.
const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);