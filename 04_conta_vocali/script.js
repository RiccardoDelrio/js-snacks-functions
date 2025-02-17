/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vocalCount = (str) => {
    const vocali = ["a", "e", "i", "o", "u"]
    let count = 0
    let vocalitrovate = []
    for (let i = 0; i < str.length; i++) {
        if (vocali.includes(str[i])) {
            count++
            vocalitrovate.push(str[i])
        }

    }
    return count, vocalitrovate
}


// Invoca la funzione qui e stampa il risultato in console
console.log(vocalCount(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)


/* function vocalCount(str) {
    const vocali = ["a", "e", "i", "o", "u"]
    let count = 0
    let vocalitrovate = []
    for (let i = 0; i < str.length; i++) {
        if (vocali.includes(str[i])) {
            count++
            vocalitrovate.push(str[i])
        }

    }
    return count, vocalitrovate
}
console.log(vocalCount(word)); */