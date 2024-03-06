/*
🚀 Day 4 Challenge: Start Coding! 🚀

Question 10: Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If the programs are straightforward at this point,
just add your name and the current date at the top of each program file. Then, write one
sentence describing what the program does.
Explain & TIP: Comments are notes in your code that the computer ignores.
They help people understand what your code does. It's like leaving a note for yourself or
someone else who might read your code later. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day4_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
//Date : 3/5/2024 , Day : Tuesday,  Time : 7:40 PM 
// This program written by bushra jan
var bushra = "BUSHRA JAN";
console.log("Hello ".concat(bushra, ",  How's your TypeScript learning going?\n"));
// ______________________________________________________________________________________________________________________________________________________________________________________________
/*Question 11: Names: Store the names of a few of your friends in an array called names.
Print each person’s name by accessing each element in the list, one at a time.
Explain & TIP: An array is like a list of items. You can store multiple items,
like your friends' names, in one variable and access them one by one.
Answer: Please try to do it yourself first!
 */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day4_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var a1 = ["Abrar", "Niya", "Nayyab"];
for (var i = 0; i < a1.length; i++) {
    console.log(a1[i]);
} //try
var a2 = ["\nXxxx", "Yyyyy", "Zzzz"];
for (var i = 0; i < a2.length; i++) {
    console.log(a2[i]);
} //double practice
// ______________________________________________________________________________________________________________________________________________________________________________________________
/*Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
print a message to them. The message should be the same for each person, but personalized with their name.
Explain & TIP: This builds on the previous exercise. Now, you’re not just listing names, you’re
using them in a sentence to make a personalized message for each friend. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day4_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
a1 = ["Abrar", "Naila", "Nayyab"];
for (var i = 0; i < a1.length; i++) {
    console.log(a1[i] + " , Hey!!  How's holidays going? ");
} //try
a2 = ["\nXxxx", "Yyyyy", "Zzzz"];
for (var i = 0; i < a2.length; i++) {
    console.log(a2[i] + " **** English Alphabets ****  \n");
} //double practice 
// ______________________________________________________________________________________________________________________________________________________________________________________________
console.log("\n");
