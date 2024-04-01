/*🚀 Day 30 Challenge: Start Coding! 🚀

Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day30:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function RoundingtotheNearestInteger(num) {
    return Math.round(num);
}
console.log(RoundingtotheNearestInteger(2.7));
console.log(RoundingtotheNearestInteger(3.3));
//__________________________________________________________________________________________
/*Question 89: ConvertingStringstoNumbers: Create a function that takes a string representing a number (like "787") and converts it into an actual number type.
Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day30:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function ConvertingStringstoNumbers(str) {
    return parseFloat(str);
}
console.log(ConvertingStringstoNumbers("7878.98"));
console.log(ConvertingStringstoNumbers("10"));
//_______________________________________________________________________________________
/*Question 90: CheckingifaValueisNaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day30:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function CheckingifaValueisNaN(value) {
    return isNaN(value);
}
console.log(CheckingifaValueisNaN("bushra"));
console.log(CheckingifaValueisNaN(786));
//______________________________________________________________________________________________
