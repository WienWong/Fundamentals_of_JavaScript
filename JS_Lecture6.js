
// JavaScript Lecture 6 -- DATA STRUCTURES

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2])

//
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length)

// Iterating over an array
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i<languages.length; i++){
    console.log(languages[i])
}

// A heterogeneous array, which means a mixture of data types, like so:
var mix = [42, true, "towel"];

var myArray = [23, true, "youtube"]

// A two-dimensional array by nesting arrays one layer deep, like so:
var twoDimensional = [[1, 1], [1, 1]]

var newArray = [[1,1,1],[2,2,2],[3,3,3]]

// Jagged arrays
// You may have three elements in the first row, one element in the second row, 
// and two elements in the third row.
var jagged = [[1,2,3], [2,3], 1, "youtube"]

// Nouns and verbs together
// In English, you have nouns (which you can think of as "things") and verbs (which you can think
// of as "actions"). Until now, our nouns (data, such as numbers, strings, or variables) and verbs
// (functions) have been separate.
// Using objects, we can put our information and the functions that use that information in the same place.
// You can also think of objects as combinations of key-value pairs (like arrays), only their keys don't
// have to be numbers like 0, 1, or 2: they can be strings and variables.
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();
// Calling Oxnard Montalvo at (555) 555-5555...
// The phonebookEntry object handled data (a name and a telephone number) as well as a procedure (the function 
// that printed who it was calling).

// Object syntax
// In that example, we gave the key name the value 'Oxnard Montalvo' and the key number the value
// '(555) 555-5555'. An object is like an array in this way, except its keys can be variables and strings, not just numbers.
// Objects are just collections of information (keys and values) between curly braces, like this:

var myObject = {
    key: value,
    key: value,
    key: value
};

// one example
var me={
    name: "Wien",
    age : 100
};

// There are two ways to create an object: using object literal notation (which is what you just did) 
// and using the object constructor.
// Literal notation is just creating an object with curly braces, like this:
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var emptyObj = {};
// When you use the constructor, the syntax looks like this:
var myObj = new Object();
// This tells JavaScript: "I want you to make me a new thing, and I want that thing to be an Object.

// You can add keys to your object after you've created it in two ways:

myObj["name"] = "Charlie";
myObj.name = "Charlie";
// Both are correct, and the second is shorthand for the first. See how this is sort of similar to arrays?

// Recreate your me object in the editor, but this time, use the object constructor.
var me  = new Object();
me.name = "Wien";
me.age  = 100;

var object1 = new Object();
var object2 = new Object();
var object3 = new Object();
object1.name= "Lucy";
object1.age = 23;
object2["name"] = "Lily";
object2["age"]  = 23;
object3.thing   = "cat";
object3["color"] = "black";

// Heterogeneous arrays review
var thing = new Object();
var myArray = [10, true, "cat", thing];

// Multidimensional arrays review
var thing = new Object();
var newArray = [[1,2,3.4], [thing, "dog"], "cat", ];

// Editing an existing object
var myObject = {
    name : 'Eduardo',
    type : 'Most excellent',
    // Add your code here!
    interests : ["Programming", "Swimming", "Cooking"],
    age  : 22
};

// Creating your own objects
var myOwnObject = new Object();
var myOwnObject2 = new Object();
myOwnObject["name"] = "object";
myOwnObject.span = 120; 
myOwnObject.lst = ["dog", "cat", [2, 3], myOwnObject2];

// Contact List

var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
    for(var prop in obj) {
        console.log(prop);
    }
};

var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};

list(friends);
search("Steve");

// Creating your contact object
var friends = new Object();
friends.name = "Tom";
friends["age"] = 26;

// Adding your friends
// Add a few empty objects to your friends object. Make sure you add a friend named 'bill' and
// a friend named 'steve'. Use your friends' names as the keys for the empty objects.
// You can add objects directly to friends, like this:

var friends = {
    bill: {},
    steve: {}
};
// Or with the bracket ([]) or dot(.) notation, like this:

friends["bill"] = {};
friends.steve = {};
// Or with Object constructors, like this:
var friends = new Object();
friends.bill = new Object();
friends.steve = new Object();

// Adding properties
// Give each of your friends a firstName, lastName, and number. 
// The value for each of these should be a string.
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555"
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(207) 444-4444"
    }
};

// Or
friends["bill"] = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555"
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(207) 444-4444"
};

// Tossing in an array
// Add an address property to each of your friends and set that property equal to an array value.
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(207) 444-4444",
        address: ['Two Apple Way','Redmond','LA','98034']
    }
};

// List 'em all!
// Let's add a couple of functions to help us go through our contacts.
// The first function we'll create will be called list, and it will print
// out all the entries we have in our friends object. syntax: a for/in loop.
for (var key in object) {
  // Access that key's value
  // with object[key]
}

// Create a function list that takes a single parameter.
// In the body of the function, write a for/in loop.
// In the loop, use console.log to print out the key. (For example, if you only have bill 
// and steve as entries, list should just print out "bill" and "steve".)
// Here's how to create a function:

var list = function (friends) {
  // Do something here
}

// Here's how to use console.log:

console.log("Printing a string");
var myString = "Awesome!";
console.log(myString);

//

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(207) 444-4444",
        address: ['Two Apple Way','Redmond','LA','98034']
    }
};
var list = function(obj){
    for (var key in obj){
        console.log(key);
    }
};

// Search for a friend
// The second function we'll add will be called search, and it will take a first name as 
// an argument. It will try to match the first name it receives to any of the first names 
// in our friends contact list. If it finds a match, it will log our friend's contact 
// information (firstName, lastName, number, address) to the console.

// Define a function search that takes a single argument, name. If the argument passed to the 
// function matches any of the first names in friends, it should log that friend's contact 
// information to the console and return it.
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(207) 444-4444",
        address: ['Two Apple Way','Redmond','LA','98034']
    }
};
var list = function(obj){
    for (var key in obj){
        console.log(key);
    }
};

var search = function(name){
    for(var key in friends){
        if(friends[key].firstName===name){
            console.log(friends[key]);
            return friends[key]
        }    
    }
};

// result
bill
steve
{ firstName: 'Steve',
  lastName: 'Jobs',
  number: '(207) 444-4444',
  address: [ 'Two Apple Way', 'Redmond', 'LA', '98034' ] }
{"firstName":"Steve","lastName":"Jobs","number":"(207) 444-4444","address":["Two Apple Way","Redmond","LA","98034"]}

// We did some basic logging of your contact list to the console, but we could 
//have made it look even nicer. How might you format the output to look like this?

First Name: Steve
Last Name: Jobs
Number: (408) 555-5555
Address: 1 Infinite Loop
         Cupertino, CA 95014


