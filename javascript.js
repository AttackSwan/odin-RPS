createListeners();

let wins = 0
let losses = 0
let ties = 0
let bestOf = 1  //stop when player/computer reaches this many wins

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    let result = [];    

    // Tie conditions
    if (playerSelection === computerSelection){
        result = ["tie", "Tie: " + playerSelection + " vs " + computerSelection];
    }
    
    //Player win conditions
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        result = ["win", "You win! Rock beats Scissors"];
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        result = ["win", "You win! Paper covers Rock"];
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        result = ["win", "You win! Scissors cut Paper"];
    }
    
    //Player lose conditions
    else if(playerSelection === "rock" && computerSelection === "paper"){
        result = ["loss", "You lose! Paper covers Rock"];
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        result = ["loss", "You lose! Scissors cut Paper"];
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        result = ["loss", "You lose! Rock beats Scissors"]
    }
    
    //End of game conditions
    else if (playerSelection === "againYes"){
        resetGame();
    }
    else if (playerSelection === "againNo"){
        endGame();
    }
    
    else{
    console.log("Invalid game outcome");
    }
    
    if (result.length !== 0){
        updateTotals(result);
        changeMessage('.result', result[1]);
        checkEndGame(wins, losses);
        }
}

function createListeners(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        //click listener
        button.addEventListener('click', (e) => {
            playRound(e.target.id);
        })
    })
}

function getComputerChoice(){
    //generate a random computer choice. 1 for rock, 2 for paper, 3 for scissors.   
    //generate random number between 1 and 3. Formula is: Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice
    switch(randomNumber){
        case 1:
            computerChoice = "rock"
            break;
        case 2: 
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
        default:
            computerChoice = "error"
            alert("Error: invalid computer choice")
            break;
    }
    return computerChoice
}

function updateTotals(result){
    if (result[0] === "tie") {
        ties++;
        changeMessage('.ties .lower', ties);
    }
    else if (result[0] === "win") {
        wins++;
        changeMessage('.wins .lower', wins);
    }
    else if (result[0] === "loss") {
        losses++;
        changeMessage('.losses .lower', losses)
    }
    else if (result[0] === "reset"){
        wins = losses = ties = 0;
        changeMessage('.ties .lower', ties);
        changeMessage('.wins .lower', wins);
        changeMessage('.losses .lower', losses)
    }
    else {
        alert("Error: not win, loss, or tie");
    }
}

function checkEndGame(wins, losses){
    if (wins === bestOf){
        changeMessage('.result', "Congratulations! You win!");
        playAgain();
    }
    else if (losses === bestOf){
        changeMessage('.result', "Computer Wins!")
        playAgain();
    }
}

function playAgain() {
    hideElement('.buttons');
    showElement('.againContainer', 'block');
}

function resetGame() {
    updateTotals(["reset"]);
    hideElement('.againContainer'); 
    showElement('.buttons', 'flex');
    changeMessage('.result', "Press a button to begin a game!");
}

function endGame(){
    hideElement('.againContainer');
    hideElement('.buttons');
    changeMessage('.result', "Thanks for playing!");
}

function hideElement(hide){
    const element = document.querySelector(hide);
    element.setAttribute('style', 'display: none;');
}
function showElement(element, display){
    const changeElement = document.querySelector(element);
    changeElement.setAttribute('style', 'display :' + display + ";");
}
function changeMessage(element, message){
    const changeElement = document.querySelector(element);
    changeElement.textContent = message;
}