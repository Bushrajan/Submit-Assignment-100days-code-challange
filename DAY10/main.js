"use strict";
/* 🚀 Day 10 Challenge: Start Coding! 🚀

Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY10 : Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let my_age = 9;
if (my_age < 2) {
    console.log("A Baby.");
}
else if (my_age < 4) {
    console.log("A Toddler.");
}
else if (my_age < 13) {
    console.log("A Kid.");
}
else if (my_age < 20) {
    console.log("A Teenager.");
}
else if (my_age < 65) {
    console.log("An Adult.");
}
else {
    console.log("An Elder.");
}
//______________________________________________________________________________________________
/* Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.  */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY10 : Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let favfruits = ["Mango", "Grapes", "Bananas", "Oranges"];
if (favfruits.includes("Mango")) {
    console.log("You really like Mangoes.");
}
if (favfruits.includes("Bananas")) {
    console.log("You like Bananas....");
}
if (favfruits.includes("Grapes")) {
    console.log("You like Grapes-");
}
if (favfruits.includes("Oranges")) {
    console.log("You like Oranges_\n");
}
//______________________________________________________________________________________________
/* Question 30: Hello Admin: Greet users differently, especially 'admin'.
Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.
Answer: Please try to do it yourself first! */
let usernames = ["admin", "user_1", "user_2", "user_3", "user_4"];
usernames.forEach(username => {
    if (username != "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`\nHello ${username}, thank you for logging in again.`);
    }
});
console.log(`\n.......................................................................`);
let username = ["admin", "user_1", "user_2", "user_3", "user_4"];
username.forEach(username => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
