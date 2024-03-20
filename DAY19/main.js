/* 🚀 Day 19 Challenge: Start Coding! 🚀
Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day19:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("\n_____ List Numbers_____");
var Numbers = [1, 2, 3, 4, 5];
var Doubled_Numbers = Numbers.map(function (Number) { return Number * 2; });
console.log("Simple Numbers: ", Numbers); // Result: [1,2,3,4,5]
console.log("MUltiply With (2) Numbers: ", Doubled_Numbers); // Result: [2,4,6,8,10]
//______________________________________________________________________________________________
/*Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day19:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("\n______String ARRAY1_____");
var mixedArray = [1, "A", 2, "B", true, "C"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray); // Output: ["A", "B", "C"]
console.log("\n______StringARRAY2_____");
var mixedArray2 = [1, "aa", 2, "bb", true, "cc"];
var stringsArray2 = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray2); // Output: ["aa", "bb", "cc"]
//______________________________________________________________________________________________
/*Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
Explain & TIP: We can sum up all the grades and divide by the number of grades to find the
average, giving us an idea of how well someone did overall.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day19:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("\n___Grades List1____");
var Grades1 = [95, 24, 90, 99, 53];
var AvgGrade1 = Grades1.reduce(function (total, grade) { return total + grade; }, 0) / Grades1.length;
console.log(AvgGrade1); //output:
console.log("\n___Grades List2____");
var grades = [83, 84, 75, 98, 56];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade); //output:
//______________________________________________________________________________________________
