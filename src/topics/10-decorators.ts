//Decorador -> servicio que ofrece la clase
function classDecorator<T extends {new (...args:any[]): {}}>( 
    constructor: T
) 
{
        return class extends constructor {
            newProperty = 'New Property';
            hello = 'override';
        }
}

//Definición de la clase
@classDecorator
export class SuperClass{
    public myProperty: string = 'Abc123';
    print() {
        console.log('Hola Mundo') 
    }
}

console.log(SuperClass);
//Instancia de la clase
const myClass = new SuperClass();
console.log(myClass);