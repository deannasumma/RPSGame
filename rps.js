// Get computer's choice
function getComputerChoice() {
    const compchoices = ['Rock', 'Paper', 'Scissors'];
    const randomnum = Math.floor(Math.random() * 3);
        return compchoices[randomnum];
}

// Single round
function play(playerSelection, computerSelection) {
    // Case insensitive responses
    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    // Rules
    const rules = {
        'Scissors' : 'Paper',
        'Paper' : 'Rock',
        'Rock' : 'Scissors'
    }
    // Responses to Rules: Win vs. Loss
    if (rules[playerChoice] === computerSelection) {
        return 'You Win! ${playerChoice} beats ${computerSelection}.'; }
    else if (rules[playerChoice] !== computerSelection) {
        return 'You Lose! ${computerSelection} beats ${playerChoice}.' }
    // Tie
    else {
        return 'You Tied!'
    }

    // Single round game
    // const computerSelection = getComputerChoice()
    // const playerSelection = prompt('Choose rock, paper or scissors: ')
    // alert(play(playerSelection, computerSelection))

// 5 Rounds
function game() {
    let playerScore = 0
    let compScore = 0

    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = prompt('Choose rock, paper or scissors: ')
        const result = play(playerSelection, computerSelection)
        alert(result)

        //Keeping score
        if (result.startsWith('You Win!')) {
            playerScore++
        }
        else if (result.startsWith('You Lose!')) {
            compScore++
        }
    }
}
// Final score & winner
if (playerScore > compScore) {
    alert('You won RPS!! Score: ${playerScore} to ${computerScore}')
}
else if (playerScore < compScore) {
    alert ('You lost :( Score: ${playerScore} to ${computerScore}')
}
else {
    alert('You and the computer tied! Score: Score: ${playerScore} to ${computerScore}')
}
game()
