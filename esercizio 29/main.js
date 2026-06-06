const pubblicita = ["Animali", "Omicidio", "Tifone", "Terremoto", "Temperature alte"];
let insert = prompt("Inserisci una pubblicità");

pubblicita.splice(3, 0, insert);
console.log(pubblicita);