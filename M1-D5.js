/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/*function area(l1 ,l2){
    console.log(l1 *l2)
   // return l1 + l2 
}
area(5,6)*/
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

// const crazySum = function(x1,x2){
//     if(x1 != x2){
//         return x1+x2;
//     } else{
//         let sum = x1 + x2;
//         console.log(sum * 3); 
//     }
// }
// crazySum(4,4)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

// const crazyDiff = function(y1,y2 = 19){
//    // console.log(y2-y1);
//     let diff = y2 -y1 ;
//     console.log(diff * 3); 

// }
// crazyDiff(15)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

// const boundary = function(n){
//     if (n >= 20 && n <=100 || n == 400){
//         console.log(true);  
//     }
//     else {
//         //return false
//         console.log(false);
//     }

// }
// boundary(400)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// const strivify = function(firstString){
//     if(firstString == "Strive" ){
//         console.log(firstString);
//     }
//     else{
//         console.log("Strive" + firstString);
//     }
// }
// strivify("Strive")

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

// const check3and7 = function(num1){
//     if(num1 % 3 == 0 || num1 % 7 == 0){
//         console.log(`${num1} This number multiple of 3 and 7`);
//     }
// }
// check3and7(21)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

// const reverseString = function(strive){
//     console.log(strive.split("").reverse().join(""));
// }
// reverseString("world")
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/


// const upperFirst = function(str){
//     console.log(str.split("").);
//     // console.log(str.toUpperCase(str[0]));

// }
// upperFirst("apple, avacado")
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(apple){
    console.log(apple.split("").slice(1,-1).join(""));
     }
     cutString("apple")

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
