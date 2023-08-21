//Definicion de clases -> forma poco común
// export class Person {
    //'?' sirve para que pueda estar inicializado o no sin que dé error -> name? -> no es obligatorio.
//     public name: string;
//     private address?: string;

    //Los argumentos que pide el constructor van entre los paréntesis.
//     constructor(name: string, address?: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

//Definicion de clases -> forma rápida
export class Person {
constructor(
    //Inyección de dependencias
    public firstName: string, 
    public lastName: string,
    private address?: string
    ) {}
}

//Expandir funcionalidad de una clase -> herencia -> Solo para 1 nivel de herencia.
// export class Hero extends Person {
   
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
         //Es necesario llamar al super cuando se extiende de otra clase para poner los argumentos de la clase padre.
//         super(realName, 'New York');
//     }

// }

//Herencia sin extends para cuando puede haber muchas clases que extienden unas de otras
export class Hero {
   
    //* public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        //Se crea dentro un objeto de la clase principal
    public person: Person,
    ) {
        //Se pasa por parametro los argumentos necesarios de Person -> solo cuando se crea fuera del constructor -> *
        //this.person = new Person(realName, 'New York');
    }

}

const tony = new Person('Tony', 'Stark', 'New York');
//Inyección de dependencias con tony
const ironman = new Hero('IronMan', 45, 'Tony', tony);

//Aunque la propiedad sea privada al compilar a JS se puede sacar.
//console.log(ironman.address);

console.log(ironman);

