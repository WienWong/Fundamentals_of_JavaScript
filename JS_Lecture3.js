
// JavaScript Lecture 3 -- 'FOR' LOOPS 

for (var i = 10; i >= 0; i--) {
    console.log(i);
}

// 

for (var i = 100; i > 0; i-=5) {
    console.log(i);
}

// arrays
// Syntax:
var arrayName = [data, data, data];
// Any time you see data surrounded by [ ], it is an array.

// Array positions
// First element in the array: junkData[0]
// Third element in the array: junkData[2]
// Arrays have 0-based indexing, so we start counting the positions from 0.

// Loops and arrays 
// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Ankang"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

//
names=["a","b","c","d","e"];

for(var i=0; i<names.length; i++){
    console.log("I know someone called " + names[i])
};

// Search Text for Your Name

// Loop through the array,
// Compare each letter to the first letter of your name, and if it sees that letter:
// It will push that letter and all the letters that follow it to an array, stopping when the number
// of letters it pushes are equal to the number of letters in your name.

// Your first "for" loop
// Create a for loop that starts at 0, continues until it reaches the end of text, and increments by 1 each time.

// Your "if" statement
// We'll want to place the if statement inside our for loop to make sure the program checks the if
// statement each time it moves forward through the loop. Essentially, the for loop is saying: 
// "Hey program! Go through every letter in 'text'." The if statement will say: if you see something
// interesting, push that text into an array!"

// You can treat a string like an array of characters. For instance, you know that

var myArray = ['hello', 'world'];
myArray[0];    // equals 'hello'
//But this also works on strings!

var myName = 'Eric';
myName[0];    // equals 'E'

// Your second "for" loop
// This loop will make sure each character of your name gets pushed to the final array. The if 
// statement says: "If we find the first letter of the name, start the second for loop!" This 
// loop says: "I'm going to add characters to the array until I hit the length of the user's name."

// For your second for loop, keep the following in mind:
//First, you'll want to set your second loop's iterator to start at the first one, so it picks up
// where that one left off. If your first loop starts with

for(var i = 0; // rest of loop setup
// your second should be something like

for(var j = i; // rest of loop setup
// Second, think hard about when your loop should stop.
// Finally, in the body of your loop, have your program use the .push() method of hits. Just like
// strings and arrays have a .length method, arrays have a .push() method that adds the thing 
// between parentheses to the end of the array. For example,

newArray = [];
newArray.push('hello');
newArray[0];   // equals 'hello'

for(var j=i; j<myName.length; j++)
// Careful: your second 'for' loop should stop when it reaches its current point in the string + myName.length.
for(var j=i; j< i+myName.length; j++)

// Thus should be
/*jshint multistr:true */

var text = "Hey, how are you doing? The weather is very good \
 Her name is Emily. My name is Wien.";

var myName = "Wien";

var hits = [];

for(var i=0; i<text.length; i++){
    if(text[i] === "W"){
        for(var j=i; j<(i+myName.length); j++){
            hits.push(myName); // Should be hits.push(text[j]);
        }
    }
};

// 
/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
    if (text[i] === "E") {
        // If we find it, add characters up to
        // the length of my name to the array
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}

//  this system isn't perfect. For instance, if the paragraph contains both "Eric" and "Eddie", we'll see this in our hits array:

['E','r','i','c','E','d','d','i','e'];
// Think about how you might fine-tune this program to make sure it only finds exact matches for your name.
// Search the Internet to see if there are any built-in JavaScript string methods that can help!




