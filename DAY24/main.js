"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 🚀 Day 24 Challenge: Start Coding! 🚀
Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day24:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function printnumbersinloop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printnumbersinloop();
//______________________________________________________________________________________________
/*Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
Answer: Please try to do it yourself first!
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day24:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let Age = 25;
Age = 26;
console.log(Age);
const name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a const -declared variable.");
}
//______________________________________________________________________________________________
/*Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day24:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// Demonstrating block scope
{
    let visibleBlock = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(visibleBlock);
    console.log(blockConst);
}
try {
    console.log(visibleBlock);
}
catch (error) {
    console.log("`visibleBlock` is not accessible outside the block.");
}
try {
    console.log(visibleBlock);
}
catch (error) {
    console.log("`visibleBlock` is not accessible outside the block.");
}
//______________________________________________________________________________________________
