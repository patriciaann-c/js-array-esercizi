# Esercizio 15
Stai chattando con un tuo amico; quando arriva un nuovo messaggio, aggiungilo all'intera conversazione.

## Codifica
``` js
const messaggi = ["Ciao", "Come stai?", "Che fai di bello?", "Com'é andata la giornata?"];
let nuovo_messaggio = prompt("Inserisci un nuovo messaggio da inviare");

messaggi.push(nuovo_messaggio);
console.log(messaggi);
```