
// JavaScript Lecture 5 -- CONTROL FLOW

// If / else if / else
// function: isNaN.
// If you call isNaN on something, it checks to see if that thing is not a number. So:

isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false

// Be careful: if you call isNaN on a string that looks like a number, like '42', JavaScript 
// will try to help by automatically converting the string '42' to the number 42 and return false (since 42 is a number).
// Note that you can't just do

isNaN(unicorns);
// unless you've already defined the variable unicorns. You can, however, do

isNaN("unicorns"); // => true

// Add an else if branch to your existing if/else statement. If the number put into the function
// is not a number at all, instead of return true; or return false;, the function should return 
// a string that tells the user that their input isn't a number.
var isEven = function(number) {
  // Your code goes here!
  if (number%2===0){
      return true
  }else if(isNaN(number)){
      return "Input is not a number"
  }else{
      return false
  }
};

// Switch statement
// switch allows you to preset a number of options (called cases), then check an expression to see
// if it matches any of them. If there's a match, the program will perform the action for the matching
// case; if there's no match, it can execute a default option.
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

// More switch exercise
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("that's not a candy!")
  
}

// Logical operators. 
// JavaScript has three: and (&&), or (||), and not (!).
// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

// And
// Declare your variables here!
var hungry=true
var foodHere=true

var eat = function() {
  // Add your if/else statement here!
  if(hungry&&foodHere){
      return true;
  }else{
      return false;
  }
};

// Or
// Declare your variables here!
var tired=true
var bored=false

var nap = function() {
  // Add your if/else statement here!
  if(tired||bored){
      return true
  }else{
      return false
  }
};

// Not
// Declare your variables here!
var programming=false

var happy = function() {
  // Add your if/else statement here!
  if(!programming){
      return true
  }else{
      return false
  }
};

//







