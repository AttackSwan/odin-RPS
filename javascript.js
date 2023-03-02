createListeners();

let wins = 0
let losses = 0
let ties = 0
let bestOf = 5  //stop when player/computer reaches this many wins

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    let result = [];    

    // Tie conditions
    if (playerSelection === computerSelection){
        result = ["tie", "Tie!"];
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
    else{
    console.log("Invalid game outcome");
    }
    
    updateTotals(result);
    updateRoundMessage(result);
    checkEndGame(wins, losses);
}

function createListeners(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        //click listener
        button.addEventListener('click', (e) => {
            playRound(e.target.id);
            e.target.classList.add('pressed');
        })
        //transition listener
        button.addEventListener('transitionend', (e) => {
            e.target.classList.remove('pressed');
        });
    })
}

function removeTransition(){
    console.log("Transition end");
}

function updateTotals(result){
    if (result[0] === "tie") {
        ties++;
        const tieText = document.querySelector('.ties .lower');
        tieText.textContent = ties;
    }
    else if (result[0] === "win") {
        wins++;
        const winText = document.querySelector('.wins .lower');
        winText.textContent = wins;
    }
    else if (result[0] === "loss") {
        losses++;
        const lossesText = document.querySelector('.loses .lower');
        lossesText.textContent = losses;
    }
    else {
        alert("Error: not win, loss, or tie");
    }
}

function updateRoundMessage(result){
       const roundMessage = document.querySelector('.result');
       roundMessage.textContent = result[1];
}

function checkEndGame(wins, losses){
    if (wins === bestOf){
        const winText = document.querySelector('.result');
        winText.textContent = "Congratulations! You win!";
        endGame();
    }
    else if (losses === bestOf){
        const lossText = document.querySelector('.result');
        lossText.textContent = "Computer Wins!";
        endGame();
    }
}

function endGame() {
    const buttons = document.querySelector('.buttons');
    buttons.remove();
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