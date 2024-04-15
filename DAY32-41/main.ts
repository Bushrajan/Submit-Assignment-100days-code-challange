/*🚀 Day 32 Challenge: Start Coding! 🚀

Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day32:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const words: string[] = ["Banana", "Orange", "Apple", "Mango"];
const lengths: number[] = words.map((word) => word.length);
console.log("Generate the length of each word in an array: ");
console.log(words);
console.log(lengths);
//__________________________________________________________________________________________
/*Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day32:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function usefiltergreaterthan10(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numbers = [1, 5, 10, 15, 20, 25, 30];
console.log("Generate an array of numbers greater than 10: ");
console.log(usefiltergreaterthan10(numbers));

//_______________________________________________________________________________________
/*Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day32:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function calculateAddition(numbers: number[]): number {
    return num.reduce((n1, n2) => n1 + n2);
}
const num: number[] = [20, 15, 14, 85];
console.log("The addition of all numbers in an array[20, 15, 14, 85]: ");
console.log(calculateAddition(num));
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 33 Challenge: Start Coding! 🚀

Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day33:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

function getdate() {
    const date1 = new Date();
    const day1 = String(date1.getDate()).padStart(2, `0`);
    const month1 = String(date1.getMonth() + 1).padStart(2, `0`);
    const year11 = date1.getFullYear();
    return `${day1}-${month1}-${year11}`;
}
console.log(getdate());

//_______________________________________________________________________________________

/*Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day33:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
//_______________________________________________________________________________________
/*Question 99: Generate a date object representing your next birthday and log it to the console.
Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day33:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(12, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 34 Challenge: Start Coding! 🚀

Question 100: Use the JavaScript Math object to find the square root of 144.
Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day34:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const calculatesquareootofthenumber: number = Math.sqrt(121);
console.log(calculatesquareootofthenumber);
//_______________________________________________________________________________________
/*Question 101: Generate a random integer between 1 and 10.
Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day34:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// Finds the square root of 144 using Math.sqrt()

function getRandomInteger(): number {
    return Math.floor(Math.random() * 20) + 1;
}
console.log(getRandomInteger());
//_______________________________________________________________________________________
/*Question 102: Calculate and log the absolute difference between the number -5 and 5.
Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day34:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const difference: number = Math.abs(-7 + 9);
console.log(difference);
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 35 Challenge: Start Coding! 🚀

Question 103: Write a function that returns a random boolean value, true or false.
Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day35:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function getRandomBoolean(): boolean {
    return Math.random() > 0.3;
}
console.log(getRandomBoolean());
//__________________________________________________________________________________________
/*Question 104: Create a function that generates a random hexadecimal color code.
Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day35:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(17).padStart(6, '0');
    return color;
}

console.log(getRandomHexColor());
//_______________________________________________________________________________________
/*Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day35:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function rollDicenumber(): number {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDicenumber());
//_______________________________________________________________________________________

//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*
🚀 Day 36 Challenge: Start Coding! 🚀

Question 106: Determine if a given year is a leap year using comparison operators.
Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day36:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function LeapYear(leapyear: number): boolean {
    return (leapyear % 4 === 0 && leapyear % 100 !== 0) || leapyear % 400 === 0;
}
console.log(LeapYear(2020));
console.log(LeapYear(2019));
//_______________________________________________________________________________________
/*Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day36:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function isDivisibleByTwoAndThree(number: number): boolean {
    return number % 6 === 0 && number % 2 === 0;
}
console.log(isDivisibleByTwoAndThree(52));
console.log(isDivisibleByTwoAndThree(45));
//_______________________________________________________________________________________
/*Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day36:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 37 Challenge: Start Coding! 🚀

Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day37:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
//_______________________________________________________________________________________
/*Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day37:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function assignGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(assignGrade(95));
console.log(assignGrade(82));
//_______________________________________________________________________________________
/*Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day37:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// This function categorizes a person's age group
function categorizeAge(age: number): string {
    if (age < 13) {
        return "child";
    } else if (age <= 19) {
        return "teenager";
    } else {
        return "adult";
    }
}
console.log(categorizeAge(22));
console.log(categorizeAge(52));
console.log(categorizeAge(12));

//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 38 Challenge: Start Coding! 🚀

Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day38:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const countries = new Map<string, string>();
countries.set("PAKISTAN", "ISLAMABAD");
countries.set("CANADA", "NEWYORK");
countries.set("JAPAN", "TOKYO");
console.log(countries);
//_______________________________________________________________________________________
/*Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day38:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
        console.log("Canada is still not in the Map.");
    }
}
logCapitalOfCanada(countries);
//_______________________________________________________________________________________
/*Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day38:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const students = new Map<number, string>();
students.set(1, "burhan");
students.set(2, "ali");
students.set(3, "joy");
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 39 Challenge: Start Coding! 🚀

Question 115: Use a switch statement to log the days of the week based on a number (1-7).
Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day39:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function DaysOfWeek(dayNumber: number): void {
    switch (dayNumber) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid day number");
        break;
    }
  }
  console.log(DaysOfWeek(3)); 
//_______________________________________________________________________________________

/*Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day39:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function Seasons(month: number): void {
    switch (month) {
      case 12:
      case 1:
      case 2:
        console.log("Winter");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Spring");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Summer");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall");
        break;
      default:
        console.log("Invalid month");
        break;
    }
  }
  console.log(Seasons(4)); 
//_______________________________________________________________________________________

/*Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day39:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function evaluateGrade(grade: string): void {
    switch (grade) {
      case "A":
        console.log("Excellent");
        break;
      case "B":
        console.log("Good");
        break;
      case "C":
        console.log("Fair");
        break;
      case "D":
        console.log("Poor");
        break;
      case "F":
        console.log("Fail");
        break;
      default:
        console.log("ALLA bhut ALLA bhut....");
        break;
    }
  }
evaluateGrade("B");
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

/*
🚀 Day 40 Challenge: Start Coding! 🚀

Question 118: Write a loop that logs numbers from 1 to 10 to the console.
Explain & TIP: A for loop is a concise way to run a block of code a specific number of times. It's perfect for when you know exactly how many iterations you need.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day40:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//_______________________________________________________________________________________

/*Question 119: Create a while loop that logs "Hello, World!" 5 times.
Explain & TIP: A while loop continues to run as long as its condition remains true. It’s ideal for when you want to repeat something until a certain condition changes.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day40:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let count: number = 0;
while (count < 5) {
    console.log("Hello, World!");
    count++;
}
//_______________________________________________________________________________________

/*Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day40:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
const favoriteMovies: string[] = [
    "Damsel",
    "The Eagle",
    "Tomorrow War",
    "The Sindbad",
];
for (const movie of favoriteMovies) {
    console.log(movie);
}
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*🚀 Day 41 Challenge: Start Coding! 🚀

Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day41:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
//_______________________________________________________________________________________

/*Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day41:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let counter: number = 10;
while (counter > 0) {
    if (counter === 5) {
        break;
    }
    console.log(counter);
    counter--;
}
//_______________________________________________________________________________________

/*Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day41:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syzygy");
//_______________________________________________________________________________________
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo