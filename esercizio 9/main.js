const parcheggio = ["ABC123", "PRC1005", "AJL0116", "SPH0704", "LRT2012", "TSS0407"];
let user_targa = prompt("Inserisci la tua targa");

const targa_index = parcheggio.indexOf(user_targa);

if (targa_index !== -1) {
    console.log("La tua auto si trova nel parcheggio numero:", targa_index);
} else {
    console.log("Auto non trovata nei parcheggi");
}