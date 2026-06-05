# Esercizio 17
Alla cassa del supermercato, il primo cliente della fila viene servito e se ne va; rimuovilo della coda per far avanzare gli altri.

## Codifica
``` js
const clienti = ["Mario", "Luigi", "Yoshi", "Peach", "Toad", "Bowser"];
clienti.shift();

console.log(clienti);
```