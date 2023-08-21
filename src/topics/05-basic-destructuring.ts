export{};

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

//Crear objeto necesario con la información
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//Desestructuración Sacar propiedades de una forma sencilla
const {
    song: anotherSong, 
    songDuration: duration,
    //Objeto dentro de objeto
    details:{author}
} = audioPlayer;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

//Desestructuración de Arrays
//Valor por defecto si no hay una 3 posición en la que mirar datos.
const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']; 

//console.log('Personaje 3: ', trunks);
