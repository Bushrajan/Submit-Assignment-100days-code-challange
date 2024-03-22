/* 🚀 Day 21 Challenge: Start Coding! 🚀
Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var TypeoftheVehicle;
(function (TypeoftheVehicle) {
    TypeoftheVehicle[TypeoftheVehicle["Bike"] = 0] = "Bike";
    TypeoftheVehicle[TypeoftheVehicle["Car"] = 1] = "Car";
    TypeoftheVehicle[TypeoftheVehicle["Skooty"] = 2] = "Skooty";
    TypeoftheVehicle[TypeoftheVehicle["Tricycle"] = 3] = "Tricycle";
    TypeoftheVehicle[TypeoftheVehicle["Riksha"] = 4] = "Riksha";
    TypeoftheVehicle[TypeoftheVehicle["Taxi"] = 5] = "Taxi";
})(TypeoftheVehicle || (TypeoftheVehicle = {}));
console.log("\nType of the Vehicle Index : ", TypeoftheVehicle.Tricycle);
//______________________________________________________________________________________________
/*Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
//blueprint=> (interface) for information
console.log("\n__ Student Info__");
var Student = {
    Name: "Tuba",
    Age: 19 / 5,
    Courses: ["Chemistry", "Computer", "Biology"]
};
console.log("\n", Student);
console.log("\n__ Teacher Info__");
var Teacher = {
    Name: "Bushra",
    Age: 21,
    Courses: ["English", "Physics", "Urdu"]
};
console.log("\n", Teacher);
//______________________________________________________________________________________________
/*Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
// Circle using the Shape type 
var Circle = {
    Kind: "Circle",
    Radius: 5
};
// Rectangle using the Shape type
var Rectangle = {
    //@ts-ignore
    Kind: "Rectangle",
    Width: 10,
    Height: 20
};
console.log(Circle);
console.log(Rectangle);
//______________________________________________________________________________________________
