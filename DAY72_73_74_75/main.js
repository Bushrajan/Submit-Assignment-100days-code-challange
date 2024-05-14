"use strict";
/*Day-72 of 100-Days-Of-Code Challenge
Day-72 Task:

Learn about TypeScript generics by using the following guide and coding along with the examples provided in it:
*/
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxx Generics in TypeScript Day 72 xxxxxxxxxxxxxxxxxxxxxxxxx\n`);
// Generics
function returnType(val) {
    return val;
}
const numValue = returnType(100);
const strValue = returnType("Elzero");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(` Generic  Types `);
console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// Generics Multiple Types
console.log(` Generics Multiple Types`);
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax("Elzero")); // Returns: "Elzero" (string)
// Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Returns: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// Generics Classes
// Generic Class `User`
class User {
    constructor(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"
// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"
// Generic Class `Collection`
class Collection {
    constructor() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
}
// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
// ------------------------------------------------------------------------
/*Day-73 of 100-Days-Of-Code Challenge
Day-73 Task:

Learn about TypeScript type assertions by using the following guide and coding along with the examples provided in it:
*/
console.log(`\nxxxxxx  Type Assertions in TypeScript Day 73 xxxxxxxxxx\n`);
/*******************
 * TYPE ASSERTIONS *
*******************/
let data = "1000";
// Type assertion to treat "data" as a string
console.log(data.repeat(3));
// ------------------------------------------------------------------------
/* Day-74 of 100-Days-Of-Code Challenge
Day-74 Task:

Learn about TypeScript Debugging by using the following guide and debug along with it:

Debugging in TypeScript */
// __________________ Debugging___________________
// Alright, let's dive into debugging TypeScript applications in VS Code. This skill is invaluable when troubleshooting issues and making sure our code behaves as expected. We'll break it down into a few steps:
// Step 1: First, navigate to your tsconfig.json file. In the emit section, enable the "source map" feature. A source map is a file that helps map each line of TypeScript code to its corresponding JavaScript code. This is primarily for debuggers and not meant for human understanding.
// Step 2: After enabling source maps, recompile your code. You'll notice a new file in your folder, named index.js.map. This is your source map file.
// Step 3: Let's make debugging more interactive. Open index.ts and add some logic. For instance, you can insert a breakpoint by clicking on the line number. Breakpoints pause code execution when reached.
// Step 4: Access the debug panel and create a launch.json file. From the dropdown, select node.js. This file configures VS Code for debugging. It specifies that we'll use Node.js to run and debug our program.
// Step 5: Add a pre-launch task setting in launch.json. Set it to "tsc build - tsconfig.json". Pay attention to the spaces; they're crucial. This tells VS Code to use the TypeScript compiler to build your application using the specified configuration.
// Step 6: Now, go back to index.ts. To start debugging, open the debug panel and click on "Launch Program" or use the shortcut F5.
// Step 7: Your program starts, and execution halts at the breakpoint. In the debug panel, you have various tools:
// Step Over (F10): Execute one line of code.
// Step Into: Useful for functions.
// Step Out: Useful for leaving functions.
// Restart: Restart the debugging session.
// Stop: Terminate debugging.
// Step 8: On the left, under "Variables," you can see detected variables. As you step through the code, watch these values change. If you don't see a variable, you can add it to the "Watch" window.
// Step 9: As an example, add a console.log statement to see its effect during debugging. Start the debugging session with F5, and use F10 to step through lines.
// Debugging in VS Code is a powerful tool to pinpoint issues and understand your code's behavior step by step.
// Once you're done debugging, simply stop the debugging session.
// This concludes our debugging section.
// I've restructured the text for better readability and comprehension. It now provides clear steps and explanations for debugging TypeScript applications in VS Code.
console.log(`\nxxxxxxxxxxx Debugging Day 74 xxxxxxxxxxxxxxxxxxxxxxxxx\n`);
/*************
 * DEBUGGING *
*************/
let age = 22;
if (age > 20) {
    console.log("pass");
}
else if (age < 20) {
    console.log("return");
}
else {
    console.log("reboot");
}
console.log(`\nxxxxxxxxxxx  How Internet Works Day 75 xxxxxxxxxxxxxxxxxxxxxxxxx\n\n

What is the Internet?
How does the information move on the internet?
How do the networks talk to each other and the protocols involved?
What’s the relationship between packets, routers, and reliability?
HTTP and the HTML – How are you viewing this webpage in your browser?
How is the information transfer on the internet made secure?
What is cybersecurity and what are some common internet crimes?  \n
Answer : I read the whole file and understand it clearely. Thanks for guidance.
`);
