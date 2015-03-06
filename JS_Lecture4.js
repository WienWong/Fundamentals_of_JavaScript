
// JavaScript Lecture 4 -- 'WHILE' LOOPS

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

// 
var understand = true;

while( understand ){
    console.log("I'm learning while loops!");
    understand = false;
}

// Practice makes perfect
// Remember to set your condition outside the loop!

count=0
var loop = function(){
    while(count<3){
        //Your code goes here!
        console.log( "I'm looping!");
        count+=1;
    }
};
loop();

// Solo flight
//Remember to make your condition true outside the loop!
bool=true
var soloLoop = function(){
    //Your code goes here!
    while(bool){
        console.log("Looped once!");
        bool=false;
    }
};

soloLoop();

// When to 'while' and when to 'for'
// As we mentioned, for loops are great for doing the same task over and over when you know ahead
// of time how many times you'll have to repeat the loop. On the other hand, while loops are ideal
// when you have to loop, but you don't know ahead of time how many times you'll need to loop.

// As you saw, however, you can combine a while loop with a counter variable to do the same kind of
// work a for loop does. In these cases, it's often a matter of preference.

// The 'do' / 'while' loop
// Sometimes you want to make sure your loop runs at least one time no matter what. 
var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

// 
var getToDaChoppa = function(){
    // Write your do/while loop here!
    bool==false;
    do{
        console.log("What do you choose?");
    }while(bool)
};

getToDaChoppa();

// Review
// Write your code below!

count=0
while(count<5){
    console.log("aaa");
    count+=1;
}

for(var i=0;i<5;i++){
    console.log("aaa");
}

count=0
do{
    console.log("aaa");
    count+=1;
}while(count<5)
   
// Dragon Slayer!

// Declare your variables
// We'll need:
// a variable to check if we're still slaying
// a variable to check if we hit the dragon
// a variable to keep track of how much damage we've dealt the dragon this round
// a variable to keep track of total damage
var slaying=true;
var youHit = Math.floor(Math.random()*2);
// This sets youHit to a random number that's either 0 (which JavaScript reads as false) 
// or 1 (which JavaScript reads as true).
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

// The first 'if' statement
// Inside your while loop, create an if/else statement that checks the value of youHit. If it's 1
// (true), it should log a congratulatory message to the console, saying that you hit the dragon.
// If it's 0 (false), it should log a message to the console saying that the dragon defeated you.
// Either way, slaying should be set to false, since either you beat the dragon (and the slaying's
// over) or the dragon beat you!
var slaying=true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit==1){
        console.log("Hit the dragon");
    }
    else{
        console.log("Dragon defeated you");
    }
    slaying=false;
}

// The second 'if' statement
// In the first branch of our if statement (right after the console.log() where we congratulate the
// player for hitting the dragon), let's set totalDamage equal to totalDamage + damageThisRound.
// Then, inside your first if statement, create a second if statement that checks to see if totalDamage
// is greater than or equal to 4. If so, it should log to the console that the player slew the dragon 
// and set slaying equal to false (since the dragon's dead, the slaying is over).
// If totalDamage isn't greater than or equal to 4, youHit should be assigned a new random 1 or 0.
// (This is as easy as setting youHit to the same expression you used when you first declared it.)
var slaying=true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit==1){
        console.log("Hit the dragon");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("Player slew the dragon");
            slaying=false;
        }
        else{
            youHit = Math.floor(Math.random()*2);
        }
    }
    else{
        console.log("Dragon defeated you");
    }
    slaying=false;
}

// 
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. 
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if (totalDamage >= 5) {
            console.log("You did it! You slew the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
    }
}
// One possible result:
You hit the dragon and did 2 damage!
You hit the dragon and did 2 damage!
The dragon burninates you! You're toast.
false






 
