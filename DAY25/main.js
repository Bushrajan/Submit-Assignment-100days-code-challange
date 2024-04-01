"use strict";
/* 🚀 Day 25 Challenge: Start Coding! 🚀
Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function updatevariable() {
    let number = 10;
    console.log("Initial Number:", number);
    number = 20;
    console.log("Update Number:", number);
}
updatevariable();
//______________________________________________________________________________________________
/*Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function swapvalues() {
    let a = 5, b = 10;
    console.log("Before swapping: a =", a, "b =", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swapped: a =", a, "b =", b);
}
swapvalues();
//______________________________________________________________________________________________
/*Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function CompoundAssignmentOperators() {
    let x = 2;
    console.log("Initial x:", x); //2
    x += 3;
    console.log("After addition:", x); //5
    x -= 1;
    console.log("After subtraction:", x); //4
    x *= 2;
    console.log("After multiplication:", x); //8
    x /= 5;
    console.log("After division:", x); //1.6`
}
CompoundAssignmentOperators();
//______________________________________________________________________________________________
