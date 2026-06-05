# Esercizio 6
Date le ore lavorative giornaliere [40, 35, 45, 38, 42] e una paga base di 15€/ora, calcola lo stipendio totale settimanale applicando una maggiorazione di 5€ per ogni ora straordinaria oltre le 40 giornaliere

## Ragionamento
- Dichiara le ore lavorative giornaliere [40, 35, 45, 38, 42]
- PER OGNI ora 
    - dichiara una paga base di 15€ all'ora
- PER OGNI ora > 40 
    - applica una maggiorazione di 5€
- calcola lo stipendio totale settimanale

## Codifica
``` js
const ore_giornaliere = [40, 35, 45, 38, 42];
const paga_base = 15;
const straordinari = 20;
let stipendio = 0;

for (let i = 0; i < ore_giornaliere.length; i++) {
    let ore = ore_giornaliere[i];

    if (ore > 40) {
        stipendio = stipendio + (40 * paga_base) + ((ore - 40) * straordinari);
    } else {
        stipendio = stipendio + (ore * paga_base);
    }
}

console.log("Lo stipendio totale é:", stipendio);

```