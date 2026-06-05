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
