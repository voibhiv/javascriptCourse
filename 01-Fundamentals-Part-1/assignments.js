// =================================================================================================================== //
//LECTURE: Values and Variables

// // 1. Declare variables called 'country', 'continent' and 'population' and
// // assign their values according to your own country(population in millions)

// let country = "Brazil";
// let continent = "American continent";
// let population = "211.8 millions";

// // 2. Log their values to the console

// console.log(country);
// console.log(continent);
// console.log(population);

// =================================================================================================================== //
//LECTURE: Data Types

// // 1. Declare a variable called 'isIsland' and set its value according to your
// // country.The variable should hold a Boolean value.Also declare a variable
// // 'language', but don't assign it any value yet

// let country = "Brazil";
// let continent = "American continent";
// let population = "211.8 millions";
// let isIsland = false;
// let language = "Portuguese";

// // 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// // to the console

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// =================================================================================================================== //
//LECTURE: Let, Const, Var

// // 1. Set the value of 'language' to the language spoken where you live(some
// // countries have multiple languages, but just choose one)

// let language = "Brazillian Portuguese";

// // 2. Think about which variables should be const variables (which values will never
// // change, and which might change ?).Then, change these variables to const.

// "R -> Variaveis const servem efetivamente para setar valores unicos"

// // 3. Try to change one of the changed variables now, and observe what happens

// "R-> Erro"

// =================================================================================================================== //
//LECTURE: Basic Operators

// // 1. If your country split in half, and each half would contain half the population,
// // then how many people would live in each half ?

// let totalPopulationBrazil = 209500000; //2020
// console.log("Total Population Per Half: " + totalPopulationBrazil / 2);

// // 2. Increase the population of your country by 1 and log the result to the console

// console.log(totalPopulationBrazil + 1);

// // 3. Finland has a population of 6 million. Does your country have more people than
// // Finland?

// let totalPopulationFinland = 6000000;
// let isBigger = totalPopulationBrazil > totalPopulationFinland;
// console.log("Is brazil bigger than Finland?: " + isBigger);

// // 4. The average population of a country is 33 million people. Does your country
// // have less people than the average country?

// let countryDates = 33000000;
// isBigger = totalPopulationBrazil > countryDates;
// console.log("Is brazil bigger than country?: " + isBigger);

// // 5. Based on the variables you created, create a new variable 'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million
// // people speak portuguese

// let description = "Brazil is in America, and its " + totalPopulationBrazil + " million people speak portuguese";

// console.log(description);

// =================================================================================================================== // 
//LECTURE: Strings and Template Literals


// // 1. Recreate the 'description' variable from the last assignment, this time
// // using the template literal syntax

// let totalPopulationBrazil = 209500000; //2020
// console.log(`Total Population Per Half: ${(totalPopulationBrazil / 2)}`);
// console.log(totalPopulationBrazil + 1);


// let totalPopulationFinland = 6000000;
// let isBigger = totalPopulationBrazil > totalPopulationFinland;
// console.log(`Is brazil bigger than Finland?: ${isBigger}`);

// let countryDates = 33000000;
// isBigger = totalPopulationBrazil > countryDates;
// console.log(`Is brazil bigger than country?: ${isBigger}`);

// let description = `Brazil is in America, and its ${totalPopulationBrazil} million people speak portuguese`;

// console.log(description);

// =================================================================================================================== // 
// LECTURE: Taking Decisions: if / else Statements

// // 1. If your country's population is greater that 33 million, log a string like this to the
// // console: 'Portugal's population is above average'. Otherwise, log a string like
// // 'Portugal's population is 22 million below average' (the 22 is the average of 33
// // minus the country's population)

// let totalPopulationBrazil = 209500000; //2020

// if (totalPopulationBrazil > 33000000) {
//     console.log(`A população Brasileira está acima da média`);
// } else {
//     let populationAverage = 33000000 - totalPopulationBrazil;
//     console.log(`A população Brasileira é ${populationAverage} abaixo da média`);
// }

// =================================================================================================================== // 
// LECTURE: Type Conversion and Coercion

// 1. Predict the result of these 5 operations without executing them:

// '9' - '5'; //4
// '19' - '13' + '17';//617
// '19' - '13' + 17;//23
// '123' < 57;//FALSE
// 5 + 6 + '4' + 9 - 4 - 2;//1143

// 2. Execute the operations to check if you were right

// =================================================================================================================== // 
