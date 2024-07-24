
/*
Descrizione:
1. Visualizzare in pagina 5 numeri casuali.
2. Da lì parte un timer di 30 secondi.
3. Dopo 30 secondi i numeri scompaiono e 
4. l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
5. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//devo creare 5 elementi in pagina
// creo un ciclo che mi scriva 5 elementi
for (let i = 1; i <= 5; i++) {
    // creo l'elemento in html
    const number = document.createElement('div');
    // metto il testo dentro il cerchio
    number.innerHTML = Math.floor((Math.random() * 50) + 1);
    // metto il cerchio dentro il suo container
    numberContainer.append(number);

    // devo creare un timer che parte all'avvio della pagina e che duri 30 secondi
    let counter = 3;

    let clock = setInterval(function () {
        console.log(counter);

        // se il timer arriva a 0 fermati
        if (counter == 0) {

            clearInterval(clock);
            clock = null;
        }
        else {
            counter--;
        }
    }, 1000);

};