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





/*
# Javascript async advanced quarto esercizio

Hai a disposizione una funzione chiamata `getPastEvent`, che restituisce una _Promise_ con un evento storico casuale sotto forma di oggetto:
```
function getPastEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];
      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}

```

### Obiettivi:
Scrivi una funzione asincrona `travelThroughHistory`, che:

-   Chiama **N volte** `getPastEvent()` in parallelo. ( N puo essere 5,10, 100, 1000 )
    
-   Raccoglie tutti i risultati.
    
-   Ordina gli eventi **cronologicamente (dal più vecchio al più recente)**.
    
-   Rimuove i **duplicati** (stesso anno + stesso nome).
    
-   Restituisce **solo** gli eventi avvenuti **prima del 2000**.
*/ 


function getPastEvent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];

      // Simula errore casuale (20%)
      if (Math.random() < 0.2) {
        reject("Errore nel recupero evento");
        return;
      }

      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}

async function travelThroughHistory(n) {
  try {
  
    const results = await Promise.allSettled(
      Array.from({ length: n }, () => getPastEvent())
    );

   
    const successful = results
      .filter(r => r.status === "fulfilled")
      .map(r => r.value);

   
    const unique = [...new Map(
      successful.map(e => [`${e.year}-${e.name}`, e])
    ).values()];

  
    return unique
      .filter(e => e.year < 2000)
      .sort((a, b) => a.year - b.year);

  } catch (error) {
    console.error("Errore generale:", error);
    throw error;
  }
}


travelThroughHistory(10)
  .then(result => {
    console.log("Eventi finali:");
    console.table(result);
  })
  .catch(err => console.error("Catch finale:", err));