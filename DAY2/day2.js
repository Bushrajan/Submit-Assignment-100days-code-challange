"use strict";
/*🚀 Day 2 Challenge: Start Coding! 🚀

Question 1: Famous Quote: Find a quote from a famous person you admire.
Print the quote and the name of its author. Your output should look
something like the following, including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never
tried anything new.”"
Explain & TIP: Simply choose a quote you like and show it with who said it.
It's about combining text. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day2_Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
console.log(`Muhammad Ali Jinnah once said :\n \t “There are two powers in the world; one is the sword and the other is the pen.\n \t There is a great competition and rivalry between the two. There is a third \n \t power stronger than both, that of the women.” `);
//_____________________________________________________________________________________________________________________________________________________________________________________________
/* Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous
person’s name in a variable called famous_person. Then compose your message and
store it in a new variable called message. Print your message.Explain & TIP: First,
save the author's name in a variable. Next, create your quote message in another
variable. Then, show it. This teaches you to organize and use your data with
variables. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day2_Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let moon2 = "Muhammad Ali Jinnah once said :\n \t";
let message2 = " “There are two powers in the world; one is the sword and the other is the pen.\n \t There is a great competition and rivalry between the two. There is a third \n \t power stronger than both, that of the women.” ";
console.log(` ${moon2}  ${message2}`); //my try
//student_teacher wants
let moon3 = "Muhammad Ali Jinnah once said :\n \t";
let message3 = ` ${moon2} “There are two powers in the world; one is the sword and the other is the pen.\n \t There is a great competition and rivalry between the two. There is a third \n \t power stronger than both, that of the women.” `;
console.log(message3);
//_____________________________________________________________________________________________________________________________________________________________________________________________
/*Question 3: Stripping Names: Store a person’s name, and include some
whitespace characters at the beginning and end of the name. Use "\t" (tab) and
"\n" (new line) at least once. Print the name once, so the whitespace around
the name is displayed. Then print the name after stripping the white spaces.
Explain & TIP: Save a name with extra spaces or new lines around it.
Show it first with the extra space, then remove the spaces and show it clean.
This helps you learn how to clean up text. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day2_Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let moon1 = "\n\t \t \t Mamma Papa \t \n";
console.log(moon1);
console.log(moon1.trim());
// ______________________________________________________________________________________________________________________________________________________________________________________________
