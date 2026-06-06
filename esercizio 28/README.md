# Esercizio 28
In un menu digitale, verifica se un ingrediente specifico è presente nella lista degli allergeni di un piatto.

## Codifica
``` js
const allergeni = ["Farina", "Uova", "Latte", "Noci", "Glutine"];
let user = prompt("Inserisci un ingrediente di cui sei allergico");

let isTrue = allergeni.includes(user);
console.log(isTrue);
```