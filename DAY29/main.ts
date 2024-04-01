/*🚀 Day 29 Challenge: Start Coding! 🚀
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day29:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function findCodePosition(str: string): number {
    return str.indexOf("code"); 
}
console.log(findCodePosition("Learn Something new is aowsem "));
//____________________________________________________________________________

/*Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day29:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function TextPresence(str: string): boolean {
    return str.includes("TypeScript"); 
}
console.log( TextPresence("I love coding in TypeScript!")); 
//________________________________________________________________________________

/*Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day29:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function ExtractingaSubstring(str: string): string {
    return str.substring(0, 9);
}
console.log(ExtractingaSubstring("Hello, BJ...."));
//_______________________________________________________________________________
