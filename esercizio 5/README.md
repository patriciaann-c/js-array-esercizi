# Esercizio 5
Data la lista VIP per una serata, verifica se l'utente X è presente nella lista VIP o se è nella lista standard.

## Ragionamento
- Dichiara i nomi dei VIP per una serata
- Inserisci il nome dell'utente
- Verifica SE l'utente é presente nella lista
    - stampa "Sei un VIP!"
- ALTRIMENTI
    - stampa "Sei nella lista standard"

## Codifica
``` js
const vip = ["Mario", "Luigi", "Peach", "Yoshi", "Toad", "Bowser"];
let userName = prompt("Inserisci il tuo nome con la lettera maiuscola");
let exist = userName.includes(vip)

if (exist == true) {
    console.log("Sei un VIP!");
} else {
    console.log("Sei nella lista standard");
}
```