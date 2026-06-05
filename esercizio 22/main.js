const giorni_settimana = ["", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
const giorno = prompt("Inserisci il giorno della settimana del tuo compleanno quest'anno con la lettera maiuscola")

const posizione = giorni_settimana.indexOf(giorno);
console.log(posizione);