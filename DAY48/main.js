"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 🚀 Day 48 Challenge: Start Coding! 🚀

Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day48 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, BUSHRA JAN author....");
    }, 3000);
});
promise.then((message) => console.log(message));
//___________________________________________
/*Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
*/
// console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day48:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const Promise0 = new Promise((resolve, reject) => {
    const Hello = Math.random() > 0.4;
    if (Hello) {
        resolve("Hello good morning BUSHRA JAN author....");
    }
    else {
        reject(new Error("Goodbye_author_bj"));
    }
});
Promise0.then((result) => console.log(result)).catch((error) => console.log(error.message));
//___________________________________________
/**/
// console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day48:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const promise001 = Promise.resolve(3);
const promise002 = 42;
const promise003 = new Promise((resolve) => {
    setTimeout(resolve, 100, "ohooo...");
});
Promise.all([promise001, promise002, promise003]).then((values) => {
    console.log(values); // Outputs: [3, 42, "foo"]
});
//___________________________________________
