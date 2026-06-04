# Esercizio 1
Dato l'array dei nomi `["Latte", "Pane", "Uova", "Riso", "Pasta"]` e quello delle quantità `[12, 0, 3, 25, 4]`, scorri gli array e stampa un avviso di "ESURITO" se la quantità è 0 o "Scorte basse" se è minore di 5.

## Ragionamento
- Dichiaro array dei nomi
- Dichiaro array delle quantità
- PER ogni quantità
    - SE la quantità é uguale a 0
        - stampa "Esaurito"
    - ALTRIMENTI SE la quantità é minore di 5
        - stampa "Scorte basse"

## Codifica
``` js
const ingredienti = ["Latte", "Pane", "Uova", "Riso", "Pasta"];
const quantita = [12, 0, 3, 25, 4];

for (let i = 0; i < ingredienti.length; i++) {
    const qta = quantita[i];

    if (qta === 0) {
        console.warn("Il", ingredienti[i], "é esaurito");
    } else if (qta < 5) {
        console.log("Hai scorte basse su", ingredienti[i]);
    } else {
        console.log("Hai abbastanza quantità di", ingredienti[i]);
    }
}
```