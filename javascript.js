const playerSelection = "Rock"

game()

function game(){   
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    let games = 0
    let roundMessage = "Message returned after playing a round"
    let result = "First four letter of roundMessage for calculating wins and loses"
    

    //Play best of five games
    while(games < 5){
        //get player and computer choices
        const computerSelection = getComputerChoice()
        
        //play a round and return who wins
        roundMessage = playRound(playerSelection, computerSelection)

        //update wins/loses if the game wasn't a tie
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
        }
        
        //check best of five
        
        console.log(roundMessage + "                 Games: " + games + " Ties: " + ties)
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
        result - "Error: invalid choice"
    }
    return result
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, or Scissors?")
    return playerChoice
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