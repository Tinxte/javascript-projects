//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  average() {
    let avg = 0;
    for (let i = 0; i < this.scores.length; i++) {
      avg += this.scores[i];
    }
    avg = avg / this.scores.length;
    avg = Math.round(avg * 10) / 10;
    return avg;
  }

  candidateStatus() {
    let score = this.average();
    let status = "";

    if (score >= 90) {
      status = "Accepted";
    } else if (score <= 89 && score >= 80) {
      status = "Reserve";
    } else if (score <= 79 && score >= 70) {
      status = "Probationary";
    } else if (score < 70) {
      status = "Rejected";
    } return status;
  } 
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// console.log(dog.average());

// console.log(bear.candidateStatus())

console.log(`${dog.name} earned an average test score of ${dog.average()}% and has a status of ${dog.candidateStatus()}.`)
console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.candidateStatus()}.`)
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.candidateStatus()}.`)


while (gator.average() < 80) {
    gator.addScore(100);
    console.log(gator.scores);
};

console.log(gator.average());
console.log(gator.candidateStatus());