//          ------ Basic (100) tasks ------

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

// 1.
console.log("Task 1: Check if a number is positive, negative, or zero");
const sampleNum1 = 158; //change the number to check if the condition works
if (sampleNum1 >= 1) {
    console.log(`${sampleNum1} is a positive.`);
} else if (sampleNum1 < 0) {
    console.log(`${sampleNum1} is a negative.`);
} else {
    console.log(`${sampleNum1} is what it is.`);
}
console.log("------------------------------------");

// 2.
console.log("Task 2: Check if a number is even or odd");
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

// 3.
console.log("Task 3: Check if a person is eligible to vote (age >= 18)");
const sampleAge = 16; // Change the age value to check the functionality
if (sampleAge >= 18) {
    console.log(`You are ${sampleAge} dude. Vote for the Right.`);
} else {
    console.log(`${sampleAge} years isn't right time to decide for community.`);
}
console.log("------------------------------------");

// 4.
console.log("Task 4:  Check if one number is greater than another");
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

// 5.
console.log("Task 5: Check if one number is smaller than another");
const sampleNum6 = 336;
const sampleNum7 = 80;
if (sampleNum6 < sampleNum7) {
    console.log(`Fortunately ${sampleNum6} is less than ${sampleNum7}`);
} else {
    console.log(`${sampleNum6} can't be lesser than ${sampleNum7} in math.`);
}
console.log("-------------------------------------");

// 6.
console.log("Task 6: Check if two numbers are equal");
const sampleNum8 = 168;
const sampleNum9 = 68;
if (sampleNum8 === sampleNum9) {
    console.log(`It's a  tie. Both ${sampleNum8} and ${sampleNum9} are equal.`);
} else {
    console.log(`${sampleNum8} and ${sampleNum9} are not same.`);
}
console.log("------------------------------------");

// 7.
console.log("Task 7: Check if a character is a vowel or a consonant");
const sampleChar = "a"; // This condition has a major flaw. If input is vowel in uppercase, it'll be considered as consonant.
const upperSampleChar = sampleChar.toUpperCase(); // The flaw has been fixed.
if (
    upperSampleChar == "A" ||
    upperSampleChar == "E" ||
    upperSampleChar == "I" ||
    upperSampleChar == "O" ||
    upperSampleChar == "U"
) {
    console.log(`The '${sampleChar}' character is a vowel.`);
} else {
    console.log(`'${sampleChar}' is a consonant`);
}
console.log("-----------------------------------");

// 8.
console.log("Task 8: Determine if a year is a leap year");
const sampleYear1 = 2141;
if (
    sampleYear1 % 4 === 0 ||
    sampleYear1 % 100 === 0 ||
    sampleYear1 % 400 === 0
) {
    console.log(`Yey! The year ${sampleYear1} is a leap year.`);
} else {
    console.log(`No. ${sampleYear1} is not a leap year.`);
}
console.log("-----------------------------------");

// 9.
console.log("Task 9: Check if a string is empty or not");
const sampleString1 = "Hi"; // Only fully empty string will count as empty string. A single space also counts.
if (sampleString1.length === 0) {
    console.log(`The string is empty like you.`);
} else {
    console.log(
        `${sampleString1} is a string length of ${sampleString1.length}.`,
    );
}
console.log("-----------------------------------");

// 10    It's a extended version
console.log(`Task 10: Check if a number is divisible by 2
            Check if a number is divisible by 3
            Check if a number is divisible by 5
            Check if a number is divisible by 10`);
const sampleNum10 = 50;
/*  Broken code
    if (sampleNum10 % 2 === 0) {
        console.log(`The number ${sampleNum10} is absolutely divisible by 2.`);
    } else if(sampleNum10 % 3 === 0){
        console.log(`The number ${sampleNum10} is totally a odd one. divisible by 3.`);
    } else if(sampleNum10 % 5 === 0){
        console.log(`${sampleNum10} is divisible by 5.`);
    } else if(sampleNum10 % 10 === 0){
        console.log(`As a even number, ${sampleNum10} is divisible by 10`);
    }
    else {
        console.log(`${sampleNum10} can't be divided by 2, 3, 5 & 10 cause it's a odd one.`);
    }
*/
console.log("-----------------------------------");
