# Esercizio 10
Devi generare un codice CSV da inviare al server; trasforma un array in una stringa con i valori separati da ",".

## Codifica
``` js
const codici = ["Patricia", 25, 100501, "Verona", "Filippine"]
const csv = codici.join(",");

console.log(csv);
```