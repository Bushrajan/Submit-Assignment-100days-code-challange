"use strict";
/*Day-70 of 100-Days-Of-Code Challenge
Day-70 Task:
Learn about TypeScript interfaces by using the following guide and coding along with the examples provided in it:

Interface in TypeScript
Make sure to commit your code to GitHub and tag and mention us on LinkedIn.

/*******************
 * INTERFACE INTRO *
 *******************/
Object.defineProperty(exports, "__esModule", { value: true });
const noor = {
    name: "Noor ul Izha",
    f_name: "Sharukh",
    age: 13,
    cnic: 456143201451351,
    religion: "Islam",
    nationality: "Pakistani",
    company_name: "IT company031",
    wage: 100000,
    serial_no: 901,
};
console.log(noor);
const Izha = {
    name: "\n\nIzha",
    age: 15,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
Izha.greet("Hello, Veiwers!");
let userdetails_of_settings = {
    theme: true,
    font: "Arial Black",
    sidebar: true,
    external: true,
};
console.log(`\n\nDetail setting of PC`, userdetails_of_settings);
class Labrador {
    type = "dog";
    bark() {
        console.log("Woof!");
    }
}
console.log(Labrador);
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
console.log(labrador);
const myCar = {
    brand: "Lamberginni",
    model: "2024",
};
console.log(myCar);
