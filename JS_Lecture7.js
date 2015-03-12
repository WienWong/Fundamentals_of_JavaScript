
// JavaScript Lecture 7 -- OBJECTS I

var answer = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[58] % 8 !== 0;

// Print out the numbers from 1 - 20.
// The rules:
// For numbers divisible by 3, print out "Fizz".
// For numbers divisible by 5, print out "Buzz".
// For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
// Otherwise, just print out the number.
var lst = function(){
    for(var i=1; i<21; i++){
        if(i%15==0){
            console.log("FizzBuzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else if(i%5==0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
lst()

// Write a function named getReview that takes in a movie name and returns its review based on 
// the information above. If given a movie name not found just return "I don't know!".
var getReview = function (movie) {
    switch(movie) {
        case "Toy Story 2":
            return  "Great story. Mean prospector.";
            
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
        
        case "The Lion King":
            return "Great songs.";
    
        default:
            return "I don't know!";
    }
};

// Intro
// We have discussed four data types: numbers, strings, booleans and arrays.
// In this lesson, we focus on a fifth data type: objects. This data type is a little bit more 
// complex. Objects allow us to represent in code real world things and entities (such as a person
// or bank account). We do this by storing all relevant information in one place—an object.
var bob = { };

// Properties
// Each piece of information we include in an object is known as a property. Think of a property
// like a category label that belongs to some object. When creating an object, each property has
// a name, followed by : and then the value of that property. 
// When we have more than one property, they are separated by commas. The last property does not end with a comma.
var Spencer = {
  age: 22,
  country: "United States"
};

// Accessing Properties
// Notice that we save bob's name, "Bob Smith", into the global variable name1. 
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name
var age2 = susan.age

// Accessing Properties, Part 2
// In the last exercise, we accessed properties using what is known as dot notation.  
// So to access a property, we use ObjectName.PropertyName (e.g., bob.name)
// In addition to dot notation, we can also access properties using bracket notation. In this case 
// we use ObjectName["PropertyName"] to access the desired property. Note, we need " " around the property's name.
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];

// Another Way to Create
// The method we've used to create objects uses object literal notation—that is, creating a new 
// object with { } and defining properties within the brackets.
// Another way of creating objects without using the curly brackets { } is to use the keyword new.
// This is known as creating an object using a constructor.
// The new keyword creates an empty object when followed by Object(). The general syntax is:

var objectName = new Object();

// Inspect the susan1 object carefully and note the use of object literal notation.
// Use constructor notation to create susan2, which should have the same properties and values as susan1.

// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2["age"] = 24;

//

// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age : 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.age = 5;
buddy.species = 'golden retriever';

//

var bicycle = new Object();
bicycle.speed = 0;
bicycle.gear = 1;
bicycle.frame_material = "carbon fiber"

// Function Review
// Functions are defined using the function keyword followed by:
// A pair of parentheses ( ) with optional parameters inside.
// A pair of curly braces with the function's code inside { }.
// A semicolon ;.
// And when we call the function, we can put inputs (arguments) for the parameters.

// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function(x, y){
    return x * y;
}
multiply(3,123)

//  What's a Method?
// In the last section, we discussed properties. We can think of properties as variables associated
// with an object. Similarly, a method is just like a function associated with an object.

// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(20);
// bob's feeling old.  Use our method to set bob's age to 20

// Notice how we define setAge kind of like we define a property. The big difference is that we put
// in a function after the equals sign instead of a string or number.

// We call a method like a function, but we use ObjectName.methodName().

// Why Are Methods Important?
// Methods serve several important purposes when it comes to objects.
// They can be used to change object property values. The method setAge on line 4 allows us to update bob.age.
// They can be used to make calculations based on object properties. Functions can only use parameters as
// an input, but methods can make calculations with object properties. For example,
// we can calculate the year bob was born based on his age with our getYearOfBirth method.

var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());

// The "this" Keyword
// Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people?
// It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a 
// placeholder, and will refer to whichever object called that method when the method is actually used.
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// use bob's setAge method to change his age to 50.
bob.setAge(50)

//  By using the keyword this, setAge will change the age property of any object that calls it. Previously, 
// we had a specific object bob instead of the keyword this. But that limited the use of the method to just bob.
// Then when we say bob.setAge = setAge; (line 9), it means whenever we type bob.setAge( ), 
// this.age in the setAge method will refer to bob.age.

// We can reuse the same method for different objects! This allows us to avoid
// typing out a custom method each time. All because we used the placeholder 'this'.

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);

// Make Your Own Method
// Finish the method setWidth. It should take a parameter newWidth. It will change the property 
// width to the given parameter.
// Then use the two methods setHeight and setWidth to change rectangle's height to 6 and width to 8.
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
	this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
    this.width = newWidth;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);

// More Kinds of Methods
// Add another method called calcArea, which returns the area of 
// square in terms of sideLength. Use the calcPerimeter function as a guide.
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
    return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
    return this.sideLength * this.sideLength;
}

var p = square.calcPerimeter();
var a = square.calcArea();

// The Object Constructor
// We mentioned the term constructor back in section one, when we talked about making an object 
// using the keyword new. A constructor is a way to create an object.
// When we write bob = new Object( ); we are using a built-in constructor called Object. This 
// constructor is already defined by the JavaScript language and just makes an object with no 
// properties or methods.
// This means we have to add our properties one at a time, just like we've been doing. 
// To review, we've created bob using the constructor and defined the name property for you.
// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20
bob.age = 20;

// Custom Constructors
// But this approach of adding in properties one at a time for every object is tedious! 
// Instead of always using the boring Object constructor, we can make our own constructors.

// This way we can set the properties for an object right when it is created. So instead of
// using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.

// To see how this works, look at our Person constructor in lines 1–4. This constructor is 
// used to make Person objects. Notice it uses the keyword this to define the name and age 
// properties and set them equal to the parameters given.
// Now we can use this constructor to make our good friends bob and susan in only one line each!
// Look at lines 7–8: once we have the constructor, it's way easier to make people 
// because we can include their name and age as arguments to their respective constructors.

// Practice using the constructor to make a new Person called george, whose full name is "George Washington" and age is 275.
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

// Finish the Dog constructor we have started on line 7. 
// You can include whatever parameters and properties you want 
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, name, color){
    this.age = age;
    this.name = name;
    this.color = color;
}

// More Options
// In a constructor, we don't have to define all the properties using parameters. Look at our 
// new Person example on line 1, and see how we set the species to be "Homo Sapiens" (line 4).
// This means that when we create any Person, their species will be "Homo Sapiens". In this way,
// the values associated with name and age are not yet assigned, but species will always have the same value.

// Create a new object called sally using the Person constructor. Her name is "Sally Bowles"
// and she is 39. Create another object called holden. His name is "Holden Caulfield" and 
// he is 16. Edit the sentence printed out such that it includes the age of sally and holden respectively.
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

// Constructors With Methods
// In addition to setting properties, constructors can also define methods. 
// This way, as soon as the object is created it will have its own methods as well.

// Define a new method on line 8, calcPerimeter, which calculates and returns the 
// perimeter for a Rectangle in terms of height and width.
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return 2 * (this.height + this.width);
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

// Constructors in Review
// Constructors are a way to make objects with the keyword new. The most basic constructor 
// is the Object constructor, which will make an object with no methods or properties.

// For more complicated objects we can make our own constructors and put in whatever properties and methods we want.

// Create a new object rabbit1 with the adjective "fluffy", a new object rabbit2 with the adjective
// "happy", and a new object rabbit3 with the adjective "sleepy".
// Use the method describeMyself to print out in the console a sentence about each object you just created!
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();

// Arrays of Objects
// Remember that an object is just another type, like a string or number but more complex. 
// This means that just as we can make arrays of numbers and strings, we can also make arrays of objects.

// Here we have our Person constructor which should look familiar. We can use this constructor
// to make an array of Person objects, similar to how we might make an array of numbers but filling in people instead.

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// Loop the loop
// Arrays filled with objects will work just like arrays filled with numbers and strings.
// In the same way we may loop through an array of numbers to print them out or calculate a sum,
// we can loop through an array of objects and access properties or methods.

// Remember that we use dot notation to get the value of a property from an object:
objectName.propertyName;
// And we can use the same dot notation to get the value of a property for one particular object in an array.
arrayName[2].propertyName;

// Our Person constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for(var tmp=0; tmp<family.length; tmp++){
    console.log(family[tmp].name);
}

// Passing Objects into Functions
// In addition to making arrays of Objects, we can use objects as parameters for functions as well.
// That way, these functions can take advantage of the methods and properties that a certain object type provides.

// Take an example, in addition to our Person constructor we have introduced a new function, ageDifference
// (line 9). This function takes two Person objects as parameters, and returns the difference in age between the two people.
// Notice we would be in trouble here if we tried to call ageDifference and passed in strings instead of people, because strings
// don't have an age property. But because we know from our constructor that all Person objects will have an age property,
// we can pass any Person into ageDifference. We must be careful not to pass anything but Person objects into ageDifference.
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);


// Try it Out!
// This time try making your own function that takes objects as parameters!
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
function olderAge(person1, person2){
    if(person1.age <= person2.age){
        return person2.age;
    }else if(person1.age > person2.age){
        return person1.age;
    };
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

// What Are Objects For?
// Objects provide us with a way to represent real-world or virtual things. 
// We can do this by storing information inside the object's properties. 
// There are two basic ways to make objects:
//Literal Notation, where we use
var Name = { };

//Constructor Notation, where we use the keyword new.

var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age=22
spencer2.country="United States"

// Properties
// Properties are like variables that belong to an object, and are used to hold pieces of 
// information. Properties can be accessed in two ways:
// Dot notation, with ObjectName.PropertyName
// Bracket notation, with ObjectName["PropertyName"] (don't forget the quotes!)

var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age =  snoopy["age"];

// Customizing Constructors
// In addition to the basic Object constructor, we can define our own custom constructors. 
// These are helpful for two reasons:
// We can assign our objects properties through parameters we pass in when the object is created.
// We can give our objects methods automatically.
// These both work to save us time and lines of code when we make objects.

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");

// Methods
// Methods are like functions that are associated with a particular object.
// They are especially helpful when you want to either:
// Update the object properties
// Calculate something based on an object's properties.

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    };
};



