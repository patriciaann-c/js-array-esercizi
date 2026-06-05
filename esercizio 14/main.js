const amici = ["Mario", "Luigi", "Yoshi", "Peach", "Toad", "Bowser"];
const bloccati = ["Patricia", "Sophia", "Liberato", "Tessie", "Aj"];
let username = (prompt("Inserisci il suo nome"));
let isTrue = bloccati.includes(username);

console.log(isTrue);

if (isTrue == false) {
    amici.push(username);
} else {
    console.warn("Hai l'amico bloccato!")
}

console.log(amici);