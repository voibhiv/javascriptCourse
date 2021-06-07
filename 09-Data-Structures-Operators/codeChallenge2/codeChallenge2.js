'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Get array scored and break him
let scoredPlayer = Object.entries(game.scored);

console.log('-------GOALS-------');
// For of to destructuring array and show placar scores
for (const [key, player] of scoredPlayer) {
  console.log(`Goal ${Number.parseInt(key) + 1}: ${player}`);
}
console.log('-------------------');

// Transform to array for variable called 'oddsAverage'
let oddsAverage = Object.entries(game.odds);
let plusCount = 0; // receive values
let average = 0; // variable to receive datas of average

console.log('-------ODDS-------');
for (const [key, value] of oddsAverage) {
  plusCount += value;
  console.log(`Odd of ${ (game[key] !== undefined) ? 'Victory' : 'Draw'} ${game[key] || ''}: ${value}`);
}
console.log('------------------');

console.log('------AVERAGE------');
average = plusCount / oddsAverage.length;
console.log(average);
console.log('------------------');

console.log('----OBJECT NEW----');
const scorers = {};
for (const key of game.scored) {
  scorers[key] ? scorers[key]++ : (scorers[key] = 1);
}
console.log(scorers);
console.log('-----------------');
