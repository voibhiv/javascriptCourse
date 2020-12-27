// 1. Calculate the average score for each team, using the test data below

const dolphinsPontuation = 96 + 108 + 89;
const koalasPontuation = 88 + 91 + 110;

const mediaDolphins = dolphinsPontuation / 3;
const mediaKoalas = koalasPontuation / 3;

console.log(`${mediaDolphins} and ${mediaKoalas}`);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

if (mediaDolphins > mediaKoalas) {
    console.log(`Dolphins winner with ${mediaDolphins} points `);
} else if (mediaKoalas > mediaDolphins) {
    console.log(`Koalas winner with ${mediaKoalas} points `);
} else {
    console.log('DRAW!!');
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 


const minimun = 100;

if (mediaDolphins > mediaKoalas && mediaDolphins >= minimun) {
    console.log(`Dolphins winner with ${mediaDolphins} points `);
} else if (mediaKoalas > mediaDolphins  && mediaKoalas >= minimun) {
    console.log(`Koalas winner with ${mediaKoalas} points `);
} else if (mediaDolphins == mediaKoalas && mediaDolphins >= minimun) {
    console.log('DRAW!!');
} else {
    console.log('LOSERS!!');
}