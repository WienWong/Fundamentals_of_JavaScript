
// JavaScript Lecture 1 -- INTRODUCTION TO JAVASCRIPT

"yourName".length

// What can we use JavaScript for?

Make websites respond to user interaction
Build apps and games (e.g. blackjack)
Access information on the Internet (e.g. find out the top trending words on Twitter by topic)
Organize and present data (e.g. automate spreadsheet work; data visualization)

// an example of how JavaScript can be interactive!
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

// You can ask for input with a prompt.
prompt("What is your name?");

"I'm coding like a champ".length > 10   // true

// console.log() will take whatever is inside the parentheses and log it to the console below your code.
console.log(2*5);
console.log("Hello");

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 == 16);
// Decisions
if ( "Xiaoming is smart!".length > 10) {
    console.log( "Smart should service the society");
}

//
if ( "myName".length >= 7 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    console.log("You have a short name!");
    
}

//
if("myname".length > 7){
    console.log("The condition is true");
}
else{
    console.log("The condition is False");
}

// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

//
if ("Jon".length * 2 / (2+1) < 20)
{
    console.log("The answer makes sense!");
} 
else {
    console.log("The answer deosn't make sense!");
}

// "some word".substring(x, y) where x is where you start chopping and y is where you finish 
// chopping the original string. The number part is a little strange. To select for the "he" 
// in "hello", you would write this:
"hello". substring(0, 2);
// Each character in a string is numbered starting from 0, like this:

0 1 2 3 4
 | | | | | 
 h e l l o
// The letter h is in position 0, the letter e is in position 1, and so on.
// Therefore if you start at position 0, and slice right up till position 2, you are left with just he

// Find the 4th up to and including the 7th letter of the string "wonderful day".
// Remember to start counting from 0. In other words, the 1st letter starts at position 0, the 2nd letter 
// starts at position 1, and so on.
"wonderful day".substring(3,7);

// 
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));

// Variables
var myAge = 90;
console.log(myAge);

// More Variable Practice
// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "China";

// Use console.log to print out the length of the variable myCountry.
console.log( myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log( myCountry.substring(0,3));

// Change variable values
// On line 2, declare a variable myName and give it your name.
var myName ="Jack";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);

// Check if the user is ready to play!
var age = prompt("What's your age?");
if(age>13){
    console.log("You are allowed");
}
else
{
    console.log("You are allowed but I take no responsibility");
}

// 
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

// Check if the user is ready to play!
var age = prompt("What's your age?");
if(age > 13){
    console.log("You are allowed");
}
else
{
    console.log("You are allowed but I take no responsibility");
}
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer=prompt("Do you want to race Bieber on stage?");

if(userAnswer == "yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("rate the game out of 10");

if(feedback > 8){
    console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}

