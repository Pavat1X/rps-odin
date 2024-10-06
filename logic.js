//grab  submit button
let playerans = document.getElementById('playeranswer');
//add listener to submit button where main() fires if clicked
playerans.addEventListener('click', main);

//implemented a random number generator to generate bot actions
function rng(n) {
    return Math.floor(Math.random() * n);
} 

//implemented main game logic
function main() {
    //defined game asset constants, bot options and game outcome text
    const options = ["rock", "paper", "scissors"];
    const outcome = document.querySelector('#outcome');
    const botChoice = document.querySelector('#bot-choice');
    //initialized chosen bot action
    const bot = options[rng(3)]
    //loaded in player's chosen action and reporting bot choice
    let select = document.getElementById('player');
    let player = select.options[select.selectedIndex].text;
    botChoice.textContent = `Your opponent chose ${bot}`;
    
    //implemented rock-paper-scissors game logic
    if (player == bot) {
        outcome.textContent = "draw!!";
    } else {
        if (player == "rock") {
            if (bot == "scissors") {
                outcome.textContent = "you win :)";
            } else if (bot == "paper") {
                outcome.textContent = "you lose :(";
            }
        } else if (player == "scissors") {
            if (bot == "rock") {
                outcome.textContent = "you lose :(";
            } else if (bot == "paper") {
                outcome.textContent = "you win :)";
            }
        } else if (player == "paper") {
            if (bot == "scissors") {
                outcome.textContent = "you lose :(";
            } else if (bot == "rock") {
                outcome.textContent = "you win :)";
            }
        }
    } 
}