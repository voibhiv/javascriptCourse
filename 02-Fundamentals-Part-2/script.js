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

// AULA 35. Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// ===================================================================================================================

// AULA 36. Functions Calling Other Functions

// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applesPieces = cutFruitPieces (apples);
//     const orangesPieces = cutFruitPieces (oranges);
//     const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// ===================================================================================================================

// AULA 37. Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} year`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// ===================================================================================================================

// AULA 39. Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// //mudando valor especifico
// friends[2] = 'Jay';
// console.log(friends);

// // friends = ['Bob', 'Alice'];

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'Teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const getAges = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(getAges);

// ===================================================================================================================

// AULA 40. Basic Array Operations (Methods)

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// // friends.push('Jay');

// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();  // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// // Not coersion
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// ===================================================================================================================

// AULA 42. Introduction to Objects

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991, 
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// // Sintaxe Object
// const jonas = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// ===================================================================================================================

// AULA 43. Dot vs. Bracket Notation

// const jonas = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request ! Choose between firstName, lastName, age, job and friends");
// }

// // Adicionando valores
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // Jonas has 3 friends, and his best friend is called Michael
// console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is ${jonas['friends'][0]}`);

// ===================================================================================================================

// AULA 44. Object Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // Method
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     //Method
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} drivers license `;
//     }

// }

// // Challenge 
// // "Jonas is a 46-year old teacher, and he has a/no drivers license"

// console.log(jonas.getSummary());

// ===================================================================================================================

// AULA 46. Iteration: The for Loop

// // console.log('Lifting weights repetetion 1');
// // console.log('Lifting weights repetetion 2');
// // console.log('Lifting weights repetetion 3');
// // console.log('Lifting weights repetetion 4');
// // console.log('Lifting weights repetetion 5');
// // console.log('Lifting weights repetetion 6');
// // console.log('Lifting weights repetetion 7');
// // console.log('Lifting weights repetetion 8');
// // console.log('Lifting weights repetetion 9');
// // console.log('Lifting weights repetetion 10');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetetion ${rep}`);
// }

// ===================================================================================================================

// AULA 47. Looping Arrays, Breaking and Continuing

// const jonas = [
//     'Jonas', 
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     // Reaing from jonas array
//     console.log(jonas[i]);

//     //Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let x = 0; x < years.length; x++) {
//     ages[x] = 2037 - years[x];
// }

// console.log(ages);

// //continue and break 
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number')  break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// ===================================================================================================================

// AULA 48. Looping Backwards and Loops in Loops

// const jonas = [
//     'Jonas', 
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];


// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }

// }

// ===================================================================================================================

// AULA 49. The while Loop

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weight repetition ${rep}`);
// // }

// let rep = 1; 

// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// ===================================================================================================================
