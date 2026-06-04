const votes = ["4", "7", "9", "3", "5"]
const students = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"]

for (let i = 0; i < votes.length; i++) {

    if (votes[i] < 6) {
        console.log(students[i], "sei insufficiente");
    } else {
        console.log(students[i], "hai passato l'esame!");
    }
}