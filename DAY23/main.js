"use strict";
/* 🚀 Day 23 Challenge: Start Coding! 🚀
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day23:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log("Arithmetic with Mixed Types : ", addNumberAndString(10, "5"));
//______________________________________________________________________________________________
/*Question 68: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values. Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day23:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function DividingandFindingtheRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(" Dividing and Finding the Remainder: ", DividingandFindingtheRemainder(10, 3));
//______________________________________________________________________________________________
/*Question 69: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places. Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day23:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function MultiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(" Multiplying Decimals: ", MultiplyDecimals(0.1, 0.2));
//______________________________________________________________________________________________
