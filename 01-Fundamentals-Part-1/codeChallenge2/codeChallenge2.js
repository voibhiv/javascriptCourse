// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

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

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (markBMI > johnBMI) {
    console.log(`O BMI de Mark de: ${markBMI} é maior que o de John de : ${johnBMI}`);
} else if (johnBMI > markBMI) {
    console.log(`O BMI de Mark de: ${markBMI} é menor que o de John de : ${johnBMI}`);
} else {
    console.log(`O BMI de Mark de: ${markBMI} é igual ao de John de : ${johnBMI}`);
}


