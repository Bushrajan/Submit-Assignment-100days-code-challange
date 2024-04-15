"use strict";
/*🚀 Day 42 Challenge: Start Coding! 🚀

Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day42:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let personInfo = {
    name: "BushraJan",
    getName: function () {
        return this.name;
    },
};
console.log("\nPersonName: ");
console.log(personInfo.getName());
//_____________________________________________________________________________
/*Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day42:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let rectangle_shape = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log("\nrectangle_shape.calculateArea: ");
console.log(rectangle_shape.calculateArea());
//_____________________________________________________________________________
/*Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day42:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var myObject = {
    property: "ValueofMyObject",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
console.log("\nMyObject: ");
myObject.outerMethod();
//____________________________________________________________________________
