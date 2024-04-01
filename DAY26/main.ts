/* 🚀 Day 26 Challenge: Start Coding! 🚀
Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.
Answer: Please try to do it yourself first!*/ 
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day26:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function FunctionParametersandReturnValuesofaddNumbers(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(FunctionParametersandReturnValuesofaddNumbers(22, 55)); // Outputs 77
//______________________________________________________________________________________________

/*Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day26:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function greetingtouser(AnonymousName: string = "AnonymousName") {
    console.log(`Hi, ${AnonymousName}!`);
}
greetingtouser("Bushra Jan");
greetingtouser(); 

//______________________________________________________________________________________________

/*Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day26:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function squareDeclaration(Num: number): number {
    return Num * Num;
}

const squareExpressionofthenumber = function (Num: number): number {
    return Num * Num;
};
console.log(squareDeclaration(2));``
console.log(squareExpressionofthenumber(2)); 
//______________________________________________________________________________________________

