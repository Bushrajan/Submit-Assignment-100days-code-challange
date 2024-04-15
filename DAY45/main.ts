/*🚀 Day 45 Challenge: Start Coding! 🚀

Question 133: Write a JavaScript object and convert it into a JSON string.
Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day45:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
//@ts-ignore
const personInfo = {
    name: "BushraJan",
    age: 16,
    city: "Karachi",
  };
//@ts-ignore
  const jsonString = JSON.stringify(personInfo);
  console.log(jsonString);

//_______________________________________________________________

/*Question 134: Take a JSON string and parse it into a JavaScript object.
Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day45:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

//@ts-ignore
const jsonString = '{"name":"BushraJan", "age":16, "city":"karachi"}';
//@ts-ignore
const personInfo = JSON.parse(jsonString);
console.log(personInfo);
//______________________________________________________________________________________________

/*Question 135: Explain how you can format a JSON string with proper indentation for readability.
Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day45:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"); 
const person = {
    name: "BushraJan",
    age: 16,
    city: "Karachi",
  };
  //@ts-ignore
  const jsonString = JSON.stringify(personInfo, null, 1); 
  console.log(jsonString);
  
//______________________________________________________________________________________________
