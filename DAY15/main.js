"use strict";
/* 🚀 Day 15 Challenge: Start Coding! 🚀
Magicians: Display magician names from an array.
Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day14 mixture with Day15 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// let Magicians=["Ali","Bilal","Hamza"];
// function the_great(Magicians:string[]){
// Magicians.forEach(Magic => {
//     console.log(`${Magic}`);
//     });
// }
// the_great(Magicians);
/*.....................................................................................
Question 42: Great Magicians: Add "the Great" to magician names.
Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.*/
let friend = ["Ali", "Bilal", "Hamza"];
function show_magicians(friend) {
    friend.forEach(friend => {
        console.log(` ${friend}  the great .`);
    });
}
show_magicians(friend); // practice more
/*.......................................................................................
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list. Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day15 _ Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let magicians = ["Ali", "Bilal", "Hamza"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
show_magicians(magicians);
//___________________________________________________________________________________________
/*Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite
number of arguments, useful for handling lists of data like sandwich ingredients. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day15 _ Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// function animal(...fun:string[]){
//     console.log(`${fun}, are loveble for a person.`);
// }
// animal("Pet"); // practice
function sandwiches(...items) {
    console.log(`_ Sandwich with the mixture of : ${items} _ `);
}
sandwiches(" Jam", "butter");
sandwiches(" Meat", "cheeze", "tomato");
sandwiches(" Olivs", "cheeze", "ketchup", "mustard"); // more practice.
//________________________________________________________________________________________________
/* Question 45: Cars: Create detailed car objects with flexible properties.
Explain & TIP: Functions accepting a mix of fixed and arbitrary paramete */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day15 _ Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function cars(Name, Model, ...options) {
    let car = { Name, Model };
    //@ts-ignore
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(cars("Honda", "Chaina", ["Color", "green"], ["Proof", false]));
console.log(cars("Lambergini", "Japan", ["Color", "darkblue"], ["Year", 2024]));
