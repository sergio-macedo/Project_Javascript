let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


let generateTarget =  () => {
       return Math.floor(Math.random() * 9 + 1);
};




let compareGuesses = (humanGuess, pcGuess, target) => {
    
    let humanScore = Math.abs(humanGuess - target );
    let pcScore = Math.abs(pcGuess - target);

    if ( humanScore <= pcScore ) {
       // humanScore += 1
        return true;
       
    } else {
       //computerScore += 1
        return false;
    }
}; 

let updateScore = winner => {
    if (winner === 'human') {
       humanScore += 1;
} else if (winner === 'computer') {
    computerScore += 1;
} else {
    return console.log(' choose a number between 1 and 9')
}
};

let advanceRound = () => {
    currentRoundNumber += 1;
}
