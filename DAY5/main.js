/* 🚀 Day 5 Challenge: Start Coding! 🚀

Question 13: Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” Explain & TIP: Arrays help you group related items,
like types of transportation. This way, you can talk about each one using a loop. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day5_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var array = ['Bike', 'Car ', 'Trola'];
array.forEach(function (array) {
    console.log("".concat(array, " \u201CI would like to own a Honda motorcycle.\u201D "));
});
//____________________________________________________________________________________________________________________________
/* Question 14: Guest List: If you could invite anyone, living or
deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. Explain & TIP: Just like with transportation, you can use an array to manage a list of guests.
Loop through the list to send each one a personal invitation. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day5_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var guests = ['Lee John', 'Victoria', 'Sofy'];
guests.forEach(function (guests) {
    console.log("".concat(guests, " is invited at dinner. "));
});
// let g_l:string[]=['ab','ba','bbaa']
// guests.forEach(g_l=>{
//     console.log(`${g_l} is alphabhets. `)
// });                                                      //practice more 
//___________________________________________________________________________________________________________________________
/* Question 15: Changing Guest List: One of your guests can't make it to the
dinner, so you need to send out a new set of invitations with a replacement guest.
Explain & TIP: Arrays are flexible. You can replace an item if someone can't make
it, then loop through the list again for new invitations. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day5_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
var notattened = ['Sofy'];
console.log("".concat(notattened, " can't make it to the dinner."));
var attenedmember = 'Hina';
guests[guests.indexOf("".concat(attenedmember))] = attenedmember;
guests.forEach(function (guests) {
    console.log("".concat(guests, " invitation with a new guest"));
});
