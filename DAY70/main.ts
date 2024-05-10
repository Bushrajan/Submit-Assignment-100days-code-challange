/*Day-70 of 100-Days-Of-Code Challenge
Day-70 Task:
Learn about TypeScript interfaces by using the following guide and coding along with the examples provided in it:

Interface in TypeScript
Make sure to commit your code to GitHub and tag and mention us on LinkedIn.

/*******************
 * INTERFACE INTRO *
 *******************/

interface employeeinfo {
    name: string;
    f_name: string;
    age: number;
    cnic: number;
    religion: string;
    nationality: string;
    company_name: string;
    wage: number;
    serial_no: number;

}

const noor: employeeinfo = {
    name: "Noor ul Izha",
    f_name: "Sharukh",
    age: 13,
    cnic: 456143201451351,
    religion: "Islam",
    nationality: "Pakistani",
    company_name: "IT company031",
    wage: 100000,
    serial_no: 901,
}
console.log(noor);


/***********************************
* INTERFACE METHOD AND PARAMETERS *
***********************************/

interface employeeinfo2 {
    name: string;
    age: number;
    greet(message: string): void;
}

const Izha: employeeinfo2 = {
    name: "\n\nIzha",
    age: 15,

    greet(message: string) {
        console.log(`${this.name} says: ${message}`);
    },

};
Izha.greet("Hello, Veiwers!"); 



/**************************************
* REOPEN THE INTERFACE AND USE CASES *
**************************************/

interface details_of_settings {
    readonly theme: boolean;
    font: string;
}

interface details_of_settings {
    sidebar: boolean;
}

interface details_of_settings {
    external: boolean;
}

let userdetails_of_settings: details_of_settings = {
    theme: true,
    font: "Arial Black",
    sidebar: true,
    external: true,
};

console.log(`\n\nDetail setting of PC`,userdetails_of_settings);

/***********************
 * HTML IMAGE ELEMENT  *
 ***********************/

// const imgElement: HTMLImageElement = document.createElement("img");
// imgElement.src = "image.jpg";
// imgElement.alt = "My Image";

// if (imgElement.complete) {
//     console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
// } else {
//     imgElement.addEventListener("load", () => {
//         console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
//     });
// }

// --------------------------------------------------------
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||

/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

interface employeeinfo {
    name: string;
    age: number;
}

type employeeinfotype = {
    name: string;
    age: number;
};


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
interface AnimalExInterface {
    type: string;
}

interface Dog extends AnimalExInterface {
    bark(): void;
}

class Labrador implements Dog {
    type: string = "dog";
    bark() {
        console.log("Woof!");
    }
}

console.log(Labrador);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
//----------------------Animal------------------------

type AnimalExType = {
    type: string;
};

type Monkey = AnimalExType & {
    bark(): void;
};

const labrador: Monkey = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
console.log(labrador);

// ---------------------Car---------------

interface Car {
    brand: string;
}

interface Car {
    model: string;
}

const myCar: Car = {
    brand: "Lamberginni",
    model: "2024",
};
console.log(myCar);
