/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const firstLetter = (arr) => {
    const letters = []
    for (let i = 0; i < arr.length; i++) {
        let lettera = arr[i].charAt(0)
        letters.push(lettera);
    }

    return letters
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



//BONUS
/* function firstLetter(arr) {
    const letters = []
    for (let i = 0; i < arr.length; i++) {
        let lettera = arr[i].charAt(0)
        letters.push(lettera);
    }

    return letters
} */
