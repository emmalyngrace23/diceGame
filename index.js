// alert("hi");

let randomNumber1 = Math.floor(Math.random()*6) +1;

let randomDice1 = "dice" + randomNumber1 + ".png";

let randomDiceSource1 = "./images/" + randomDice1;

document.querySelector("h1").addEventListener("click", rollDice);

function rollDice() {

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceSource1);


    let randomNumber2 = Math.floor(Math.random()*6) +1;

    let randomDiceSource2 = "./images/" + "dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
 
}




