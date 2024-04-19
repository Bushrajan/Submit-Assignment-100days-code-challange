/*🚀 Day 49 Challenge: Start Coding! 🚀

Question 145: Create a function that accepts a callback and invokes it with some arguments.
Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day49:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

function Callbackfunction(callback: (arg1: number, arg2: number) => void, arg1: number, arg2: number): void {
    callback(arg1, arg2);
}
const sub = (a: number, b: number) => {
    console.log(a - b);
}
console.log("Result of sub 5-3 : ");
Callbackfunction(sub, 5, 3);
//_____________________________________________


/*Question 146: Show an example of a callback function used to filter an array of numbers.
Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day49:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filternumbers = numbers.filter((number) => number <= 5);
console.log("Filter numbers: ", filternumbers);
//_____________________________________________



/*Question 147: Explain how to handle errors in a callback pattern.
Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day49:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function fetchData( callback: (error: Error | null, data?: string) => void ): void {

    const error = new Error("Failed to fetch data");
    const data = "Some data";

    if (Math.random() > 0.5) {
      callback(null, data); 
    } else {
      callback(error); 
    }
  }
  fetchData((error, data) => {
    if (error) {
      console.error(error.message); 
    } else {
      console.log(data); 
    }
  });

//_____________________________________________


