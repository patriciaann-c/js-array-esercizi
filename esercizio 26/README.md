# Esercizio 26
Hai una lista di priorità lavorative; il capo ti assegna un'emergenza da fare subito: inseriscila come primo elemento dell'array e stampa la lista.

## Codifica
``` js
const lavoro = ["Sistemare i documenti archiviati", "Stampare il report degli ultimi 3 anni", "Buttare documenti di 6 anni fa"];
lavoro.unshift("Inviare un email di emergenza sulle vendite");

console.log(lavoro);
```