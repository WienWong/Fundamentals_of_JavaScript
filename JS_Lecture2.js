
// JavaScript Lecture 2 -- FUNCTIONS

var speed = 65;

// Complete the condition in the ()s on line 4
if (speed > 80 ) {
	// Use console.log() to print "Slow down"
	console.log("Slow down")
} 
else {
	// Use console.log() to print "Drive safe"
    console.log("Drive safe")
};

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
divideByThree(6);

// 
var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};
greeting("Tom");

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function (food){
    console.log("I want to eat" + " " + food);
}
foodDemand("apple");

// At the end of each line of code (within the { }) and after the entire function (after the { }), 
// please put a semi-colon. The semi-colon acts like a period in a sentence. It helps the computer
// know where there are stopping points in the code.

// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

greeting var func{name}(console.log(name)))} 

// fixed one
var greeting = function (name){
    console.log(name);
};
greeting("Hello");

//
var orangeCost = function(price){
    console.log(price * 5);
};
orangeCost(5);

// The return keyword simply gives the programmer back the value that comes out of the function. 
// So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(2);
console.log(newNumber);

// Define quarter here.
var quarter = function(number){
    return number / 4;
}


if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
};

// Functions with two parameters
var perimeterBox = function(length, width){
    return length + length + width + width;
};
perimeterBox(2,4);

// Global vs Local Variables
// Variables defined outside a function are accessible anywhere once they have been declared.
// They are called global variables and their scope is global.

// For example:

var globalVar = "hello";

var foo = function() {
    console.log(globalVar);  // prints "hello"
}

// The variable globalVar can be accessed anywhere, even inside the function foo.
// Variables defined inside a function are local variables. They cannot be accessed outside of that function.

// For example:

var bar = function() {
    var localVar = "howdy";
}

console.log(localVar);  // error
// The variable localVar only exists inside the function bar. Trying to print localVar outside the function gives a error.

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ");
console.log(my_number);

// Change line 4 to use the var keyword. Notice that the value of my_number in the function is now 14 and outside 
// the function is 7. Using my_number without the var keyword refers to the global variable that has already been 
// declared outside the function in line 1. However, if you use the var keyword inside a function, it declares 
// a new local variable that only exists within that function.

// Fixed version
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

// Functions recap
var nameString = function (name) {
	return "Hi, I am" + " " + name;
};
console.log(nameString("Tom"));

// Functions & if / else

var sleepCheck = function(numHours){
    if(numHours >= 8){
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else{
        return "Get some more shut eye!";
    }
};
sleepCheck(4)

// Rock paper scissors 
// Computer Choice
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice <= 0.33){
    var computerChoice = "rock";
}
else if (0.34 <= computerChoice <= 0.66){
    var computerChoice = "paper";
}
else{
    var computerChoice = "scissors";
};

// 
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 == choice2){
        return "The result is a tie!";
    }else if(choice1 == "rock"){
        if(choice2 == "scissors"){
            return "rock wins"
        }else{
            return "paper wins"
        }
    }else if(choice1 == "paper"){
        if(choice2 == "rock"){
            return "paper wins"
        }else {
            return "scissors wins"
        }
    }else{
        if(choice2 == "rock"){
            return "rock wins"
        }else{
            return "scissors wins"
        }
    }
};

compare (userChoice, computerChoice);

// Below are some ideas:

// What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
// What if players in the game could also choose Rope in this game?
// In this version, if both players make the same choice, the game returns a tie. What if the game
// didn't end there but instead asked both players for new choices?









