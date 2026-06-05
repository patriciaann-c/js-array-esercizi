# Esercizio 23
Stai sviluppando una "To-Do List": dato un array di task già presenti, chiedi all'utente di aggiungere una nuova attività.

## Codifica
``` js
const task = ["Pulire", "Cucinare", "Annaffiare le piante", "Dipingere", "Fare gli esercizi"];
let nuovo_task = prompt("Aggiungi una nuova attivtà");

task.push(nuovo_task);
console.log(task);
```