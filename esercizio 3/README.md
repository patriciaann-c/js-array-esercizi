# Esercizio 3
Dati i posti liberi per carrozza [2, 0, 4, 7, 12, 8], chiedi all'utente il numero di passeggeri del gruppo e assegna loro la prima carrozza che ha capienza sufficiente, stampando il numero della carrozza scelta


## Ragionamento
- Dichiara i posti liberi per carrozza
- Chiedi all'utente il numero di passeggeri
- PER ogni passeggero
    - assegna la prima carrozza con capienza sufficiente
    - stampa il numero della carrozza scelta

## Codifica
``` js
const posti_liberi = [2, 0, 4, 7, 12, 8];
const passeggeri = prompt("Inserisci il numero di passeggeri del gruppo");
let i = 0;

while (i < posti_liberi.length && posti_liberi[i] < passeggeri) {
    i++;
}

if (i < posti_liberi.length) {
    console.log("Carrozza assegnata:", i + 1);
} else {
    console.log("Nessuna carrozza ha posti sufficienti.");
}
```