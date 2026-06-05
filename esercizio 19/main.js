const ospiti = ["Mario", "Luigi", "Yoshi", "Peach", "Toad", "Bowser"];
let vip = prompt("Inserisci il nome del vip");

ospiti.unshift(vip);
console.log(ospiti);