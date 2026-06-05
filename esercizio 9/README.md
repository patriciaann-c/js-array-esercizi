# Esercizio 9
In un parcheggio numerato, l'utente cerca la sua auto; trova la posizione (indice) del suo numero di targa.

## Ragionamento
- Dichiara le targhe nel parcheggio
- Dichiara la targa dell'utente
- Trova la posizione della targa nel parcheggio usando .indexOf()

## Codifica
``` js
const parcheggio = ["ABC123", "PRC1005", "AJL0116", "SPH0704", "LRT2012", "TSS0407"];
let user_targa = prompt("Inserisci la tua targa");

const targa_index = parcheggio.indexOf(user_targa);

if (targa_index !== -1) {
    console.log("La tua auto si trova nel parcheggio numero:", targa_index);
} else {
    console.log("Auto non trovata nei parcheggi");
}
```