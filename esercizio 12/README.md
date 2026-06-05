# Esercizio 12
Un partecipante si ritira da una gara a metà percorso; rimuovi il suo nome dall'array della classifica mantenendo l'ordine degli altri.

## Codifica
``` js
const partecipanti = ["Mario", "Luigi", "Yoshi", "Peach", "Toad", "Bowser"];
partecipanti.splice(0, 2);

console.log(partecipanti);
```