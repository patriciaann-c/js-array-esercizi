# Esercizio 19
Sei il buttafuori di un locale VIP: arriva un ospite importante che deve saltare la fila; inserisci il suo nome all'inizio della lista d'ingresso.

## Codifica
``` js
const ospiti = ["Mario", "Luigi", "Yoshi", "Peach", "Toad", "Bowser"];
let vip = prompt("Inserisci il nome del vip");

ospiti.unshift(vip);
console.log(ospiti);
```