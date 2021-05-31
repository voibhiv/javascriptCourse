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

// Create players variables
const [players1, players2] = game.players; 

// Create variables to get the first element (ever goalkeeper) and your rest
const [gk, ...fieldPlayers] = players1;

// Create variables to get all player in the both teams
const allPlayers = [...players1, ...players2];

// After substitutes
const newPlayers = ['Thiago', 'Coutinho', 'Perisic'];

// Players in the final game of match (team1)
const players1Final = [...players1, ...newPlayers];

// Get odds
const { 
  odds: {
    team1, 
    x: draw, 
    team2
  }
} = game;

// Show scores placar
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]}`);
  }

}

// printGoals(...game.scored);

const team1Winner = team1 < team2 && console.log('Team1 is more like to win');
const team2Winner = team2 < team1 && console.log('Team2 is more like to win');
const drawTeams   = team2 == team1 && console.log('Draw');

console.log(team1Winner, team2Winner, drawTeams);