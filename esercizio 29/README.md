# Esercizio 29
Devi inserire una pubblicità dopo la terza notizia nel feed di un giornale online; inserisci l'elemento pubblicitario nella posizione corretta senza sovrascrivere nulla.


## Codifica
``` js
const pubblicita = ["Animali", "Omicidio", "Tifone", "Terremoto", "Temperature alte"];
let insert = prompt("Inserisci una pubblicità");

pubblicita.splice(3, 0, insert);
console.log(pubblicita);
```