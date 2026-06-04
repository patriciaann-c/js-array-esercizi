const ingredienti = ["Latte", "Pane", "Uova", "Riso", "Pasta"];
const quantita = [12, 0, 3, 25, 4];

for (let i = 0; i < ingredienti.length; i++) {
    const qta = quantita[i];

    if (qta === 0) {
        console.warn("Il", ingredienti[i], "é esaurito");
    } else if (qta < 5) {
        console.log("Hai scorte basse su", ingredienti[i]);
    } else {
        console.log("Hai abbastanza quantità di", ingredienti[i]);
    }
} 