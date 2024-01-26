let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.



//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
 
if ((String(num)).includes(".")) {
    console.log(String(num).length-1);
} else { console.log(String(num.length));
}