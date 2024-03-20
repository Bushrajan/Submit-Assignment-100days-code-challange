/* 🚀 Day 20 Challenge: Start Coding! 🚀
Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
*/
console.log(
  "\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day20:Q1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"
);
function averageScoreCalculate(...scores: number[]): number {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
console.log(
  "_Average Score Calculate = ",
  averageScoreCalculate(98, 98, 70, 60)
);
//______________________________________________________________________________________________

/*Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!*/

console.log(
  "\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day20:Q2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"
);
function Special_Number(valueadd: number): (number) => number {
  return function (number: number): number {
    return number + valueadd;
  };
}
let addTen = Special_Number(10);
console.log("Value before adding: 10 ");
console.log("Value after adding: ", addTen(10));

//______________________________________________________________________________________________

/*
Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
*/
console.log(
  "\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day20:Q3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"
);

let profile = (function () {
  let Name = "BushraJan";
  let Age = 19;

  return {
    detailsInfo: function () {
      console.log(` DetailsInfo:\n Name: ${Name},\n Age: ${Age}`);
    },
  };
})();
profile.detailsInfo();
//______________________________________________________________________________________________
