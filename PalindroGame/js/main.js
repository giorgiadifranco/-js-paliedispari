console.log("it Works");

//Chiedere all’utente di inserire una parola
let wordInput = prompt("Ciao! inserisci una parola:");

console.log(wordInput);

// Creare una funzione --> OBIETTIVO: per capire se la parola inserita è palindroma;
//- reverse



function palindroGame (){


let wordSchizo = wordInput.split('');
console.log(wordSchizo);

let wordReverse = wordSchizo.reverse();
console.log(wordReverse);

let wordJoin = wordSchizo.join('');

return wordJoin
}

palindroGame()




// Creare una funzione --> OBIETTIVO: per capire se la parola inserita è palindroma;
//- reverse

//è necessario estrarre l'indice della parola

