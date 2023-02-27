game()

function game(){   
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    let games = 0
    let bestOf = 3  //Best of how many games
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

function playRound(playerSelection, computerSelection){
    let outcome
    
    //make inputs lower case to avoid case sensitivity
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    

    // Tie conditions
    if (playerSelection === computerSelection){
        result = "Tie! " + playerSelection + " ties with " + computerSelection
    }
    
    //Player win conditions
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        result = "You win! Rock beats Scissors"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        result = "You win! Paper covers Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        result = "You win! Scissors cut Paper"
    }
    
    //Player lose conditions
    else if(playerSelection === "rock" && computerSelection === "paper"){
        result = "You lose! Paper covers Rock"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        result = "You lose! Scissors cut Paper"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        result = "You lose! Rock beats Scissors"
    }
    else{
    console.log("Invalid game outcome")
    }
    return result
}

function getPlayerChoice(){
    
    let playerChoice = prompt("Rock, Paper, or Scissors?")
    playerChoice = playerChoice.toLowerCase()
    
    while(true){
        if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){ //
            return playerChoice
        }
        else{
            alert("Error: invalid choice. Please make another selection")
            playerChoice = prompt("Rock, Paper, or Scissors?")
            playerChoice = playerChoice.toLowerCase()
        }
    }
}

function getComputerChoice(){
    //generate a random computer choice. 1 for rock, 2 for paper, 3 for scissors.   
    //generate random number between 1 and 3. Formula is: Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice
    switch(randomNumber){
        case 1:
            computerChoice = "Rock"
            break;
        case 2: 
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissors"
            break;
        default:
            computerChoice = "Invalid"
            alert("Error: invalid computer choice")
            break;
    }
    return computerChoice
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