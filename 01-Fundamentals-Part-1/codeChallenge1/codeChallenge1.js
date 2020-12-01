// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

//Mass
let markMass = 78;
let johnMass = 92;
//Height
let markHeight = 1.69;
let johnHeight = 1.95;
// aux variable
let markHigherBMI;

let markBMI = markMass / markHeight ** 2; // mass / (height * height)
let johnBMI = johnMass / johnHeight ** 2; // mass / (height * height)

markHigherBMI = markBMI > johnBMI;

console.log("O BMI de mark é maior que de John?: " + markHigherBMI);

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

//Variable reset 
markMass = "";
johnMass = "";
markHeight = "";
johnHeight = "";
markHigherBMI = "";
markBMI = "";
jonhBMI = "";
markHigherBMI = "";
//Mass
markMass = 95;
johnMass = 85;
//Height
markHeight = 1.88;
johnHeight = 1.76;
// aux variable
markHigherBMI;

markBMI = markMass / markHeight ** 2; // mass / (height * height)
johnBMI = johnMass / johnHeight ** 2; // mass / (height * height)

markHigherBMI = markBMI > johnBMI;

console.log("O BMI de mark é maior que de John?: " + markHigherBMI); 