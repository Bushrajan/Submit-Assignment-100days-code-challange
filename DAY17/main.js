"use strict";
/* 🚀 Day 17 Challenge: Start Coding! 🚀
Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day17:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function hobbies(...hobby) {
    hobby.forEach(hobby => {
        console.log(`My Hobbies are : ${hobby}`);
    });
}
hobbies("Reciting QuranPak", "Spending time on Laptop");
// ______________________________________________________________________________________________
/* Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day17:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let myday = ` \nIn RAMADAN my day be like
              \n1.Alot of sleep.
              \n2.Offer Prayers.
              \n3.Iftar Roza`;
console.log(myday);
//______________________________________________________________________________________________
/* Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day17:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function calctheArea(height, width) {
    return width * height;
}
let calculatetheAreaofArrow = (width, height) => width * height;
console.log(calculatetheAreaofArrow(2, 6));
// ______________________________________________________________________________________________
