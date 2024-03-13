/*🚀 Day 12 Challenge: Start Coding! 🚀


Question 34: Pizzas: Share your favorite pizzas and express your love for them.
Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
Answer: Please try to do it yourself first!  */

console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day12: Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")
let pizza: string[] = ["cheeze","pepperoni", "DoubleCheeze"];
pizza.forEach(pizza => {
    console.log(`I love ${pizza} pizza.`);
});
console.log(`I really really love pizza!`);
//__________________________________________________________________________________
/* Question 35: Animals: Highlight animals with a common trait.
Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.
Answer: Please try to do it yourself first! */

console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day12: Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")
let pets: string[] = ["dog", "horse", "parrot"];
pets.forEach(pets => {
    console.log(`A ${pets} would make a great pet.`);
});
console.log("Animals is like a great  compont for lonely person....");
//__________________________________________________________________________________
/* Question 36: T-Shirt: Create a function for customizing t-shirts.
Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.
Answer: Please try to do it yourself first! */


console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day12: Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")
function makeshirt(size: string, message: string) {
    console.log(`${size} t-shirt with the message of "${message}" printed on it is my order for your company...`);
}

makeshirt("small", "Born_Ready_For_Coding.");
