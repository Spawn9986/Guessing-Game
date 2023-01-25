// Generate random number between 1 - 100 which we will use as our secret number
function createRandomNumber() {
  const number = Math.round((Math.random() * (100 - 0)))
  console.log("secret number: " + number);
  return number;
}

//Prompt visitor to guess secret # and store input into a variable
function guessOnce() {
  let guess = prompt("Can you guess the secret number?")
  // pulling number from another function
  if (guess < createRandomNumber.number) {alert("Higher");}
  else if (guess > createRandomNumber.number) {alert("Lower");}
  else if (guess == createRandomNumber.number) {alert("Correct");}
}

//creating a function that allows visitor to guess again until they get it right.
function guessAgain() {
  //store the result of guessOnce() into a variable
  const result = guessOnce();
  //create a loop so that while the result isn't correct it will keep repeating guessOnce() 
  while (result != "Correct") {
    guessOnce();
  }
}

// invoke createRandomNumber seperately so that it maintains the same number instead of creating another random # after each failed attempt
createRandomNumber();
guessAgain();