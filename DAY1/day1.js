"use strict";
console.log("BJ");
/*
Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
Explain & TIP: Simply install the following things via any browser of your choice.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day1_Q1:Done  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("Instalation Done\n");
// ______________________________________________________________________________________________________________________________________________________________________________________________
/*Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
Explain & TIP: First, make a variable to save a name. Then, use this name to say hello. Variables keep data you can use later. */
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day1_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let bushra = "Bushra";
console.log('Hello ' + { bushra }, ' would you like to learn some TypeScript today?'); //wrong way (means concatenate)
console.log(`Hello  ${bushra} , would you like to learn some TypeScript today? \n`); //right way (`` pick $sign in this area  )
let ali1 = 'A';
let ali2 = 'a';
let ali3 = 'Aa';
console.log(`${ali1} B`); //A B
console.log(`${ali2} b`); //a b
console.log(`${ali3} Bb`); //Aa Bb
//______________________________________________________________________________________________________________________________________________________________________________________________
/*Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day1_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let star = "Jaweria Ishtiaque";
console.log(star.toLowerCase()); //jaweria ishtiaque
console.log(star.toUpperCase()); //JAWERIA ISHTIAQUE
console.log(star.charAt(0).toUpperCase() + star.slice(1, 7).toLowerCase(), star.charAt(8).toUpperCase() + star.slice(9)); //Jaweria Ishtique
// ______________________________________________________________________________________________________________________________________________________________________________________________
