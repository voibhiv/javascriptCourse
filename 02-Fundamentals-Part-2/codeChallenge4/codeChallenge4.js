// ## Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!

const calcTip = (bill) => {
    let valueTip = 0;
    if (bill >= 50 && bill <= 300) {
        valueTip = bill * 0.15;
    } else {
        valueTip = bill * 0.20;
    }
    return valueTip;
}

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 

for (let i = 0; i <= bills.length - 1; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];

}

console.log(totals);

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)!

let calcAverage = (arr) => {
    let aux = 0;
    for (let x = 0; x <= arr.length - 1; x++) {
        aux = aux + arr[x];
    }
    aux = aux / arr.length;
    return aux;
}

console.log(calcAverage(totals));