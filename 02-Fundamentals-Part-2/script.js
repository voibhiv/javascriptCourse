// ===================================================================================================================

// AULA 32. Activating Strict Mode

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;
// ===================================================================================================================

// AULA 33. Functions

// function logger() {
//     console.log('My name is Jonas');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ===================================================================================================================

// AULA 34. Function Declarations vs. Expressions

// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear; 
// }

// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;  
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// ===================================================================================================================