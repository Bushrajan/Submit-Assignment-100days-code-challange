"use strict";
/*  🚀 Day 6 Challenge: Start Coding! 🚀

Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.  */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day6_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let guests = ['Lee John', 'Victor'];
guests.forEach(guests => {
    console.log(`${guests} I've found a bigger dinner table.`);
});
console.log("\n");
guests.unshift("Hena Montena");
guests.push("Aliya");
guests.splice(2, 0, "Hiyeen");
guests.forEach(guests => {
    console.log(`${guests} & invitation is still on... `);
});
/* Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,and you can only invite two guests. Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day6_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log("Something happend, So I can only invite two people at dinner.");
console.log(`\n`);
while (guests.length > 2) {
    let cuttingguest = guests.pop();
    console.log(`Unfortunately ${cuttingguest} is not coming for dinner `);
}
console.log(`\n`);
guests.forEach(guests => {
    console.log(`${guests}'s invitation is still on... `);
});
console.log("\n");
guests.splice(0, guests.length);
console.log(`${guests}Sorry, Dinner is cancel.`);
/*  Question 18: Seeing the World: Think of at least five places you’d like to visit. Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day6_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let Fav_Places = ["Norway", "France", "Japan", "Itlay", "Thailand"];
console.log("Original order Array: ", Fav_Places);
console.log("Sort order Array: ", Fav_Places.sort());
console.log("Alphabets order Array: ", Fav_Places.reverse());
console.log("Original order Array: ", Fav_Places);
console.log("Reverse  order Array: ", Fav_Places.reverse());
console.log("Original order Array: ", Fav_Places.reverse());
Fav_Places.sort();
console.log("Alphabets order Array: ", Fav_Places);
Fav_Places.reverse();
console.log("Reverse alphabets order Array: ", Fav_Places);
