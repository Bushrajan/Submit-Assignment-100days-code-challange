/*🚀 Day 44 Challenge: Start Coding! 🚀

Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Explain & TIP: In modern JavaScript development, modules allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day44:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
import { sub } from "./sub";
console.log(sub(5 , 85));
//___________________________________________________________________________

/*Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day44:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
import { info } from "./info";

const bushrajan = new info(" Bushrajan.");
bushrajan.greet();
//___________________________________________________________________________

/*Question 132: Discuss the difference between default and named exports in JavaScript modules.
Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day44:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
import { utilOne,utilTwo } from "./utils";
utilOne();
utilTwo();

import calculator from "./calc";
// calculator.add(51, 10);
//____________________________________________________________________________
