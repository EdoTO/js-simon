function getRandomInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const min = 1;
const max = 100;
const numeriDaIndovinare = [];
const numeriUtente = [];
const numeriIndovinati = [];

do {
    const number = getRandomInclusive(min, max);
    if (numeriDaIndovinare.includes(number) === false) {
        numeriDaIndovinare.push(number)
    }
} while (numeriDaIndovinare.length < 5)

console.log(numeriDaIndovinare);

alert(`Memorizza i 5 numeri: ${ numeriDaIndovinare.join(`,`) }`);

setTimeout (() => {

    do {

        const number = parseInt(prompt(`Inserisci un numero da 1 a 100`))
        numeriUtente.push(number)
        if (numeriDaIndovinare.includes(number)) {
            numeriIndovinati.push(number)
        }

    } while (numeriUtente.length < 5);

    console.log(numeriUtente, numeriIndovinati)

    alert (`Hai indovinato ${numeriIndovinati.length} numeri`)

}, 1000 )