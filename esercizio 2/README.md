# Esercizio 2
Dati una lista di voti e una lista di studenti, stampa chi ha avuto un voto insufficiente e chi no

## Ragionamento
- Dichiara una lista di voti
- Dichiara una lista di studenti
- PER ogni voto
    - SE il voto é minore di 6
        - stampa "Insufficiente"
    ALTRIMENTI
        - stampa "Hai passato l'esame"

## Codifica
``` js
const votes = ["4", "7", "9", "3", "5"]
const students = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"]

for (let i = 0; i < votes.length; i++) {

    if (votes[i] < 6) {
        console.log(students[i], "sei insufficiente");
    } else {
        console.log(students[i], "hai passato l'esame!");
    }
}
```