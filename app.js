//***********GLOBAL VARIABLES******************
const number = Math.round((Math.random() * (100 - 0)));

//*******************LOGIC******************
  
//feature 1...Complete
//Ask user to guess a number and then tells them if they were correct, or if they should have guessed higher or lower
function guessOnce() {
  console.log("secret number: " + number);
  let guess = prompt("Guess the secret number?")
//originally i had guess < result but result doesnt have access to guessAgain (scope issue)
  if (guess < number) {alert("Higher");}
  else if (guess > number) {alert("Lower");}
  else if (guess == number) {alert("Correct");}
  //included to ensure my code is running correctly. If i get this, its not running correctly.
  else {alert("Fix Your Code");}
  //adding a return bc function wasnt retruning anything when i called it on line #21
  return guess;
}

//feature 2
//creating a function that allows visitor to guess again until they get it right and terminate after they get it right.
//inputs: 
//output: 
function guessAgain() {
  //store the result of guessOnce() into a variable
  let result = guessOnce();
  //create a loop so that while the result isn't correct it will keep repeating guessOnce() 
  // originally i had === (strictly equal comparing number to integer)
  if (result == number) {console.log("Test");}
  else if (result != "Correct") {
    while (result != "Correct") {
    guessOnce();
    }
  }
}

/* //feature 3 return var; incrment var based off of what (where does this actually take place --line 8); return var
function returnCount() {
  let count = 0
  let result2 = guessAgain();
  while (result2 != "Correct") {
   count++;
  } else {console.log(`Correct! It only took you ${count} guesses!`)}
  return count;
}

//feature 4 (what is the task?)
//create a new reciever array and push the guesses into it
//return it through invoking the function when user chooses correct number
//still need to figire out what to put in the push parenthesis...
//my options are when working with outer (other variables stuff inside another function) 
// 1 --> take it out of the other function and make it a global var
// 2 --> 
function recordGuessInputs () {
let attempts = []
attempts.push("????")
return attempts;
}

//feature 5 
//add a feature that takes in the user’s name at the start of the game
//add seperate prompt prior to first prompt and store it in a vairiable
//add variable into the alert() messages

//feature 6
//asks the user if they want to play again once they’ve made a correct guess

//feature 7 
//Let’s add a feature that records the number of guesses for each unique name 
//that is entered when the game is started. If someone with the same name played 
//before, then when they get a correct answer, it tells them if they beat their previous attempt (less guesses is better). 

 */
//guessOnce();
guessAgain();