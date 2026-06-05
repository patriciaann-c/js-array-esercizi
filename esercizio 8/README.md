# Esercizio 8
Un ospedale ha 7 infermieri con questi turni: ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"]. Conta quanti infermieri lavorano in ciascun turno.

## Ragionamento
- Dichiara i turni degli infermieri ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"]
- PER OGNI turno
    - conta quanti infermieri lavorano

## Codifica
``` js
const turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"];
let counter = {};

for (let i = 0; i < turni.length; i++) {
    const turno = turni[i];

    if (counter[turno]) {
        counter[turno]++
    } else {
        counter[turno] = 1
    }
}
console.log(counter);
```