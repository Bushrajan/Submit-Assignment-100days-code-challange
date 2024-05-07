"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*************Day 66**************/
/*Day-66 of 100-Days-Of-Code  Challenge
Day-66 Task:

Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:

TypeScript Type System Concepts
*/
console.log(`xxxxxxxxxxxxxxxxxxx DAY66 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(`xxxxxxxxxxxx TypeScript Type System Concepts xxxxxxxxxxxx`);
/***************
 * UNION TYPES *
***************/
let myVar;
myVar = "Hello";
console.log(myVar);
myVar = 42;
console.log(myVar);
/*****************
 * LITERAL TYPES *
*****************/
let direction;
function setColor(color) {
    console.log(`I like ${color} fur cats. `);
}
/******************
 * NULLABLE TYPES *
******************/
let username = "Glicher"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
let myName = "Glitcher";
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
console.log(alice);
const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
};
console.log(`\n\nxxxxxxxxxxxxxxxxxxx DAY67 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(`xxxxxxxxxx  Type Annotations With Arrays xxxxxxxx`);
// Annotating an array of strings
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}
// Type Annotations With Multidimensional Arrays
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
