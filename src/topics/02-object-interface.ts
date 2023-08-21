export{};

//Array
const skills: string[] = ['Bash', 'Counter', 'Healing'];

//Definir caracteristicas de un objeto -> interface
interface Character  {
    name: string;
    hp: number;
    skills: string []
    //Opcional ?
    homeTown?: string;
}

const Gumi: Character = {
    name: 'Ger',
    hp: 100,
    skills: ['Bash', 'Counter']
};

Gumi.homeTown = 'LasMatas';

console.table(Gumi);