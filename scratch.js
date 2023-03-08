//******u***** GLOBAL VARIABLES ******************//
const secretNumber = Math.round((Math.random() * (100 - 0)));
let count = 0
let guesses = []
let name = ""
let previousPlayers = {}
let previousBestScore = 0;
let difference = 0
let round = 1;

//******************* LOGIC **********************//

console.log("Secret number: " + secretNumber);

name = prompt("What is you name?");
if (name in previousPlayers == false) {
alert(`Welcome ${name}. This is your first time`)
previousPlayers[`${name}`] = "1st Attempt";
console.log(previousPlayers[`${name}`]);
guessOnce();
}

function guessOnce() {
  
  // use prompt() to retrieve user input
  //store in a variable to avoid repeating the prompt everytime the function runs 
  const input = prompt(`${name}, can you guess the secret number between 0 and 100?`);
  //create variable to track the number of user attempts
  count ++;
  guesses.push(" " + input);
  console.log(input);

  //create conditionals that compare user input to secret number
  //return alert based upon correct or too high/ low
  //if not correct repeat function to allow to keep guessing until the user gets it correct (ending the function)
    if ((input) == secretNumber) {
      previousPlayers[`${name}`] = count;
      alert (`That\'s Correct ${name}. You got it in ${count} attempts. Play again to beat your score.`);
      alert(`${name}, your guesses for the round were: ${guesses}`);
      let playAgain = prompt(`${name}, Do you want to play again? Y or N`)
      if (playAgain.toUpperCase() == "Y") {
        goAgain();
      }
        else {return;}
    }
    else if ((input) > secretNumber) {
      alert(`Sorry ${name}, guess lower`);
      guessOnce();
    }
    else if ((input) < secretNumber) {
      alert(`Sorry ${name}, guess higher`);
      guessOnce();
    }
    else {
      return alert(`${name}, please input a valid number`);
    }
    return;
}

function goAgain() {

  for (let i = 2; i < Infinity; i++) {
    round = i;
    secretNumber${i} = Math.round((Math.random() * (100 - 0)));
    console.log("Secret number: " + secretNumber${i});

    let input = prompt(`${name}, can you guess the secret number between 0 and 100?`);
    
    count${i};
    guesses${i}.push(" " + input);
    console.log(input);
    previousBestScore = previousPlayers[`${name}`]

    if ((input) == newSecretNumber) {
      if (count${i} < previousBestScore) {
        difference = previousBestScore - count${i};
        alert (`That\'s Correct ${name}, You got it in ${count${i}} attempts. This beats your previous best score by ${difference} fewer guesses`);
        previousPlayers[`${name}`] = count${i};
        console.log("Best Score adjusted to: " + previousPlayers[`${name}`]);
      }
      else if (count${i} > previousBestScore) {
        difference = count${i} - previousBestScore;
        alert (`That\'s Correct ${name}, You got it in ${count${i}} attempts. You guessed ${difference} more guesses than your previous best score`);
        }
      else {
          alert (`That\'s Correct ${name}, You got it in ${count${i}} attempts. This ties your previous best score.`);
      }
      alert(`${name}, your guesses for round${i} were: ${guesses${i}}`);
      let playAgain = prompt(`${name}, Do you want to play again? Y or N`)
      if (playAgain.toUpperCase() == "Y") {
        goAgain();
      }
      else {
        return;
      }
    }

    else if ((input) > newSecretNumber) {
      alert(`Sorry ${name}, guess lower`);
      goAgain();
    }
    else if ((input) < newSecretNumber) {
      alert(`Sorry ${name}, guess higher`);
      goAgain();
    }
    else {
      return alert(`${name}, please input a valid number`);
    }
  }
}

//****************** FUNCTION INVOKATION **************//
guessOnce();

//****************** NOTES **************//

//feature 7 
//Let’s add a feature that records the number of guesses for each unique name 
//that is entered when the game is started. If someone with the same name played 
//before, then when they get a correct answer, it tells them if they beat their previous attempt (less guesses is better). 

 
//guessOnce();

////Issues I ran into while doing this project////
// 1 - trying to compare strings (users input) to numbers (secret number)
// 2 - When inserting a callback function into another function ensuring that I actually invoke the callback inside the 
// cont - functions declaration or the callback won't run
// 3 - when I use expression or function it failed but when I store the prompt (users input) into a variable and run it, it works.
//cont it worked bc u cant just invoke the function (callback) and the just say if (callback == secretNumber). You have to compare the 
//cont secretNumber to the callback's result which HAS TO BE STORED IN A VARIABLE or you can use it in another step. If you want to use something
// eslewhere (not your current step) you have to store it in a variable to store the result (otherwise you are just running the function etc.).
// 4 - The same prinicple in #3 (storing results into a variable) is similar to this. It wouldn't work bc my first function which i was later using as
// cont - a callback for another function didn't return anything. I only had it storeing a variable for the prompt. However, if Im going to use the function
// later (what callbacks are for) IT MUST RETURN THE VALUE.
// 5 - callback is not a function
// 6 - dont need to use callbacks if u already know what u want (i orginally had created callbacks (seperate functions) for the prompt to get user input
// cont - as well as the guess again function. The intention was to make it simpler by reducing the complexity of my functions --> ionstead of creating 1 
// cont - larger function w/ 8 tasks..create 3 seperate functions with 2 tasks and just use them as callbacks. However, in the end this just made it more confusing
// cont - due to the callbacks)
// 7 - when I replay when same person (feature 7) it did't generate a new number (bc it was only done when the page refreshes and it didn't reset the count 
// cont - (number of guesses/ attempts))
// 8 - It only works for 2 rounds..to make it more i would need to some how create a loop that i++ each time i run play again.


//Takeaways/ Lessons learned//
// 1 - Store results into variable if going to use/ need them elsewhere
// 2 - Functions need to return something especially if going to be used elsewhere (callbacks etc). When we use return in a function it 
// cont - "ends function execution and specifies a value to be returned to the function caller." (even though it returns a value to the function caller
// cont - you still have to store that return into a variable if you want to use it elsewhere (#1 above))
// 3 - When comparing pay attention to types
// 4 - When using callbacks dont forget to invoke the callback inside the function declaration
// 5 - When to use callbacks? only use callbacks when you need to; callbacks are useful in situations 
// cont. - wherein a value cannot be returned immediately for whatever reason (perhaps it is just a long running operation which is better 
// cont. - performed asynchronously).
// 6 - When to use parameters? Scope limitations or you dont know what the input (name (function) or value) on the function is going to be
// 7 - use console.logs() everywhere to resolve issues/ errors 

