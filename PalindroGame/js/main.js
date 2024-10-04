console.log("it Works");

//Chiedere all’utente di inserire una parola


// Creare una funzione --> OBIETTIVO: per capire(verify) se la parola inserita è palindroma;
//- reverse


//funzione senza parametro
function palindroGame (){

let wordInput = prompt("Ciao! inserisci una parola:");
console.log(wordInput);

let wordSchizo = wordInput.split('');
console.log(wordSchizo);

let wordReverse = wordSchizo.reverse();
console.log(wordReverse);

let wordJoin = wordSchizo.join('');
console.log(wordJoin);

if(wordInput === wordJoin){
    
    alert("la parola è palindroma")
    
  } else {
    alert("la parola non è palindroma");
  }


}

console.log(palindroGame())

