let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food.split(",").sort()
equipment.split(",").sort()
pets.split(",").sort()
sleepAids.split(",").sort()

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [food, equipment, pets, sleepAids];

console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');

let question = "Please select a cabinet from cabinet numbers 0-3. ";
let cabinetAnswer = "";

cabinetAnswer = Number(input.question(question));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

console.log(`Cabinet ${cabinetAnswer} contents: ${cargoHold[cabinetAnswer]}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let itemQuestion = "Please select an item from the cabinet. ";
let itemAnswer = "";

itemAnswer = input.question(itemQuestion);

if (cargoHold[cabinetAnswer].includes(itemAnswer) === true) {
    console.log(`Cabinet ${cabinetAnswer} DOES contain ${itemAnswer}.`)
} else console.log(`Cabinet ${cabinetAnswer} DOES NOT contain ${itemAnswer}.`);