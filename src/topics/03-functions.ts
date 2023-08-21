export{};
//Función
function addNumbers(a: number, b: number) {
    return a + b;
}

// const result: number = addNumbers(1, 2);

// const addNumbersArrow = (a: number, b: number):string => {
//     return `${a + b}`;
// };

// const result2 = addNumbersArrow(1, 2);

// console.log({result, result2});

//Se crea el objeto personaje
interface Character{

    name: string;
    hp: number;
    showHp: () => void;

}

//Función para curar a un personaje
const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

//Se crea un personaje
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida ${this.hp}`);
    } 
}

//Se cura y se enseñan sus puntos de vida
healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();