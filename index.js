function getRandomNumber(max) {
    return Math.ceil(Math.random()* max)
}

function getRandomNumbers() {
    const numbers = [];

   for (let i = 0; i < numbersToguess; i++){
       numbers.push(getRandomNumber(100));
   }
   return numbers;
}

function getNumberToGuess() {
    return Number(prompt("How many numbers would you like to guess?"));


}

function showNumbersToUser(){
    alert(`Here are some randomnumbers: $(numbers.join("-"))`);
}

function getUserGuesses() {
    let guesses = 0;
    for(let i = 0; i< numbersToguess; i++){
        const number = Number(prompt(`Enter number ${i + 1}`));
        if (numbers[i] == number) {
            guess += 1
        }
    }
    console.log(`You guessed ${guesses} of them`);
}

//code starts running here
const numbersToguess = getNumberToGuess();
const numbers = getRandomNumbers();
showNumbersToUser();
setTimeout(getUserGuesses,5000)