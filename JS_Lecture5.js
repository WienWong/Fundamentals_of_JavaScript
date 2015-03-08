
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

// Adventure 2

// 1. Prompt the user for input and store it in a variable called user. 
var user=prompt("What's your hobby");

// 2. Call either .toUpperCase() or .toLowerCase() on your prompt to ensure that the input you 
// get from the user is capitalized the way you expect.
var user=prompt("What's your hobby").toUpperCase();

// 3. Add a switch statement that will test for several different cases (that is, different possible user inputs). 

var user=prompt("What's your hobby").toUpperCase();

switch(user){
    case "Programming".toUpperCase():
        console.log("This is fantastic!");
        break;
    case "Swimming".toUpperCase():
        console.log("Great!");
        break;
    case "Meditation!".toUpperCase():
        console.log("Awesome!");
        break;
    case "Football game".toUpperCase():
        console.log("Same as me");
        break;
    default:
        console.log("I don't like your hobby.")
    
}

// 4. Add some if/else statements to your cases that check to see whether one condition and 
// another condition are true, as well as whether one condition or another condition are true. 
// Use && and || at least one time each.
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}



