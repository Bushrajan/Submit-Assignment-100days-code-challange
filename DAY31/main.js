"use strict";
/*🚀 Day 31 Challenge: Start Coding! 🚀

Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows you to add new items to the end of an array.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day31:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let favfruit = ['Banana', 'Orange', 'Mango'];
favfruit.push("Grapes");
console.log(favfruit);
//__________________________________________________________________________________________
/*Question 92: Write a function to remove the last element from an array and return the removed element.
Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day31:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let fav_fruit = ['Banana', 'Orange', 'Mango'];
fav_fruit.pop();
console.log(fav_fruit);
//_______________________________________________________________________________________
/*Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day31:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf('Banana'); // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = 'Mango'; // Replaces "Banana" with "Mango" if found
}
const fruits = ["Grapes", "Banana", "Cherry", "Orange"];
replaceBananaWithMango(fruits);
console.log(fruits);
//______________________________________________________________________________________________
