/*Day-63 of 100-Days-Of-Code Challenge
Day-63 Task:

Learn about TypeScript types by using the following guide and coding along with the examples provided in it:
Multiple Types in TypeScript

*/

console.log(`------------------DAY63---------------------`)
let my_num1 = 123;
let my_num2 : number = 456;

let my_string1 = "123";
let my_string2 : string = "456";

console.log(my_num1);
console.log(my_num2);
console.log(my_string1);
console.log(my_string2);


function start() {
    console.log("Function",123);
}
start();

function again(Name:any) {
    let name:string = "Bushra";
    return name;
}
console.log("\nUsing type annotation makes the code more readable and easier to understand. Type annotations help the compiler in checking types and help avoid errors dealing with data types.\n");