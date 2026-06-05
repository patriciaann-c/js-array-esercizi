# Esercizio 22
Trova la posizione del giorno della settimana in cui è caduto il tuo compleanno quest'anno.

## Codifica
``` js
const giorni_settimana = ["", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
const giorno = prompt("Inserisci il giorno della settimana del tuo compleanno quest'anno con la lettera maiuscola")

const posizione = giorni_settimana.indexOf(giorno);
console.log(posizione);
```