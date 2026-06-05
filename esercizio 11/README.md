# Esercizio 11
Stai usando un browser web, clicchi il pulsante "Indietro" che ti riporta alla pagina precedente; rimuovi l'ultima URL visitata dallo storico di navigazione.

## Codifica
``` js
const cronologia = ["https://google.com", "https://boolean.careers/", "https://taylorswift.com", "https://booking.com"]
cronologia.pop()

console.log(cronologia);
```