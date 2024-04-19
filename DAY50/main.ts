/* 🚀 Day 50 Challenge: Start Coding! 🚀
Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day50 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
setTimeout(() => {
    console.log("3 SEC later");
}, 3000);

//______________________________________________________________

/*Question 149: Explain the concept of the event loop in JavaScript with an example.
Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution. */
console.log("start from here");
setTimeout(() => {
    console.log("If U can see me...");
}, 2000)
console.log("end here");

//______________________________________________________________

/*Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes. */
console.log("Synchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);

//_________________________________________________________________