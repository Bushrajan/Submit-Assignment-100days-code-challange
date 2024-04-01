/*🚀 Day 28 Challenge: Start Coding! 🚀
Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
Explain & TIP: The .length property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function LengthofaString(str: string): number {
    return str.length
}
console.log(LengthofaString("BushraJan"));
//___________________________________________________________________________________

/* Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function ConvertingtoUpperandLowerCase(str: string) {
    let upperStr = str.toUpperCase(); 
    let lowerStr = str.toLowerCase();
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
ConvertingtoUpperandLowerCase("Bushrajan");
//___________________________________________________________________________________

/*Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day25:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function ReplacingTextinaString(Sentence: string): string {
    return Sentence.replace(/JS/g, "TS");
}
console.log(ReplacingTextinaString("I love TS and TS is awesome!"));
//___________________________________________________________________________________
