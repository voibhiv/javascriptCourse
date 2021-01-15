// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// BMI = mass / (height * height) 

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
//     method on both objects). Store the BMI value to a property, and also return it
//     from the method

const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(mass,height) {
        // @ts-ignore
        this.bmi = mass / (height * height); 
        return this.bmi;
    }

}

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(mass,height) {
        // @ts-ignore
        this.bmi = mass / (height * height); 
        return this.bmi;
    }

}

john.calcBMI(john.mass, john.height);
mark.calcBMI(mark.mass, mark.height);

if  (john.bmi > mark.bmi) {
    console.log(`${john.name} BMI (${john.bmi}) is higher than ${mark.name} (${mark.bmi}) `);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.name} BMI (${mark.bmi}) is higher than ${john.name} (${john.bmi}) `);
} else {
    console.log(`${mark.name} BMI (${mark.bmi}) is the same than ${john.name} (${john.bmi}) `);
}

