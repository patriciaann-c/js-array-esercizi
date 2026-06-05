# Esercizio 18
Da un estratto conto bancario, estrai solo le ultime 10 transazioni effettuate.

## Codifica
``` js
const conto = [12, 34, 56, 78, 90, 10, 36, 98, 24, 57, 87, 25, 68, 90, 23, 34, 65, 73, 12, 19, 70, 57, 84];
const ultime_transazioni = conto.slice(0, -10);

console.log(ultime_transazioni);
```