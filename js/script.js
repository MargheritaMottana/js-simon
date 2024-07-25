
/*
Descrizione:
1. Visualizzare in pagina 5 numeri casuali.
2. Da lì parte un timer di 30 secondi.
3. Dopo 30 secondi i numeri scompaiono e 
4. l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
5. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//variabili
const minimo = 1;
const massimo = 10;

const random = []

const numberContainer = document.getElementById('numberContainer')

// devo creare 5 elementi in pagina
// creo un ciclo che mi scriva 5 elementi

// const container = document.getElementById('numberContainer');

for (let i = 1; i <= 5; i++) {

    const number = getRndNmbr(minimo, massimo);
    console.log('number', number, typeof number)

    random.push(number);
    numberContainer.innerHTML += `<div> ${number} </div> `;

};

// devo creare un timer che parte all'avvio della pagina e che duri 30 secondi
let counter = 3;

let clock = setInterval(function () {
    console.log(counter);

    // se il timer arriva a 0 fermati
    if (counter == 0) {

        clearInterval(clock);
        clock = null;

        // al termine del timer, svuoto il contenuto dell'html e ci metto del nuovo testo
        numberContainer.innerHTML = ` Ora inserisci nei prompt i numeri che hai visto, rispettandone l'ordine. `;

        setTimeout(function () {
            // alla fine del timer inserisco i prompt
            for (let i = 0; i < 5; i++) {
                const numeroUtente = parseInt(prompt(`Inserisci qui il ${i + 1}° numero`))
            };
        }, 0.5 * 1000)

    }
    else {
        counter--;
    }
}, 1000);

// funzione per generare numeri random compresi min e max
function getRndNmbr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}