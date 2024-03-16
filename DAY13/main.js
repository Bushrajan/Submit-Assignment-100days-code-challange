"use strict";
/* 🚀 Day 13 Challenge: Start Coding! 🚀

Question 37: Large Shirts: Default values in make_shirt().
Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day13 _ Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function makeShirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it in black colour.`);
}
makeShirt("small", "BEAUTY OF LIFE"); //my try
function makeshirt(size = "large", message = "TypeScript Batch") {
    console.log(`Make a ${size} t-shirt with the message "${message}" printed on it in blue colour.`);
}
makeshirt(); // Default 
makeshirt(" xxl "); // function Default size,messege
makeshirt("wide", "Code is life"); //generate size and messege
//________________________________________________________________________________________________
/* Question 38: Cities: Describing cities with a function.
Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day13 _ Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function Cities(name, capital) {
    console.log(`City ${name} is the capital of ${capital}`);
}
Cities("KARACHI", "ISLAMABAD"); //my try
function city(city, country = "Pakistan") {
    console.log(`${city} is in this country ${country}.`);
}
city("Hyderabad");
city("Quetta");
city("Faislabad ", "Peshawer");
//________________________________________________________________________________________________
/*Question 39: City Names: Formatting city-country pairs.
Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day13 _ Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function country(city, country) {
    return `${city}, ${country}`;
}
console.log("\nName of Countries with their Capitals\n");
console.log(country("Peshawer", "Pakistan"));
console.log(country("Kabul", "Afghanistan"));
console.log(country("Beijing", "China	"));
//________________________________________________________________________________________________
