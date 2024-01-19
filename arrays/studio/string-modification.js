const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

firstSlice = str.slice(0, 3);
secondSlice = str.slice(3, 10);
newStr = secondSlice + firstSlice;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Did you know that ${str} in pseudo-pig latin is ${newStr}?`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

// declare variables
let question; 
let userAnswer;
let answer;

question = "Try it! How many letters do you want to move to the end of LaunchCode? "
userAnswer = ""

// user query
userAnswer = input.question(question);

// converts user answer from string to number
userAnswer = Number(userAnswer);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userAnswer > 9) {
    userAnswer = 3
    firstSlice = str.slice(0, (userAnswer));
    secondSlice = str.slice(userAnswer, 10);
    newStr = secondSlice + firstSlice;
    console.log(`${newStr} ERROR!\nNumber exceeds word length.`);
} else {
firstSlice = str.slice(0, (userAnswer));
secondSlice = str.slice(userAnswer, 10);
newStr = secondSlice + firstSlice;
console.log(newStr);
}