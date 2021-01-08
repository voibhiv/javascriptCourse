// ===================================================================================================================

// LECTURE: Functions

// // 1. Write a function called 'describeCountry' which takes three parameters:
// // 'country', 'population' and 'capitalCity'. Based on this input, the
// // function returns a string with this format: 'Finland has 6 million people and its
// // capital city is Helsinki'

// function describeCountry (country, population, capitalCity) {
//     const textContent = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return textContent;
// }

// // 2. Call this function 3 times, with input data for 3 different countries. Store the
// // returned values in 3 different variables, and log them to the console

// const country1 = describeCountry('Brazil', 209.5, 'Brasilia');
// const country2 = describeCountry('Canada', 37.59, 'Ottawa');
// const country3 = describeCountry('Argentina', 44.49, 'Buenos Aires');

// console.log(country1);
// console.log(country2);
// console.log(country3);

// ===================================================================================================================

// LECTURE: Function Declarations vs. Expressions

// // 1. The world population is 7900 million people. Create a function declaration
// // called 'percentageOfWorld1' which receives a 'population' value, and
// // returns the percentage of the world population that the given population
// // represents. For example, China has 1441 million people, so it's about 18.2% of
// // the world population

// // 2. To calculate the percentage, divide the given 'population' value by 7900
// // and then multiply by 100

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const chinaPopulation1 = percentageOfWorld1(1441);
// const BrazilPopulation1 = percentageOfWorld1(209.5);
// const CanadaPopulation1 = percentageOfWorld1(37.59);

// // 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// // store the results into variables, and log them to the console

// console.log(`China has 1441 million people, so it's about ${chinaPopulation1} of the world population `);
// console.log(`Brazil has 209.5 million people, so it's about ${BrazilPopulation1} of the world population `);
// console.log(`Canada has 37.59 million people, so it's about ${CanadaPopulation1} of the world population `);

// // 4. Create a function expression which does the exact same thing, called
// // 'percentageOfWorld2', and also call it with 3 country populations (can be
// // the same populations)

// const percentageOfWorld2 = function(population) {
//     return (population / 7900) * 100;
// }

// const chinaPopulation2 = percentageOfWorld1(1441);
// const brazilPopulation2 = percentageOfWorld1(209.5);
// const canadaPopulation2 = percentageOfWorld1(37.59);

// console.log(`China has 1441 million people, so it's about ${chinaPopulation2} of the world population `);
// console.log(`Brazil has 209.5 million people, so it's about ${brazilPopulation2} of the world population `);
// console.log(`Canada has 37.59 million people, so it's about ${canadaPopulation2} of the world population `);

// ===================================================================================================================

// LECTURE: Arrow Functions

// // 1. Recreate the last assignment, but this time create an arrow function called
// // 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => {
//     return (population / 7900) * 100;
// }

// const chinaPopulation = percentageOfWorld3(1441);
// const brazilPopulation = percentageOfWorld3(209.5);
// const canadaPopulation = percentageOfWorld3(37.59);

// console.log(`China has 1441 million people, so it's about ${chinaPopulation} of the world population `);
// console.log(`Brazil has 209.5 million people, so it's about ${brazilPopulation} of the world population `);
// console.log(`Canada has 37.59 million people, so it's about ${canadaPopulation} of the world population `);

// ===================================================================================================================

// LECTURE: Functions Calling Other Functions

// // 1. Create a function called 'describePopulation'. Use the function type you
// // like the most. This function takes in two arguments: 'country' and
// // 'population', and returns a string like this: 'China has 1441 million people,
// // which is about 18.2% of the world.'

// // 2. To calculate the percentage, 'describePopulation' call the
// // 'percentageOfWorld1' you created earlier

// const percentageOfWorld = function(population) {
//     return (population / 7900) * 100;
// }

// const describePopulation = (country, population) => {
//     const percentagePopulation = percentageOfWorld(population);
//     return `${country} has ${population} million people, which is about ${percentagePopulation} of the world.`;
// }

// // 3. Call 'describePopulation' with data for 3 countries of your choice

// const chinaPopulation = describePopulation('China',1441);
// const brazilPopulation =  describePopulation('Brazil',209.5);
// const canadaPopulation =  describePopulation('Canada',37.59);

// console.log(chinaPopulation);
// console.log(brazilPopulation);
// console.log(canadaPopulation);

// ===================================================================================================================