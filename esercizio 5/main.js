const vip = ["Mario", "Luigi", "Peach", "Yoshi", "Toad", "Bowser"];
let userName = prompt("Inserisci il tuo nome con la lettera maiuscola");
let exist = userName.includes(vip)

if (exist == true) {
    console.log("Sei un VIP!");
} else {
    console.log("Sei nella lista standard");
}