"use strict";
/* 🚀 Day 14 Challenge: Start Coding! 🚀

Question 40: Album: Create objects for music albums.
Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day14 _ Q1: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(album("Artist 1", "The 1st Album"));
console.log(album("Artist 2", "The 2nd Album"));
console.log(album("Artist 3", "The 3rd Album", 12));
//____________________________________________________________________________________________
/*  Question 41: Magicians: Display magician names from an array.
Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day14 _ Q2: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
let Magicians = ["Diya", "John", "Bilal"];
function show_magicians(Magicians) {
    Magicians.forEach(Magician => {
        console.log(Magician);
    });
}
show_magicians(Magicians);
//________________________________________________________________________________________________
/* Question 42: Great Magicians: Add "the Great" to magician names.
Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference. */
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day14 _ Q3: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n");
function Great_Magicians(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " the Great magician. ";
    }
}
Great_Magicians(Magicians);
show_magicians(Magicians);
//________________________________________________________________________________________________
