//          ------ Basic (100) tasks ------

// const sampleNum10 = 40;
// const sampleNum11 = 108;
// const sampleNum12 = -111;
// const sampleNum13 = -138;
// const sampleNum14 = 31;
// const sampleNum15 = 416;
// const sampleNum16 = -245;
// const sampleNum17 = 174;
// const sampleNum18 = -97;
// const sampleNum19 = 283;
// const sampleNum20 = 422;
// const sampleNum21 = 385;
// const sampleNum22 = 494;
// const sampleNum23 = -57;
// const sampleNum24 = 215;
// const sampleNum25 = -91;

console.log("Task 1:");
// 1. Check if a number is positive, negative, or zero
const sampleNum1 = 158; //change the number to check if the condition works
if (sampleNum1 >= 1) {
    console.log(`${sampleNum1} is a positive.`);
} else if (sampleNum1 < 0) {
    console.log(`${sampleNum1} is a negative.`);
} else {
    console.log(`${sampleNum1} is what it is.`);
}
console.log("------------------------------------");

console.log("Task 2:");
// 2. Check if a number is even or odd
const sampleNum2 = 277;
if (sampleNum2 % 2 === 0) {
    console.log(
        `The number ${sampleNum2} is even. The remainder is ${sampleNum2 % 2}`,
    );
} else {
    console.log(
        `The number ${sampleNum2} is odd. The remainder is ${sampleNum2 % 2}`,
    );
}
console.log("------------------------------------");

console.log("Task 3:");
// 3. Check if a person is eligible to vote (age >= 18)
const sampleAge = 16; // Change the age value to check the functionality
if (sampleAge >= 18) {
    console.log(`You are ${sampleAge} dude. Vote for the Right.`);
} else {
    console.log(`${sampleAge} years isn't right time to decide for community.`);
}
console.log("------------------------------------");

console.log("Task 4:");
// 4. Check if one number is greater than another
const sampleNum4 = 212; // Change one of the numbers and the output will change.
const sampleNum5 = 190;
if (sampleNum4 > sampleNum5) {
    console.log(`${sampleNum4} is indeeed greater than ${sampleNum5}.`);
} else {
    console.log(
        `${sampleNum4} is less than ${sampleNum5} and is off by ${sampleNum5 - sampleNum4}`,
    );
}
console.log("------------------------------------");

console.log("Task 5:");
// 5. Check if one number is smaller than another
const sampleNum6 = 336;
const sampleNum7 = 80;
if (sampleNum6 < sampleNum7) {
    console.log(`Fortunately ${sampleNum6} is less than ${sampleNum7}`);
} else {
    console.log(`${sampleNum6} can't be lesser than ${sampleNum7} in math.`);
}
console.log("-------------------------------------");

console.log("Task 6:");
// 6. Check if two numbers are equal
const sampleNum8 = 168;
const sampleNum9 = 68;
if (sampleNum8 === sampleNum9) {
    console.log(`It's a  tie. Both ${sampleNum8} and ${sampleNum9} are equal.`);
} else {
    console.log(`${sampleNum8} and ${sampleNum9} are same.`);
}
console.log("------------------------------------");
