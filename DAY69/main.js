"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Day-69 of 100-Days-Of-Code Challenge
Day-69 Task:

Learn about TypeScript enums by using the following guide and coding along with the examples provided in it:

Enums in TypeScript
Please make sure to commit your code to GitHub and tag and mention us on LinkedIn. */
console.log("\nxxxxxxxxx DAY69 xxxxxxxxxxxx\n");
console.log(" Enums in TypeScript are a way to define a set of named constant values representing discrete options or categories. They provide a convenient means to work with descriptive values in a more readable and expressive way. In essence, enums allow you to create a new data type composed of predefined, related values. ");
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
const today = Days.Thursday;
console.log(`\n\nToday is ${Days[today]}`);
var Vegetables;
(function (Vegetables) {
    Vegetables[Vegetables["Bhindi"] = 0] = "Bhindi";
    Vegetables[Vegetables["tori"] = 1] = "tori";
    Vegetables[Vegetables["shimlamirch"] = 2] = "shimlamirch";
    Vegetables[Vegetables["teendy"] = 3] = "teendy";
    Vegetables[Vegetables["kraly"] = 4] = "kraly";
    Vegetables[Vegetables["gajr"] = 5] = "gajr";
    Vegetables[Vegetables["moli"] = 6] = "moli";
})(Vegetables || (Vegetables = {}));
const tomorrow = Vegetables.shimlamirch;
console.log(`\n\nWanna eat  ${Vegetables[tomorrow]} tomorrow`);
