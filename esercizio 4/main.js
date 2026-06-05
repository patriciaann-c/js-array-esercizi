const temperature = [17, 19, 21, 18, 24, 22, 26];

const max = Math.max(...temperature);
console.log("Massima temperatura settimanale:", max);

const min = Math.min(...temperature);
console.log("Minima temperatura settimanale:", min);

let somma = 0
for (const temperatures of temperature)
    somma = somma + temperatures
const media = somma / temperature.length
console.log("La media delle temperature é", media);