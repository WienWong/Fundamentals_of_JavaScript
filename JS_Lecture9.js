
// JavaScript Lecture 9 -- Introduction to Objects II

// 1. An Objective Review
var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);

// 2. Fun with Functions
// Recall that we can add methods (i.e., functions associated with objects) to a constructor:

function someObject() {
    this.someMethod = function() {
    };
}

// Add a speak method to the Person constructor. Whenever speak is called, it should print "Hello!" to the console.
function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!")
    }
    
}

var user = new Person("Codecademy Student",false);
user.speak();

// Literally Speaking
// In the last exercise, we added methods to objects via constructor notation. We can also add methods to objects in literal notation:

var someObj = {

aProperty: value,
someMethod: function(some, params) { }

};
// When we call someObj.someMethod(some, values);, the code between the curly brackets { } will run.
var james = {
    job: "programmer",
    married: false,
    speak: function(word) {
        if(word=="great"){
            console.log("Hello, I am feeling great");
        }else if(word=="just okay"){
            console.log("Hello, I am feeling just okay");
        }
    }
};

james.speak("great");
james.speak("just okay");

// Can I See Your References?
// Remember when defining a method for an object, it's easy to reference other properties in that object:
// just use this.propertyName!
// When that method is called, this.propertyName will always refer to the most recent value of propertyName.

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

// Who's in Your Bracket?
// And finally, let's go over retrieving property values. Throughout this section, 
// we've been using dot notation to get the value of an object's property:

someObj.propName;
// However, remember that we can also use bracket notation:

someObj["propName"];
// An advantage of bracket notation is that we are not restricted to just using strings 
// in the brackets. We can also use variables whose values are property names:

var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];
// The last line is exactly the same as using someObj["propName"];.

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job"; 
// set aProperty to a string of the first property in james (ie. the job property).

// print the value of the first property of "james" 
// using the variable "aProperty"

console.log(james[aProperty]);


// I.D., Please
// Say we have a variable thing and we don't know what type thing is. We can call typeof thing to
// figure this out. Generally, the most useful types are "number," "string," "function," and "object."
// As an example, the following example will print "object":
var someObject = {someProperty: someValue};
console.log( typeof someObject );

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"

// Know Thyself
// Every object in JavaScript comes with some baggage (stay tuned for more on this!). Part of this baggage 
// includes a method called hasOwnProperty. This lets us know if an object has a particular property.
var myObj = {
    name: "Tom",
    age: 24
};

console.log( myObj.hasOwnProperty('name') );     // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

// Dressed to Impress
// Let's get some practice working with hasOwnProperty. It is an invaluable tool when working with objects!
var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty("shorts")==true){
    console.log(suitcase.shorts);
}else{
    suitcase.shorts = "H&M";
    console.log(suitcase.shorts);
}

// Getting IN-timate
// Now let's learn how to work with all the properties that belong to an object. First, let's define an object:

var dog = {
species: "bulldog",
age: 3,
color: brown
};
// To print out all elements, we can use a for/in loop, like this:

for(var property in dog) {
    console.log(property);
}
// In the loop we use console.log to print out each key. Remember the "property" bit can be any placeholder name you like.
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc){
    console.log(property);
};

// result
fullName
mayor
population
boroughs

// List ALL the Properties!
// But how do we print out all the values associated with every property? 
// The for-in loop will be our friend again! Let's get there slowly. Our dog object can help us.

var dog = {
species: "bulldog",
age: 3,
color: brown
};

// First, remember that
dog.species = dog["species"] = "bulldog";

// And if we say:

var x = "species";

// then

dog[x] = "bulldog";

// We see that by assigning the property name to a variable, we can then use the variable name in
// bracket notation to get the property's value. So to get all the values from the dog object, we
// would use the for-in loop and the bracket notation we just saw above. 

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var value in nyc){
    console.log(nyc[value]);
}
// result
New York City
Bill de Blasio
8000000
5

// Class is in Session
// Let's start by introducing classes. We learned in the last course that constructors are a way 
// to make objects, but they actually do even more than that.
// When you make a constructor, you are in fact defining a new class. A class can be thought of as
// a 'type', or a category of objects—kind of like how 'Number' and 'String' are types in JavaScript.
// Take a look at our Person example taken from Introduction to Objects I. In this case bob and susan
// are two separate objects, but both belong to the class Person.

// Make your own class, Circle, by building a constructor for it. The constructor for Circle should 
// have one property, radius, and take one argument for the initial radius.
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius){
    this.radius = radius;
}

var cir = new Circle(6);

// Teach Snoopy
// So we know that a class will have certain properties and methods, but what keeps track of 
// what a given class can or can't do? What a class has or doesn't have? That is the job of the 'prototype'.

// JavaScript automatically defines the prototype for class with a constructor. For example, 
// our Dog constructor ensures that the Dog prototype has a breed property. Remember, the Dog
// prototype keeps track of what Dog has, doesn't have, can, or can't do.
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
    console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function(){
    console.log("Miao!");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

// How do Classes Help Us?
// Classes are very important in object-oriented programming. This is because a class tells us 
// helpful information about objects, and you can think of an object as a particular instance of a class.
// For example, look at our Person class again in the console. We know that any Person will have
// a name and age, because they are in the constructor. This allows us to create a function 
// like printPersonName, which will take a Person as an argument and print out their name.
// We know the function will work on any Person, because name is a valid property for that class.
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Wien Wong", 100);
printPersonName(me);

// Prototype to the Rescue
// Here we have very similar code as last time, but there is an important difference. 
// Instead of using buddy.bark to add the bark method to just the buddy object, we use
// Dog.prototype.bark.

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// this time it works!
snoopy.bark();

// Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even
// though we haven't added a bark method to that object. How is this so? Because we have now
// changed the prototype for the class Dog. This immediately teaches all Dogs the new method.

// In general, if you want to add a method to a class such that all members of the class can 
// use it, we use the following syntax to extend the prototype:

className.prototype.newMethod =

function() {
statements;
};

//
//
//

// Prototype Practice
// Here we have created a new class, Cat, and its constructor. We also have two cats that would
// like to meow, but currently Cats have no meow method.
// Add a meow method to the Cat prototype so that all cats can now meow. 
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function(){
    console.log("Meow!");
}

// add code here to make the cats meow!
cheshire.meow();
gary.meow();

// It's All in the Genes
// In object-oriented programming, 'inheritance' allows one class to see and use 
// the methods and properties of another class.

// Let's just refresh our memories about how classes and objects work.
// Create a class named Animal with two properties, name and numLegs. The Animal constructor 
// should have two arguments whose values are assigned to name and numLegs.
// Next, change the prototype of Animal and add a method sayName that prints to the console
// "Hi my name is [name]", where [name] is the value of name.

// create your Animal class here
var Animal = function(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Animal.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);   
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

// Marching Penguins
// Create a brand new Penguin class constructor starting in line 11. A penguin is an animal so
// it should also have the name and numLegs properties as well as a sayName method that prints
// the same thing as Animal's sayName method.

// We're not done with animals yet, so we have still included the Animal constructor and its 
// sayName method. The last two lines test your Penguin code.
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// create a Penguin constructor here
function Penguin(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
}

// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

// DRY Penguins
// A Penguin is an Animal, so they should have all the same properties and methods as Animal. 
// Whenever this X is-a Y relationship exists, there's a good chance that we should be using inheritance.

// Remember, inheritance lets us see and use properties and methods from another class. To say
// that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name =  name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
// This means that Penguin inherits properties and methods from Animal.

// Black (and White) Penguin Magic
// Create a Penguin object with the variable name penguin and any name you'd like.
// Then call penguin.sayName();.

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name =  name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("QQ");
penguin.sayName();

// Penguins, Properties, and the Prototype
// We now explore how classes can inherit properties as well.
// For simplicity, we've defined a new Penguin class that doesn't inherit anything from Animal.

// Create an Emperor class that takes a single name parameter and sets its name property to 
// be this value. Don't set a numLegs property in the constructor.
// Similar to what we did in the previous exercise, make Emperor inherit from Penguin by 
// setting the 'prototype' of Emperor to be Penguin.
// Create a new emperor object that is an instance of the Emperor class with any name you'd like.
// Then use console.log to print the number of legs emperor has—this should have been inherited from Penguin!
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name){
    this.name = name;
}

Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("EeeYaa");
console.log(emperor.numLegs);


// Up the Food-I-mean-Prototype Chain
// The "prototype chain" in JavaScript knows this as well. If JavaScript encounters something 
// it can't find in the current class's methods or properties, it looks up the prototype chain 
// to see if it's defined in a class that it inherits from. This keeps going upwards until it 
// stops all the way at the top: the mighty Object.prototype (more on this later).
// By default, all classes inherit directly from Object, unless we change the class's prototype,
// like we've been doing for Penguin and Emperor.

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying );  // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true

// Open to the Public
// In JavaScript all properties of an object are automatically public. Public means that they can
// be accessed outside the class. Think of these properties as the information a class is willing to share.
// Look at the Person class. It has 3 public properties: firstName, lastName, and age. On lines 8 and 9, 
// we access the firstName and lastName properties of john and assign them to myFirst and myLast.
// Notice that we are free to access the firstName and lastName properties, which is what we mean 
// when we say they are public.

function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.
var myAge = john.age;

// Private Variables
// Good! But what if an object wants to keep some information hidden?
// Just as functions can have local variables which can only be accessed from within that function,
// objects can have private variables. Private variables are pieces of information you do not want 
// to publicly share, and they can only be directly accessed from within the class.

// The Person class has been modified to have a private variable called bankBalance.
// Notice that it looks just like a normal variable, but it is defined inside the 
// constructor for Person without using this, but instead using var. This makes bankBalance a private variable.

// Accessing Private Variables
// Although we cannot directly access private variables from outside the class, there is a way to get around this.
// We can define a public method that returns the value of a private variable.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

// Private Methods
// Why did that code work? An object's private variables can only be accessed by other methods 
// that are part of that same object. So, we just used an object's public method to access a private variable!

// Methods can also be private within a class and inaccessible outside of the class. Changing this.returnBalance
// from the last exercise to var returnBalance makes this method private. If you run the program trying to
// access the method you get an undefined error this time.

// The way to access a private method is similar to accessing a private variable. You must 
// create a public method for the class that returns the private method.


// Create a method called askTeller within the Person class that returns the returnBalance method.
// This means that it returns the method itself and NOT the result of calling that method. 
// So you should NOT have parentheses after returnBalance.

// Because askTeller returns a method, we need to call it to make it any use. This is what var myBalance = myBalanceMethod(); does.

// Hint
// Your method should resemble how we defined getBalance last time—you should use this.askTeller
// = function() { }. Don't declare askTeller with var.

// You return method the same way that you would return simple variables. Be careful not to call
// the method though and leave out parentheses in your return statement!
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function(){
       return returnBalance;
   };
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

// Passing Arguments
// The askTeller function has been modified within the Person class to directly give you your
// balance. However, it now needs the account password in order to return the bankBalance.
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);

// Looks For-In To Me
// Recall the for-in loop:

for(var x in obj) {
executeSomething();
}
// This will go through all the properties of obj one by one and assign the property name 
// to x on each run of the loop.

// Examine the languages object. Use a for-in loop to print out the three ways to say hello. 
// In the loop, you should check to see if the property value is a string so you don't accidentally print a number.

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(property in languages){
    if(typeof languages[property] == "string"){
        console.log(languages[property]);
    }
};


// Hello? Yes, This is Dog
// We should all know by now what's so cool about using prototype: we can define a method for 
// a class, and any instance of the class (i.e., object created using that class's constructor) can use that method.
// Remember that classes and the prototype are important to OOP!

// Add the sayHello method to the Dog class by extending its prototype.
// sayHello should print to the console: "Hello this is a [breed] dog", where [breed] is the dog's breed.
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a " + this.breed + " dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();


// So Meta I Can't Take It!
// If we have just a plain object (i.e., not created from a class constructor), recall that it automatically
// inherits from Object.prototype. Could this be where we get hasOwnProperty from? How can we check?

// Let's first see what type Object.prototype is. Do this in line 2 and save it into prototypeType.
// If all goes well, you should realize that Object.prototype itself is an object! And since all 
// objects have the hasOwnProperty method, it's pretty easy to check if hasOwnProperty comes
// from Object.prototype. Do this in line 6 and the result may be surprising.

// Hint
// To see what type Object.prototype is, we should use typeof Object.prototype.
// The property we want to check for is actually "hasOwnProperty", so line 6 should look like:
// Object.prototype.hasOwnProperty("hasOwnProperty");
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

// Private Eye
// Recall that:
// Public properties can be accessed from outside the class
// Private properties can only be accessed from within the class
// Using constructor notation, a property declared as this.property = "someValue;" 
// will be public, whereas a property declared with var property = "hiddenValue;" will be private.

// In this exercise, hit run and you'll see that all your grades are exposed! You really 
// just want people to know your overall GPA.
function StudentReport() {
    this.grade1 = 4;
    this.grade2 = 2;
    this.grade3 = 1;
    this.getGPA = function() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());

// Modify the StudentReport class so that no grades will be printed to the console
// in the for-in loop. However, getGPA should still function properly in the last line.

// Hint
// You should be changing public variables (this.grade) to private variables (var grade).
// If we want getGPA to be able to be called from outside this class, should we change it to be private?
// You should find yourself needing to modify getGPA itself. this.grade1 will not be available
// if you did not declare it previously. Perhaps changing it to simply grade1 will work?

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this. getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());



