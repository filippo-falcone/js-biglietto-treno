// Cosa da chiedere al cliente: numero di chilometri da percorrere e età del passeggero
const userKm = parseInt(prompt('Inserisci il numero di km che vuoi percorrere:'));
const userAge = parseInt(prompt("Inserisci l'età del passeggero"));

// Inserisco i dati dell'utente nell'html
const userkmPrint = 'Km ' + userKm;
document.getElementById('km').innerHTML = userkmPrint;
const userAgePrint = 'età ' + userAge;
document.getElementById('age').innerHTML = userAgePrint;

// Definire il prezzo del bigletto
let ticketPrice;
if (userAge < 18) {
    ticketPrice = 0.21 * userKm * 20 / 100;
}
else if (userAge > 65) {
    ticketPrice = 0.21 * userKm * 40 / 100;
}
else {
    ticketPrice = 0.21 * userKm;
}

// Stampare al cliente il prezzo
const finalPrice = 'Il prezzo finale è: ' + ticketPrice.toFixed(2) + '€';
document.getElementById('total-price').innerHTML = finalPrice;