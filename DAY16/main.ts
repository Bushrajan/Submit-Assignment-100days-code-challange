/* 🚀 Day 16 Challenge: Start Coding! 🚀

Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day16:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let Enhanced_Laptop = {
    make: "HP",
    model: "12th Gen intel",
    year: 2024,
    method_describe() {
        console.log(`Laptop details: \n\n ${this.make} \n ${this.model} \n ${this.year} \n`);
    }
};
//object with function call_
Enhanced_Laptop.method_describe();

//______________________________________________________________________________________________
/* Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log   these variables.
Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day16:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let Laptops = [
    {   make: "HP",
        model: "12th Gen intel",
        year: 2024 },

    {   make: "Lenovo",
        model: "7th Gen intel",
        year: 2023 },

    {   make: "XP",
        model: "Windows",
        year: 2022 }
];
let [laptops1,laptops2]=Laptops;
console.log(Laptops);
console.log(laptops1);
console.log(laptops2);

console.log(`\n\n`);
let ABC=[
 {  Name:"A",Letter:" Capital",Number:1  },   
 {  Name:"b",Letter:" Small"  ,Number:2  },
 {  Name:"C",Letter:" Capital",Number:3  },
 {  Name:"d",Letter:" Small"  ,Number:4  }
]
let[A,B,C]=ABC
console.log(ABC);
console.log(A);
console.log(C);
console.log(C.Letter);

//______________________________________________________________________________________________

/*
Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day16:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let laptopset1 = [1800, 12600, 1200];
let laptopset2 = [2600, 2800, 1900];
let combinedPrices = [...laptopset1, ...laptopset2].sort((a, b) => b-a);
// console.log(laptopset1);
console.log('LaptopSet1 price : ',laptopset1);
console.log('LaptopSet2 price : ',laptopset2);
console.log('Least Range : ',combinedPrices);
//______________________________________________________________________________________________



