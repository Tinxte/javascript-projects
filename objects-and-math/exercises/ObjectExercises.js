let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
}

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
}

let alien = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
}


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
alien["astronautID"] = 5;

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, alien];

// Print out the relevant information about each animal.

function crewReports(animal) {
   for (animal in crew) {
      console.log(`${crew[animal].name} is a ${crew[animal].species}. They are ${crew[animal].age} years old and ${crew[animal].mass} kilograms. Their ID is ${crew[animal].astronautID}.'`)
   }
}

crewReports(alien);
// Start an animal race! 

// note from class: (push to a new, empty results array when doing the race)