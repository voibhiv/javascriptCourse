// =================================================================================================================== //
//AULA 10 - VALUES AND VARIABLES

// let js = "amazing";
// (js === "amazing") ? alert("JS is FUN!") : "";
// console.log(40 + 8 + 23 - 10);

// =================================================================================================================== //
//AULA 12 - DATA TYPES
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2001;
// console.log(typeof year);

// =================================================================================================================== //
//AULA 13 - LET, CONST AND VAR

// let age = 30; // usar sempre
// const birthYear = 2001; // ocasional - variavel unica
// var dogAge = 7; // nunca usar 

// =================================================================================================================== //
//AULA 14 - BASIC OPERATORS

//Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 é equivalent a 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// //Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, <=, >=, =
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// =================================================================================================================== //
//AULA 15 - OPERATOR PRECEDENCE

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// =================================================================================================================== //
// AULA 17 - STRING AND TEMPLATE LITERALS

// const firstName = "Jonas";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037;

// let jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// // TEMPLATE LITERALS

// jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonas);

// =================================================================================================================== //
// AULA 18 - IF ELSE / STATEMENT

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving license 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// =================================================================================================================== //
// AULA 20 - TYPE CONVERSION AND COERCION

// //Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear));//Converte em valor numérico
// console.log(inputYear + 18); 

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log((23), 23);

// //Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// =================================================================================================================== //

// AULA 21 TRUTHY AND FALSY VALUES

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;

// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log("Height is UNDEFINED");
// }

// =================================================================================================================== //

//AULA 22. Equality Operators: == vs. ===

// const age = 18; 
// //nao faz coersao de valores
// if (age === 18) console.log('You just become an adult :D');
// //faz coersao de valores
// // if (age == 18) console.log('You just become an adult :D');
// //7
// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 7) { // '7' == 7
//     console.log("Cool! 7 is an amazing number!");
// } else if (favourite == 23) {
//     console.log("23 is also a cool number!");
// }  else if (favourite == 9) {
//     console.log("9 is also a cool number!");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// =================================================================================================================== //