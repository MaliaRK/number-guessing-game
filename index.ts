#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate random number
// 2) user input by guessing number
// 3)compare user input and random number and give result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {message : "Please guess a number between 1 to 6: ",
    type: "number",
    name: "userGuessedNumber",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("congratulations! You guessed a right number.");
    
} else {
    console.log("Oops! you guessed wrong number");
    
}
