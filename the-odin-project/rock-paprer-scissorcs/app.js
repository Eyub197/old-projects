const choice = ["rock", "paper", "scissors"]

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choice.length) 
    let computerChoice = choice[randomIndex]
    return computerChoice
}

let getPlayerChoice = () => {
    let choice = prompt("Choose rock paper or scissors :")
    return choice
}

let rules = (computerChoice = getComputerChoice() , playerChoice = getPlayerChoice()) => {
    let message
    if(
    (computerChoice === "rock" && playerChoice === "scissors") || 
    (computerChoice === "paper" &&  playerChoice === "rock")   ||
    (computerChoice === "scissors" && playerChoice === "paper")){
        message = "You lost"
    } else if (computerChoice === playerChoice){
        message = "Tie"
    }else{
        message = "You win"
    }
    
    return message
}

let determinateWinner = (computerChoice = getComputerChoice(), playerChoice = getPlayerChoice()) => {
    let result = rules(computerChoice, playerChoice)
    let winner

    if(result === "You lost"){
        winner = "computer"
        return winner
    }else if (result === "Tie"){
         winner = "tie"
         return winner}
    else{
        winner = "you"
        return winner
    }

    
}

let playUntilYouExit = () => {
    console.log("Welcome to my game, this mode you will play until you enter exit")

    let computerWins = 0
    let playerWins = 0
    let tie = 0
    let score = `Wins: ${playerWins} ties: ${tie} loses: ${computerWins}`
    let input = prompt("Enter rock paper scissors or 'exit': ")

    while(input != "exit"){
        if(input === "exit"){break}

        let computerChoice = getComputerChoice();
        let playerChoice = input;
        let winner = determinateWinner(computerChoice, playerChoice)

        if(winner === "computer"){
            computerWins++
            console.log(`The computer won ${computerChoice} beats ${playerChoice}`)
        } else if(winner === "tie"){
            tie++
            console.log(`TIE`)
            console.log(score)
        } else {
            playerWins++
            console.log(`The player won ${playerChoice} beats ${computerChoice}`)
        }

        score = `Wins: ${playerWins} ties: ${tie} loses: ${computerWins}`
        console.log(score)

       input = prompt("Enter rock paper scissors or 'exit': ")
    }

    if(input === "exit"){
        console.log("Have a great day my friend")
    }
}

playUntilYouExit() 