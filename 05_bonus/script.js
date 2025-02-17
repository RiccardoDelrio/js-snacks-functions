/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';
//ho cambiato il nome della variabile perche risultava"deprecated"

// Dichiara la funzione qui.
const sayHello = (str) => {
    let now = new Date().getHours()
    if (now <= 13) {
        console.log(`"Buongiorno " ${str}`);
    } else if (now <= 17) {
        console.log(`"Buon pomeriggio " ${str}`);
    } else
        console.log(`"Buonasera " ${str}`);

}
sayHello(nome)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.