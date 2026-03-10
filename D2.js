/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 4
const num2 = 6

if (num1 > num2) {
  console.log("Il numero più maggiore è:", num1)
} else {
  console.log("Il numero più maggiore è:", num2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const notEqual = 6
if (notEqual !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const divBy = 1000000
const divBy5 = divBy % 5
if (divBy5 === 0) {
  console.log("Il numero della variabile è divisibile per 5 perché il suo risultato è: " + divBy5)
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const aa = 4
const bb = 4
const cc = 8

if (aa === 8 || bb === 8 || cc === 8) {
  console.log("Uno dei numeri interi è 8")
}

if (aa + bb === 8) {
  console.log("La somma è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 350
const prezzoMinimo = 50
const costoSpedizione = 10
const differenzaPromozione = prezzoMinimo - totalShoppingCart
const promo20 = (totalShoppingCart * 20) / 100
const diffPromo20 = prezzoMinimo - promo20

if (totalShoppingCart >= prezzoMinimo) {
  console.log(
    "Congratulazioni, non pagherai le spese di spedizione. Il totale è " + totalShoppingCart,
  )
} else {
  console.log(
    "Ti mancano solo " +
      differenzaPromozione +
      "€ per non pagare la spedizione. Il totale è " +
      totalShoppingCart,
  )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (promo20 >= prezzoMinimo) {
  console.log("Congratulazioni, non pagherai le spese di spedizione. Il totale è " + promo20)
} else {
  console.log(
    "Ti mancano solo " + diffPromo20 + "€ per non pagare la spedizione. Il totale è " + promo20,
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const gg = 7
const hh = 30
const ii = -1

const ordinareArray = [gg, hh, ii]
ordinareArray.sort()
console.log(ordinareArray)

// Primo algoritmo prima di usare .sort
// if (gg > hh && gg > ii) {
//   console.log(gg + " > " + hh + " > " + ii)
// } else if (gg > ii && gg > hh) {
//   console.log(gg + " > " + ii + ">" + hh)
// } else if (hh > gg && hh > ii) {
//   console.log(hh + " > " + gg + " > " + ii)
// } else if (hh > ii && hh > gg) {
//   console.log(hh + " > " + ii + " > " + gg)
// } else if (ii > gg && ii > hh) {
//   console.log(ii + " > " + gg + " > " + hh)
// } else {
//   console.log(ii + " > " + hh + " > " + gg)
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isItNumber = 4

if (typeof isItNumber === "number") {
  console.log("complimenti!")
} else {
  console.log("Oh no")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const opModulo = 20
const zeroResto = opModulo % 2

/* SCRIVI QUI LA TUA RISPOSTA */
if (opModulo % 2 === 0) {
  console.log("Il numero è divisibile per due, il suo resto è " + zeroResto)
} else {
  console.log("Il numero non è divisibile per due, il suo resto è " + zeroResto)
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 10
if (val < 10 && val >= 5) {
  console.log("Meno di 10")
} else if (val < 5) {
  console.log("Meno di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayNum = []

// arrayNum.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
arrayNum.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arrayNum)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayNum.splice(length - 1, 1, 100)
console.log(arrayNum)
