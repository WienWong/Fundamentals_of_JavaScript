
// JavaScript Lecture 10 -- Building a Cash Register

//Create the object called cashRegister and initialize its total property
var cashRegister = {
    total:0,
};
//Using dot notation change the total property
cashRegister.total = 2.99;


// Use the add method to sum up the cost of the following four items.
// Eggs 0.98
// Milk 1.23
// Magazine 4.99
// Chocolate 0.45
// If we only call the method once, it will just add the first item.
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

// Short-Term Memory
// Write the add method which has a single parameter, itemCost. It will add the itemCost to the total.
// We have partially written the scan method for you and started a switch statement. Add the following 2 items to the switch statement:
// "magazine", 4.99
// "chocolate", 0.45
// Finally, use the scan method to buy "eggs" twice and a "magazine" three times.

// Previous switch statements we've seen all had a default case. But that was because those were if-else cases where we needed
// a catch-all outcome. But for a scanner, this is not needed.
// Comma don't forget that a comma (,) will be needed after closing the new add method.

var cashRegister = {
    total: 0,
//insert the add method here    
    add: function(itemCost){
        this.total += itemCost;
    },
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        
        case "chocolate":
            this.add(0.45);
            break;
        }

        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
//Show the total bill
console.log('Your bill is '+cashRegister.total);

// I Have to Scan It More Than Once?
// Modify the scan method such that if we tell it the quantity of each item, it will be able to
// add the right amount to the total. Since you currently tell scan nothing about quantity, 
// it may be useful to create another parameter.

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("chocolate", 4);
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);

// Show the total bill
console.log('Your bill is '+cashRegister.total);

// Bleep Bleep
// We need to keep track of how much the last transaction was. Modify the add method to 
// keep track of the amount of the last transaction. This should be tracked in a new property, 
// lastTransactionAmount.
// Add a method called voidLastTransaction that subtracts the last amount transacted from total.
// Then use the new method to void the last item we scanned. Finally, scan only 3 of the same item instead.

// Hint
// Remember that when you add a property or method to an object in literal notation, you should
// follow it with a , (comma) unless it is the last item of the object.
// How should you update lastTransactionAmount? Each time add runs, you should change the value
// of lastTransactionAmount to itemCost so that lastTransactionAmount always refers to the cost of the last transaction.

var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
    },
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate', 3);

//Show the total bill
console.log('Your bill is '+ cashRegister.total);

// Over the Moon
// Create an object constructor called StaffMember which takes two parameters—name and discountPercent. 
// And then have the (public) properties name and discountPercent equal the parameters.
// Create a new instance of the object for yourself called me with your massive staff discount bonus of 20%.

// create a constructor for the StaffMember class
function StaffMember(name, discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}


var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Tom", 20);


// You Deserved It!
// On line 10 create a new object called me of type StaffMember for yourself with a staff discount of 20%

// Create a new method called applyStaffDiscount in the cashRegister object which accepts a 
// parameter employee. When this method is called, cashRegister should apply the staff member's
// discountPercent to total.

// Under the comment, 'Apply your staff discount by passing the me object, call your new applyStaffDiscount and pass the object me.

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Tom", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+ cashRegister.total.toFixed(2));


