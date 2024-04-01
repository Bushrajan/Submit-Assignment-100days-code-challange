/* 🚀 Day 27 Challenge: Start Coding! 🚀
Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.*/ 
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day27:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let car = {
    make: "BMW",
    model: "539",
    year: 2023
};
console.log(car.model);
//______________________________________________________________________________________________

/*Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day27:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
car.year = 2024; 
car.model = "540";
console.log(car);
//______________________________________________________________________________________________

/*Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day27:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function logObjectProperties(obj: object) {
    for (let properties in obj) {
        //@ts-ignore
        console.log(`${properties}: ${obj[properties]}`);
    }
}
logObjectProperties({ make: "BMW", model: "540", year: 2024, color: "Black" });
//______________________________________________________________________________________________

