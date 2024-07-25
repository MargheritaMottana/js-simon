
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

const timer = document.getElementById('timer')

const risultato = document.getElementById('result')

let numeroUtente = 0

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
let counter = 30;

let clock = setInterval(function () {
    console.log(counter);

    // aggiungo il timer in pagina
    timer.innerHTML = `<div class="timer"> ${counter}
        </div>`;

    // se il timer arriva a 0 fermati
    if (counter == 0) {

        clearInterval(clock);
        clock = null;

        //al termine del timer, svuoto il timer
        timer.innerHTML = '';

        // al termine del timer, svuoto il contenuto dell'html e ci metto del nuovo testo
        numberContainer.innerHTML = ` Ora inserisci nei prompt i numeri che hai visto, rispettandone l'ordine. `;

        // aggiungo una variabile per il numero indovinato
        let numeroIndovinato = 0
        // aggiungo variabile anche per la lista di numeri indovinati
        let listaIndovinati = []

        setTimeout(function () {
            // alla fine del timer inserisco i prompt
            for (let i = 0; i < 5; i++) {
                let numeroUtente = parseInt(prompt(`Inserisci qui il ${i + 1}° numero`))

                // aggiungere paragone tra array e numero dell'utente per verificare se, quali e quanti ne ha indovinati
                if (numeroUtente == random[i]) {
                    numeroIndovinato++;

                    //pusho il numero indovinato nell'array per creare la lista
                    listaIndovinati.push(numeroUtente);

                    // svuoto html
                    numberContainer.innerHTML = ''
                    // inserisco nel risultato il messaggio
                    // questa scrittura serve per mettere una virgola tra gli elementi dell'array --> listaIndovinati.join(' ,')
                    // il join prende tutti gli elementi dell'array, li mette in una stringa e li separa con quello che metto tra le parentesi.
                    risultato.innerHTML = `Complimenti! <br> Hai indovinato ${numeroIndovinato} numeri, <br> in particolare questi: ${listaIndovinati.join(' ,')}.`;
                }
            }

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