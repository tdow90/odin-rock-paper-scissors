// Function that get random choice from a computer to be played later. 
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scisors'];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

// This function actually plays each round, players input, vs the computers. 
function playRound(play1, play2) {
     if (play1 == 'rock' && play2 == 'scisors'){
         result = 'win';
     }
     else if (play1 == 'scisors' && play2 == 'paper'){
     result = 'win';
     }
     else if (play1 == 'paper' && play2 == 'rock'){
         result = 'win';
     }
     else if (play1 == play2) {
         result = 'tie';
     }
     else {
        result = 'lose';
     }
     if (result == 'win') {
        yourScore++;
        const resultMessage = document.querySelector('#result');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = 'You win, ' + play1 + ' beats ' + play2 + "!";
        resultMessage.appendChild(message);
    }
    else if (result == 'lose') {
        computerScore++;
        const resultMessage = document.querySelector('#result');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = 'You lose, ' + play2 + ' beats ' + play1 + "!";
        resultMessage.appendChild(message);
    }
    else {
        const resultMessage = document.querySelector('#result');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = 'Its a tie, play again.';
        resultMessage.appendChild(message);
    }
    const scoreMessage = document.querySelector('#result');

    const score = document.createElement('p');
    score.classList.add('score');
    score.textContent = 'Your Score: ' + yourScore + ' Computer Score: ' + computerScore ;

    scoreMessage.appendChild(score);

    }
    let yourScore = 0;
    let computerScore = 0;
// Event listener that plays when you click Rock button
const playRock = document.querySelector('#rock');
playRock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
})

// Event listener that plays when you click paper button
const playPaper = document.querySelector('#paper');
playPaper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
        
})

// Event listener that plays when you click scisors button
const playScisors = document.querySelector('#scisors');
playScisors.addEventListener('click', () => {
    playRound("scisors", getComputerChoice());
        
})