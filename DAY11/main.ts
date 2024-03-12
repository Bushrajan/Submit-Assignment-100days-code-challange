/* 🚀 Day 11 Challenge: Start Coding! 🚀

Question 31: No Users: Ensure your user list isn’t empty.
Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
Answer: Please try to do it yourself first!
*/
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day11_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let usernames: string[] = [];

if (usernames.length == 0) {
    console.log("We need to find some users!");
} else {
    console.log("_Greeting User_");

}
//_________________________________________________________________________________________________________________________
/* Question 32: Checking Usernames: Ensure uniqueness in usernames.
Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case- insensitive comparisons. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day11_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

let current_users: string[] = ["user_1", "admin", "user_2", "user_3", "user_4"];
let new_users: string[] = ["user_5", "user_6", "admin", "user_7"];

new_users.forEach(newUsers => {
if (current_users.some(currentUser => currentUser.toLowerCase() == newUsers.toLowerCase())) {
    console.log(`${newUsers} will need to enter a newusername.`);
    }
 else {
    console.log(`${newUsers} is available.`);
    }
});


// _______________________________________________________________________________________________________________________
/* Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day11_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");

let n: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

n.forEach(n => {
    let suffix = "th";
    if (n == 1) {
        suffix = "st";
    } else if (n == 2) {
        suffix = "nd";
    } else if (n == 3) {
        suffix = "rd";
    }
    console.log(`${n} ${ suffix } `);
});
                // suffexic new element 
//______________________________________________________________________________________________

//______________________________________________________________________________________________
