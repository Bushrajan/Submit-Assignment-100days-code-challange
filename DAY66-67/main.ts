/*************Day 66**************/
/*Day-66 of 100-Days-Of-Code  Challenge
Day-66 Task:

Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:

TypeScript Type System Concepts
*/
console.log(`xxxxxxxxxxxxxxxxxxx DAY66 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(`xxxxxxxxxxxx TypeScript Type System Concepts xxxxxxxxxxxx`);

/***************
 * UNION TYPES *
***************/

let myVar: string | number;

myVar = "Hello"; 
console.log(myVar)

myVar = 42;      
console.log(myVar)

/*****************
 * LITERAL TYPES *
*****************/

let direction: "left" | "right" | "up" | "down";

function setColor(color: "red" | "green" | "blue") {
    console.log(`I like ${color} fur cats. `);    
}

/******************
 * NULLABLE TYPES *
******************/

let username: string | null = "Glicher"; // The variable can hold a string or null
let ageEx: number | null = null; // The variable can hold a number or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!

/*****************************
 ******* TYPE ALIAS ***********
 *****************************/

type MyString = string;
let myName: MyString = "Glitcher";

type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 10;

// another example
type Employee = {
    name: string;
    age: number;
    email?: string;
};

const alice: Employee = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};

console.log(alice);

/*********************
 * INTERSECTION TYPE *
*********************/

type FirstType = {
    name: string;
    age: number;
};

type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
      name: "John Doe",
      age: 30,
      address: "123 Main St",
      phone: "123-456-7890",
    };

console.log(`\n\nxxxxxxxxxxxxxxxxxxx DAY67 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(`xxxxxxxxxx  Type Annotations With Arrays xxxxxxxx`);

// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}

// Type Annotations With Multidimensional Arrays
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

