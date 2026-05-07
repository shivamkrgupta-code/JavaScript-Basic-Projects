//generate random number
let RandomNumber = (parseInt(Math.random() * 100 + 1 ));


const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuesses =[]
let numOfGuesses = 1

let playGame = true

if(playGame){ 
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= (parseInt(userinput.value)) 
        console.log(guess);
        validateguess(guess)
    })
}


function validateguess(guess){
    // to check if the guess is a number and between 1 and 100 and also if num of guesses has crossed limit or not
    if(isNaN(guess) || guess < 1 || guess >100){
        alert('Please enter a valid number between 1 and 100')
    }else{
        previousGuesses.push(guess)
        if(numOfGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${RandomNumber}`)
            EndGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
// to check if the guess is correct, too low or too high
    if(guess === RandomNumber){
        displayMessage(`Congratulations! You guessed it right!`)
        EndGame()
    }else if(guess < RandomNumber){
        displayMessage(`Your guess is too low!`)
    }else if(guess > RandomNumber){
        displayMessage(`Your guess is too high!`)
    }
}

function displayGuess(guess){
// to display the previous guesses, clean  values, update array and number of guesses
    userinput.value = "" 
    guessSlot.innerHTML += `${guess} , `;
    numOfGuesses++;
    remaining.innerHTML = ` ${11 - numOfGuesses} `
}

function displayMessage(message){
// to display a message to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function EndGame(){
    // to end the game and disable the input field and submit button
    userinput.value=''// value got cleaned
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame">Start new Game</h2>';
    startOver.appendChild(p)
    playGame= false
    newGame();
    
}

function newGame(){
    // to start a new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    RandomNumber = parseInt(Math.random() * 100 + 1 );
    previousGuesses =[]//reset the values
    numOfGuesses=1
    guessSlot.innerHTML=''
    remaining.innerHTML = ` ${11 - numOfGuesses} `;
    userinput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame= true;

    });
}

