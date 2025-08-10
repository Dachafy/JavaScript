// Rock, Paper and Scissor Mini Game

let choice = ["Rock", "Paper", "Scissor"];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

let message = "Player chose " + choice[player] + "and " + "Computer chose " + choice[computer];

if(player == computer){
    console.log(message + " it is a draw.");
} else if(
    (player == 0 && computer == 1) ||
    (player == 1 && computer == 2)
){
    console.log(msg + " computer won");
} else if(
    (player == 1 && computer == 0) ||
    (player == 2 && computer == 1)
){
    console.log(msg + " player won.");

}