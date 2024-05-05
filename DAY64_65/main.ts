/*
Day-64_65 of 100-Days-Of-Code Challenge ......
Day-64_65 Task:

Learn about TypeScript functions by using the following guide and 
coding along with the examples provided in it:

Type Annotations With Function
Make sure to commit your code to GitHub, and tag and mention us on LinkedIn.  */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxx DAY 64_65 xxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

function calculate_RectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
    return lengthRectAngle * widthOfRectAngle;
  }
  
  const length_of_RectAngle = 5;
  const widthofRectAngle = 3;
  const Area = calculate_RectangleArea(length_of_RectAngle, widthofRectAngle);
  console.log(`Area of rectangle |||||||||||||| is : ${Area}`);
  
  
  /**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional Parameters:
function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } 
  else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Alisha");
greetOptional("Boby", 30); 

// Default Parameters:
function greetDefault(name: string, age: number = 25) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Hamza"); 
greetDefault("Jumman", 30);


  /***************************
 * FUNCTION REST PARAMETER *
 ***************************/

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5

/******************
 * ARROW FUNCTION *
 ******************/

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30



/**********************
 * ANONYMOUS FUNCTION *
 **********************/

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(10, 20)); // Output: 30


/****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function noReturnValue(): void {
  // This function doesn't return a value (implicitly returns undefined).
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // This function never exits (infinite loop).
  }
}
