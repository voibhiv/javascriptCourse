// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).

// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
 
const calcAverage = (value1, value2, value3) => {
    return (value1 + value2 + value3) / 3;
}

const averageDolphins1 = calcAverage(44, 23, 71);
const averageKoalas1 = calcAverage(65, 54, 49);
const averageDolphins2 = calcAverage(85, 54, 41);
const averageKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    let winnerTrouph = '';

    if (avgDolphins > avgKoalas) {
        winnerTrouph = `Dolphins win ( ${avgDolphins} vs. ${avgKoalas} )`;
    } else if (avgKoalas > avgDolphins) {
        winnerTrouph = `Koalas win ( ${avgKoalas} vs. ${avgDolphins} )`;
    } else {
        winnerTrouph = 'No team wins';
    }

    return winnerTrouph;
}

const result1 = checkWinner(averageDolphins1, averageKoalas1);
const result2 = checkWinner(averageDolphins2, averageKoalas2);

console.log(result1);
console.log(result2);