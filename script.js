// Function that get random choice from a computer to be played later. 
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scisors'];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

// This function actually plays each round, players input, vs the computers. 
function playRound(play1, play2) {
    play1 = play1.toLowerCase();
     if (play1 == 'rock' && play2 == 'scisors'){
         result = true;
     }
     else if (play1 == 'scisors' && play2 == 'paper'){
     result = true;
     }
     else if (play1 == 'paper' && play2 == 'rock'){
         result = true;
     }
     else if( play1 == play2) {
         return console.log('Its a tie, play again');
     }
     else {
         result = false;
     }
 
     if(result == true) {
         console.log('You win, ' + play1 + ' beats ' + play2 + "!");
     }
     else {
         console.log('You lose, ' + play2 + ' beats ' + play1 + "!");
     }
     
    }
    
// Game play function, input the number of games you want to play.
function game(numOfGames) {
    let result;
    let i = 1;
    while (i <= numOfGames) {
        const playerSelection = prompt('Whats your play?');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }
}
console.log(game(5));