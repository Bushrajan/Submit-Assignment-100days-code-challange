
/*
Day-69 of 100-Days-Of-Code Challenge
Day-69 Task:

Learn about TypeScript enums by using the following guide and coding along with the examples provided in it:

Enums in TypeScript
Please make sure to commit your code to GitHub and tag and mention us on LinkedIn. */
console.log("\nxxxxxxxxx DAY69 xxxxxxxxxxxx\n");
console.log(" Enums in TypeScript are a way to define a set of named constant values representing discrete options or categories. They provide a convenient means to work with descriptive values in a more readable and expressive way. In essence, enums allow you to create a new data type composed of predefined, related values. ");

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
const today: Days = Days.Thursday;
console.log(`\n\nToday is ${Days[today]}`);

enum Vegetables{
    Bhindi,
    tori,
    shimlamirch,
    teendy,
    kraly,
    gajr,
    moli, 
}
const tomorrow: Vegetables = Vegetables.shimlamirch;
console.log(`\n\nWanna eat  ${Vegetables[tomorrow]} tomorrow`);
