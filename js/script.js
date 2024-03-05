// Cosa da chiedere al cliente: numero di chilometri da percorrere e età del passeggero
const userKm = parseInt(prompt('Inserisci il numero di km che vuoi percorrere:'));
console.log(userKm);
const userAge = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(userAge);

// Inserisco i dati dell'utente nell'html
const userkmPrint = 'Km ' + userKm;
document.getElementById('km').innerHTML = userkmPrint;
const userAgePrint = 'età ' + userAge;
document.getElementById('age').innerHTML = userAgePrint;

// Definire il prezzo del bigletto

// Stampare al cliente il prezzo