// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
// }


function reverse(str) {
   let reversedLettersArray = str.split('').reverse().join('');
   return reversedLettersArray;
}

let test = "Word";

console.log(reverse(test));

//Test successful!
