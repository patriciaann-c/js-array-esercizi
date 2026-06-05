const posti_liberi = [2, 0, 4, 7, 12, 8];
const passeggeri = prompt("Inserisci il numero di passeggeri del gruppo");
let i = 0;

while (i < posti_liberi.length && posti_liberi[i] < passeggeri) {
    i++;
}

if (i < posti_liberi.length) {
    console.log("Carrozza assegnata:", i + 1);
} else {
    console.log("Nessuna carrozza ha posti sufficienti.");
}