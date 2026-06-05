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