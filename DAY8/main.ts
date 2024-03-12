/* 🚀 Day 8 Challenge: Start Coding! 🚀

Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.  */

console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day8_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let guests: string[] = ['Lee John', 'Victor', 'John Marvick', 'Aliya']
console.log(guests[4]); //on index[1] victor

guests[1] = "Victor";  // correct the index [1] 

let g1: string[] = ['Lee John', 'Aliya']
console.log(g1[2]); //on index[2] victor
g1[1] = "Aliya";  // correct the index [1] ----practice

let g2: string[] = ['Lee John']
console.log(g2[0]); //on index[2] victor
g2[0] = "Lee Johnr";  // correct the index [0] ----practice
//____________________________________________________________________________

/* Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming. */

console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day8_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let i = 'I';

if (i == "I") {
    console.log("i == 'I'? I predict True.");
    console.log(i == 'I'); // true statement
}
else  {
    console.log("i == 'U'? I predict False.");
};
//***********************************************************/
let O = 'o';

if (O != "O") {
    console.log("O != 'o'? I predict True.");
    console.log(O != 'o'); // true statement
}
else  {
    console.log("O == 'o'? I predict False."); 
};
//***********************************************************/
let bat = 'green';

console.log("\nIs ball == 'green'? I predict True.");
console.log(bat == 'red'); // true statement

console.log("Is car == 'orange'? I predict False.");
console.log(bat == 'red'); // false statement

//***********************************************************/
let ball = 'red';

console.log("\nIs ball == 'red'? I predict True.");
console.log(ball == 'red'); // true statement

console.log("Is car == 'green'? I predict False.");
console.log(ball == 'blue'); // false statement

//***********************************************************/
let house = 'wide';

console.log("\nIs house = 'wide'? I predict True.");
console.log(house == 'wide'); // true statement

console.log("Is house = 'not wide'? I predict False.");
console.log(house == 'notwide'); // false statement

//***********************************************************/
let u = 'U';

if (u == 'U') {
    console.log("u == 'U'? I predict True.");
    console.log(u == 'U'); // true statement
}
else  {
    console.log("u == 'o'? I predict False."); 
};
//____________________________________________________________________________
/* Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper understanding of logic in programming. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day8_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"); 

// numerical case logic
console.log("numerical tests :");
console.log(50 > 5); // True
console.log(10 < 9); // False

// lower case logic
console.log("lower case:");
console.log("Mango".toLowerCase() == "apple"); // True

let digit = 20;
console.log(digit == 20);
console.log(digit != 20);
console.log(digit >= 20);
console.log(digit < 20);

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
console.log("\n Multiple conditions:  ");
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let box_1 = 45;
let box_2 = 100;

console.log(box_1 == box_2); //false
console.log(box_1 == box_2 && box_1 >= 20); //false
console.log(box_1 >= box_2); //false
console.log(box_1 <= box_2 && box_1 >= 20); //true
console.log(box_1 != box_2); //true
console.log(box_1 <= box_2); //true
console.log(box_1 != box_2 || box_2 >= box_1); //true
console.log(!box_2); //false


//____________________________________________________________________________
