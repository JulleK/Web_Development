let max = parseInt(prompt("Enter the maximum number"));
while (!max || max < 0) {
    max = parseInt(prompt("Enter a valid number!"));
}

const hiddenNum = Math.floor(Math.random() * max) + 1;
let guess = null;
let howManyTries = 0;
let msg = "Guess a number";

while (guess !== hiddenNum) {
    guess = parseInt(prompt(msg));
    howManyTries++;
    if (guess > hiddenNum) {
        msg = "Too big, try again";
    }
    else if (guess < hiddenNum) {
        msg = "too small, try again";
    }
    else {
        msg = "enter a valid number!";
    }
}
console.log(`YOU WON! The number was ${hiddenNum}, it took you ${howManyTries} tries to guess it!`);