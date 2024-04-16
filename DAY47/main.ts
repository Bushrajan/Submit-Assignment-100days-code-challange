
/*🚀 Day 47 Challenge: Start Coding! 🚀

Question 139: List three reserved words in JavaScript and create a valid use case for each.
Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let count = 5;
if (count > 0) {
  console.log("Count is greater than 0.");
}
function add(a:any, b:any) {
  return a + b;
}
//___________________________________________________
/*Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript.
This is because reserved words have predefined meanings and uses in the language syntax.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
//___________________________________________________

/*Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
async function fetchData() {
    //@ts-ignore
    const data = await fetchSomething();
    console.log(data);
    }
  console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
//______________________________________________
