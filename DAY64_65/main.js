"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Day-64_65 of 100-Days-Of-Code Challenge ......
Day-64_65 Task:

Learn about TypeScript functions by using the following guide and
coding along with the examples provided in it:

Type Annotations With Function
Make sure to commit your code to GitHub, and tag and mention us on LinkedIn.  */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxx DAY 64_65 xxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function calculate_RectangleArea(lengthRectAngle, widthOfRectAngle) {
    return lengthRectAngle * widthOfRectAngle;
}
const length_of_RectAngle = 5;
const widthofRectAngle = 3;
const Area = calculate_RectangleArea(length_of_RectAngle, widthofRectAngle);
console.log(`Area of rectangle |||||||||||||| is : ${Area}`);
/**********************************
* OPTIONAL AND DEFAULT PARAMETER *
**********************************/
// Optional Parameters:
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Alisha");
greetOptional("Boby", 30);
// Default Parameters:
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Hamza");
greetDefault("Jumman", 30);
