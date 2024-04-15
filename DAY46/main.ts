/*🚀 Day 46 Challenge: Start Coding! 🚀

Question 136: Use console.log() to debug and track the value of a variable inside a loop.
Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day46:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
for (let i = 1; i <= 5; i++) {
    console.log(`For loop value: ${i} complete iteration.`);
  }  
//______________________________________________________________________________________

/*Question 137: Implement a try-catch block to handle potential errors in a block of code.
Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day46:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
 try {
    throw new Error("Something went wrong");
  } 
  catch (error) {
    //@ts-ignore
    console.log(error.message);
  }
//_____________________________________________________________________________________

/*Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables, step through code one line at a time, and understand how your code executes in real-time.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day46:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
//_____________________________________________________________________________________
