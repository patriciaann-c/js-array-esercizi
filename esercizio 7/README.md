# Esercizio 7
Dati gli atleti ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"] e i relativi punteggi [78, 93, 86, 91, 82], determina chi ha ottenuto il punteggio più alto, il secondo e il terzo più alto per assegnare rispettivamente oro, argento e bronzo.

## Ragionamento
- Dichiara gli atleti ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"]
- Dichiara i punteggi  [78, 93, 86, 91, 82]
- Trova il primo punteggio più alto
    - stampa "Complimenti! Hai vinto la medaglia d'oro
- Trova il secondo punteggio più alto
    - stampa "Complimenti! Hai vinto la medaglia d'argento
- Trova il terzo punteggio più alto
    - stampa "Complimenti! Hai vinto la medaglia di bronzo

## Codifica
``` js
const atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
const punteggi = [78, 93, 86, 91, 82];

let max1 = -1, max2 = -1, max3 = -1;
let atleta1, atleta2, atleta3;

for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > max1) {
        max1 = punteggi[i];
        atleta1 = atleti[i];
    }
}
console.log("Complimenti!", atleta1, "Hai vinto la medaglia d'oro con un punteggio di", max1);

for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > max2 && punteggi[i] < max1) {
        max2 = punteggi[i];
        atleta2 = atleti[i];
    }
}
console.log("Complimenti!", atleta2, "Hai vinto la medaglia d'argento con un punteggio di", max2);


for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > max3 && punteggi[i] < max2) {
        max3 = punteggi[i];
        atleta3 = atleti[i];
    }
}
console.log("Complimenti!", atleta3, "Hai vinto la medaglia di bronzo con un punteggio di", max3);
```