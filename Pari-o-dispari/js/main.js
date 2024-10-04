//Azioni utente:
//1 - scelta pari o dispari --> questo dato dovrebbe essere salvato in una lista temporanea al fine di fare la verifica"
//2 - inserimento numero da 1 a 5 --> anche questo dato dovrà essere salvato in un array temporaneo al fine di essere utilizzato;

let evenOdd = []
//let userChoice; //= prompt('Ciao, giochiamo a "Pari&Dispari", cosa scegli?');
//console.log(evenOdd);

let number = [];

//let userDecision = evenOdd.push();
//console.log(userChoice);
function pariOdispari(evenOdd, number){
    let userChoice = prompt('Ciao, giochiamo a "Pari&Dispari", cosa scegli?');
    evenOdd.push(userChoice); //può memorizzare solo una parola o pari o dispari

    console.log(evenOdd);
    
    let userNumber = prompt ("Adesso, inserisci un numero da 1 a 5");
    console.log(userNumber);
    let convertNumber = userNumber.parseInt()
    console.log(convertNumber);
    number.push(convertNumber);
    console.log(number)

 
} console.log(pariOdispari(evenOdd, number))





let userNumber = prompt ("Adesso, inserisci un numero da 1 a 5");
console.log(userNumber);


















// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). --> Math.floor(Math.random())
//- Loop for?
//- array?
//- function ?



//Sommiamo i due numeri e Stabiliamo (verifichiamo):
// SE la somma dei due numeri è pari -->
// SE la somma dei numeri è dispari -->
//-sum
//- %
//- if, else if, else


//Dichiariamo chi ha vinto
//- Alert                                      