/* 🚀 Day 21 Challenge: Start Coding! 🚀
Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand. */ 
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

enum TypeoftheVehicle {  Bike , Car , Skooty , Tricycle , Riksha , Taxi  }
console.log("\nType of the Vehicle Index : ",TypeoftheVehicle.Tricycle);
//______________________________________________________________________________________________

/*Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
//blueprint=> (interface) for information
console.log("\n__ Student Info__");

interface Student {
    Name: string;
    Age: number;
    Courses: string[];
}

let Student: Student = {
    
    Name: "Tuba",
    Age: 19/5,
    Courses: ["Chemistry", "Computer", "Biology"]
};
console.log("\n",Student);

console.log("\n__ Teacher Info__");
interface teacher {
    Name: string;
    Age: number;
    Courses: string[];
}

let Teacher: teacher = {
    Name: "Bushra",
    Age: 21,
    Courses: ["English", "Physics", "Urdu"]
};
console.log("\n",Teacher);


//______________________________________________________________________________________________

/*Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day21:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

// A Custom type for shapes that could be circles or rectangles -------------------(type alias)
type Shape = {
    Kind: "Circle" | "rectangle";
    Radius?: number; 
    Width?: number;
    Height?: number; 
};

// Circle using the Shape type 
let Circle: Shape = {
    Kind: "Circle",
    Radius: 5
};

// Rectangle using the Shape type
let Rectangle: Shape = {
    //@ts-ignore
    Kind: "Rectangle",
    Width: 10,
    Height: 20
};
console.log(Circle); 
console.log(Rectangle);
//______________________________________________________________________________________________

