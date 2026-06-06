const allergeni = ["Farina", "Uova", "Latte", "Noci", "Glutine"];
let user = prompt("Inserisci un ingrediente di cui sei allergico");

let isTrue = allergeni.includes(user);
console.log(isTrue);