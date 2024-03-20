/* 🚀 Day 18 Challenge: Start Coding! 🚀
Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly. */ 
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day18:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

console.log("\n___Smartphoneobject1___");
let Smartphoneobject1 = {
    brand: "RealmeC3",
    model: "Samsung Galaxy Z Fold 5",
    storage: "16GB",
    size: "14.6cm",
    battery: "100% charge",

};
console.log(Smartphoneobject1);

console.log("\n___Smartphoneobject2___");
let Smartphoneobject2 = {
    brand: "Realmei5",
    model: "Google Pixel 8 Pro",
    details:{
    storage: "32GB",
    size: "14.0cm",
    battery: "90% charge",
    }
};
console.log(Smartphoneobject2);
//______________________________________________________________________________________________

/*Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day18:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

console.log("_____Details of Computer Programmer _____");
let Information = {
    Languages: ["Html "," CSS "," JS ", " TypeScript ", " Python "],
    Frameworks: ["Node.js ", " Django "," Spring "," React" ],
    Tools: ["Evernote ", " Webpack ", " HackerRank "," Git "]
};

let { Languages, Frameworks, Tools } = Information;
console.log(`\n Languages: ${Languages},\n Frameworks: ${Frameworks},\n Tools: ${Tools}`);

//______________________________________________________________________________________________

/*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day18:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("\n____User Like Preference____");
function FlexibleObjectKeys (key:string, value:string) {
    let DynamicthemeObject={};
        DynamicthemeObject[key]=value;
        return DynamicthemeObject;   
}
let userlikepreference = FlexibleObjectKeys("theme","light")
console.log(userlikepreference);

console.log("\n____User Preference____");
function themeobj(key:string, value:string){
    let themeObject={};
    themeObject[key]=value;
    return themeObject;
}
let userLike = themeobj("theme","darklightshade");
console.log(userLike);

//______________________________________________________________________________________________

