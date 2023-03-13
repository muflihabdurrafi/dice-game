function roll() {
    let random1 = Math.floor(Math.random() * 6) + 1; //generate random number from 1-6 for player 1
    let random2 = Math.floor(Math.random() * 6) + 1; //generate random number from 1-6 for player 2

    console.log("p1: " + random1);
    console.log("p2: " + random2);

    if (random1 > random2) {
        document.getElementById("result").textContent = "🚩 Player 1 is the winner!"; //if player 1 wins
    } else if (random1 < random2) {
        document.getElementById("result").textContent = "Player 2 is the winner! 🚩"; //if player 2 wins
    } else if (random1 == random2) {
        document.getElementById("result").textContent = "Reroll the dice!"; //if its a draw
    }

    changeDisplay(random1, 1); //change dice display for player 1
    changeDisplay(random2, 2); //change dice display for player 2
}

function changeDisplay(random, player) {
    let arrayP1 = [];
    let arrayP2 = [];
    let array = [];

    if (player == 1) {
        for (let i = 1; i <= 7; i++) {
            arrayP1[i] = document.querySelector("#player" + player + " .dice .position" + i);
        }
        array = arrayP1;
    } else {
        for (let i = 1; i <= 7; i++) {
            arrayP2[i] = document.querySelector("#player" + player + " .dice .position" + i);
        }
        array = arrayP2;
    }

    if (random === 1) {
        array[1].classList.add("dot");
        array[2].classList.remove("dot");
        array[3].classList.remove("dot");
        array[4].classList.remove("dot");
        array[5].classList.remove("dot");
        array[6].classList.remove("dot");
        array[7].classList.remove("dot");
    } else if (random === 2) {
        array[1].classList.remove("dot");
        array[2].classList.add("dot");
        array[3].classList.remove("dot");
        array[4].classList.remove("dot");
        array[5].classList.add("dot");
        array[6].classList.remove("dot");
        array[7].classList.remove("dot");
    } else if (random === 3) {
        array[1].classList.add("dot");
        array[2].classList.add("dot");
        array[3].classList.remove("dot");
        array[4].classList.remove("dot");
        array[5].classList.add("dot");
        array[6].classList.remove("dot");
        array[7].classList.remove("dot");
    } else if (random === 4) {
        array[1].classList.remove("dot");
        array[2].classList.add("dot");
        array[3].classList.add("dot");
        array[4].classList.add("dot");
        array[5].classList.add("dot");
        array[6].classList.remove("dot");
        array[7].classList.remove("dot");
    } else if (random === 5) {
        array[1].classList.add("dot");
        array[2].classList.add("dot");
        array[3].classList.add("dot");
        array[4].classList.add("dot");
        array[5].classList.add("dot");
        array[6].classList.remove("dot");
        array[7].classList.remove("dot");
    } else if (random === 6) {
        array[1].classList.remove("dot");
        array[2].classList.add("dot");
        array[3].classList.add("dot");
        array[4].classList.add("dot");
        array[5].classList.add("dot");
        array[6].classList.add("dot");
        array[7].classList.add("dot");
    }
}
