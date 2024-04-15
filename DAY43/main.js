"use strict";
/*🚀 Day 43 Challenge: Start Coding! 🚀

Question 127: Convert a traditional function expression to an arrow function.
Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day43:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
//@ts-ignore
var traditionalFunction = function (x, y) {
    return x + y;
};
//@ts-ignore
var arrowFunction = function (x, y) {
    return x + y;
};
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));
//______________________________________________________________________________________________
/* Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day43:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
//@ts-ignore
console.log(multiplyParameters(2, 3, 4));
//______________________________________________________________________________________________
/*Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day43:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        //@ts-ignore
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
//______________________________________________________________________________________________
