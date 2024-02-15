//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, food){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.faveFood = food;
   }
}

let fox = new Astronaut('Fox', 7, 12, 'Strawberries');

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.