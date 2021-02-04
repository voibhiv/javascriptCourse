// @ts-nocheck
// Remember, we're gonna use strict mode in all scripts now!
'use strict'; 
// ====================================================================================================================

// AULA 55. Setting up Prettier and VS Code

// const  x = 23;
// if (x === 3) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log();

// ===================================================================================================================

// AULA 59. Using Google, StackOverflow and MDN

// // PROBLEM:
// // We work for a company building a smart home thermometer.
// // Our most recent task is this: "Given an array of temperatures of one day,
// // calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [12,-5,-8,-10,20];

// // 1 ) Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do?

// // 2 ) Breaking up into sub-problems
// // - How to ignore errors                 
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let auxMax = temps[0];
//     let auxMin = temps[0];
//     for (let i = 0; i <= temps.length; i++) {
//         if (typeof temps[i] !== 'number') continue;
        
//         auxMax = (temps[i] > auxMax) ? temps[i] : auxMax;
//         auxMin = (temps[i] < auxMin) ? temps[i] : auxMin;
        
//     }
//     if (auxMin < 0) {
//         return auxMax - (-auxMin);
//     } else {
//         return auxMax - auxMin;
//     }

// }

// console.log(calcTempAmplitude(temperatures));

// // PROBLEM 2:
// // Function should now receive 2 arrays of temps

// // 1 ) Understanding the problem
// // - With 2 arrays, should we implement funcionality twice? NO! Just merge two arrays

// // 2 ) Breaking up into sub-problems
// // - Merge 2 arrays?

// const calcTempAmplitude2 = function (temps1,temps2) {
//     let temps = temps1.concat(temps2);
//     let auxMax = temps[0];
//     let auxMin = temps[0];

//     for (let i = 0; i <= temps.length; i++) {
//         if (typeof temps[i] !== 'number') continue;
        
//         auxMax = (temps[i] > auxMax) ? temps[i] : auxMax;
//         auxMin = (temps[i] < auxMin) ? temps[i] : auxMin;
        
//     }
//     if (auxMin < 0) {
//         return auxMax - (-auxMin);
//     } else {
//         return auxMax - auxMin;
//     }
// }

// console.log(calcTempAmplitude2([3,5,1], [9,0,5]));

// ===================================================================================================================

// AULA 61. Debugging with the Console and Breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius')
    }

    const kelvin = measurement.value + 273;
    return kelvin;
}

const calcTempAmplitudeBug = function (temps1,temps2) {
    let temps = temps1.concat(temps2);
    let auxMax = 0;
    let auxMin = 0;

    for (let i = 0; i <= temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        
        auxMax = (temps[i] > auxMax) ? temps[i] : auxMax;
        auxMin = (temps[i] < auxMin) ? temps[i] : auxMin;
        
    }
    if (auxMin < 0) {
        return auxMax - (-auxMin);
    } else {
        return auxMax - auxMin;
    }
}


const amplitudeBug = calcTempAmplitudeBug([3,5,1], [9,4,5]);
// A) IDENTIFY 
console.log(measureKelvin());