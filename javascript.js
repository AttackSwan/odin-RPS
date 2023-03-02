//Set up button listeners
const btnRock       = document.querySelector('#rock');
const btnPaper      = document.querySelector('#paper');
const btnScissors   = document.querySelector('#scissors');

btnRock.addEventListener('click', function(e) {
    playRound(e.target.id);
})
btnPaper.addEventListener('click', function(e) {
    playRound(e.target.id);
})
btnScissors.addEventListener('click', function(e) {
    playRound(e.target.id);
})

//Global variables
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
}

function updateTotals(result){
    //Update results
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
    
    //update round message
    const roundMessage = document.querySelector('.result');
    roundMessage.textContent = result[1];
    console.log(result);
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


/*
game()

function game(){   
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    let games = 0
    //let bestOf = 3  //Best of how many games
    let keepPlaying = true
    let roundMessage = "Message returned after playing a round"
    let result = "First four letter of roundMessage for calculating wins and loses"
    let winner = "The name of the winner"
    

    //Play until bestOf (number of wins) is reached
    while(keepPlaying){
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
        
        //play a round and return who wins
        roundMessage = playRound(playerSelection, computerSelection)

        //update wins, loses, and ties
        result = roundMessage.substring(0,5)
        if(result === "You w"){
            playerWins++
            games++
        }
        else if(result === "You l"){
            computerWins++
            games++
        }
        else if (result === "Tie! "){
            ties++
            games++
        }
        
        //check best of five
        if(playerWins >= bestOf){
            keepPlaying = false
            winner = "Player"
        }
        else if(computerWins >= bestOf){
            keepPlaying = false
            winner = "Computer"
        }

        //|| computerWins < 3
       alert("Round " + games + ", " + roundMessage + ".    (Wins: " + playerWins + " | Loses: " + computerWins + " | Ties: " + ties + ")")
        console.log(" Wins: " + playerWins + " loses: " + computerWins + " Ties: " + ties + " Games: " + (playerWins + computerWins + ties))
    }

    //display final result and ask to play again
    alert("Game over! " + winner + " wins best of " + bestOf)
    keepPlaying = playAgain()
    
    //If true, play another game
    if(keepPlaying){
        game()
    }

}

function playAgain(){    //Validates input
    let playAgain = prompt("Would you like to play again? Y/N")
    playAgain = playAgain.toLowerCase()
    while(true){
        if(playAgain === "y" || playAgain === "yes"){
            return true
            }
        else if(playAgain === "n" || playAgain === "no"){
            return false
            }
        else{
            alert("Error: invalid choice. Please make another selection")
            playAgain = prompt("Would you like to play again? Y/N")
            playAgain = playAgain.toLowerCase()
        }
    }
}
*/