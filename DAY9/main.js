"use strict";
/* 🚀 Day 9 Challenge: Start Coding! 🚀

Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
Explain & TIP: Use an if statement to check the alien's color. This introduces you to simple conditionals.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY9 : Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("You just earned 5 points!");
}
alien_color1 = "yellow";
if (alien_color1 == "green") {
}
//___________________________________________________________________________________
/*Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.
Answer: Please try to do it yourself first! */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY9 : Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let alien_color2 = "red";
if (alien_color2 == "red") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
alien_color2 = "green";
if (alien_color2 == "red") {
    console.log("You have earned 5 points for shooting the alien! yohoooooo....");
}
else {
    console.log("You have earned 10 points. congrats!!! ");
}
//___________________________________________________________________________________
/*Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.
Answer: Please try to do it yourself first! */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY9 : Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let alien_color3 = "yellow";
if (alien_color3 == "yellow") {
    console.log("You have earned 5 points.");
}
else if (alien_color3 == "red") {
    console.log("You have earned 10 points.");
}
else if (alien_color3 == "green") {
    console.log("You have earned 15 points.");
}
// .........................................................
alien_color3 = "green";
if (alien_color3 == "red") {
    console.log("You have earned 5 points.");
}
else if (alien_color3 == "green") {
    console.log("You have earned 10 points.");
}
else if (alien_color3 == "yellow") {
    console.log("You have earned 15 points.");
}
//___________________________________________________________________________________
