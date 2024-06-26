"use strict";
/*Day-68 of 100-Days-Of-Code Challenge
Day-68 Task:
Learn about TypeScript tuples by using the following guide and coding along with the examples provided in it:

Tuple Data Type in TypeScript
Please make sure to commit your code to GitHub and tag and mention us on LinkedIn.*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log("xxxxxxxxxxxxxx DAY 68 xxxxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxx About Tuple xxxxxxxxxxxxxxxx");
/*******************************
 ********** TUPLE **************
 ******************************/
// Defining a tuple type
let article = [11, "Title One", true];
// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
console.log(article);
// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
