/*
 1: Scrivi un programma che crea un array di 5 numeri, somma tutti gli elementi dell'array e stampa il risultato. 2: Crea un array contenente numeri da 1 a 10. Ricava da questo array, un altro contenente solo i numeri pari moltiplicati per 2. 3: Creare un array di oggetti, ciascuno rappresentante una persona con un nome e un'età. Ordina l'array per età in ordine crescente e poi estrai solo i nomi delle persone che hanno più di 18 anni.  */

//Primo esercizio
 //let numbers = [ 1,2,3,4,5];
 //let sum = 0;
 //for(let i = 0; i < numbers.length; i++){
  // sum += numbers[i];
//}
//console.log("La somma è : "  +sum);



//primo esercizio senza for
let number = [1, 2, 3, 4, 5];

let somma = number.reduce((acc, num) => acc + num, 0);

console.log(somma);



//secondo esercizio
//let numeri = [1,2,3,4,5,6,7,8,9,10];
//let numeriPari = [];
//for(let i = 0; i < numeri.length; i++){
   // if(numeri[i] % 2 === 0){
       // numeriPari.push(numeri[i] * 2);
   // }
//}

//console.log("Numeri pari moltiplicati per 2 sono:" + numeriPari);

//secondo esercizio senza for
let numeri2 = [1,2,3,4,5,6,7,8,9,10];
let numeriPari2 = numeri2.filter(num => num % 2 === 0).map(num => num * 2);
console.log(`Numeri pari moltiplicati per 2 sono : ${numeriPari2}`)


//terzo eserfcizio

let persone = [
    { nome : "Francesca", eta :25},
    {nome : "Luca", eta : 21},
    {nome : "Maria", eta : 30},
    {nome : "Silvio", eta : 43},
    {nome : "Anna", eta : 16},
    {nome : "Marco", eta : 17}
]

let personeMaggiorenni = persone.filter(persona => persona.eta > 18).sort((a, b) => a.eta - b.eta).map(persona => persona.nome);

console.log(`Le persone maggiorenni sono : ${personeMaggiorenni}`);


