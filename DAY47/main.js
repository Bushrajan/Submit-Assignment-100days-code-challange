"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let count = 5;
if (count > 0) {
    console.log("Count is greater than 0.");
}
function add(a, b) {
    return a + b;
}
//_________________________________________________
/**/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
//______________________________________________________________________________________________
/**/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day47:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
async function fetchData() {
    //@ts-ignore
    const data = await fetchSomething();
    console.log(data);
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
//______________________________________________
