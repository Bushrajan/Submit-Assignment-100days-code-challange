/* 
Day-59 of 100-Days-Of-Code Challenge
Day-59 Task:

Read the following Articles and Code along with it: 
Loops: while and for in JavaScript 

The “while” loop
The while loop has the following syntax:
*/

console.log(`\n----------------- while statement ------------------\n`);

let name = "Muhammad";
let i = 0;
while (name === "Muhammad" && i < 10) {
    console.log(`I LOVE PAKISTAN`);
    // i += 2;
    break;
}

console.log(`\n--------do while statement --------------\n`);

do {
    let i = 0;
    i++;
    console.log(`Tuba jan`);
}
while (i >= 10)



// switch statement
console.log(`\n------- switch statement -----------------\n`);
let a = 2 + 3;
switch (a) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log("I don't know such values");
}