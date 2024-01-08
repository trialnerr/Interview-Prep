/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  return person;
}
const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE (Store your common functions in a )
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
  // personStore is an object that stores common methods shared amongst objects.
  greet: function () {
    console.log("hello");
  },
};
// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/
function personFromPersonStore(name, age) {
  // this will be our constructor function that creates new persons who can access personStore properties(prototype)
  const person = Object.create(personStore); //here a new object is created with a --proto-- bound to the personStore prototype
  person.name = name; //create a name property on person object and assign it to name input
  person.age = age; //create a age property on person object and assign it to age  input
  return person; //return the created object.
}

const sandra = personFromPersonStore("Sandra", 26); //a new object is created and assigned name Sandra, age 26, and the greet
//method via the prototype.

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/
// without changing anything we are asked to add an introduce method to the personStore object.
//we add introduce to the personStore prototype. Insice the function introduce, we reference the object "this"
//that will be created by the Object.create method.
personStore.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};
//sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
               USING THE 'NEW' KEYWORD
In this case, we use a constructor function. We realize that functions 
are also objects which come with a default prototype property which is an object
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
  //this is a constructor function that creates new objects and assign methods and properties to said created objects
  //this here refers to the object that was created and then assigns the greet method to it
  this.greet = function () {
    console.log("hello");
  };
}

// /********* Uncomment this line to test your work! *********/
// const simon = new PersonConstructor; //here a new
// simon.greet(); // -> Logs 'hello'

// const bevy = new PersonConstructor;
// bevy.greet();

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
  //using the new keyword creates an empty object "this" which the constructor function will assign properties and methods to.
  //in this case, we are just assigning properties.
  person = new PersonConstructor();
  person.name = name;
  person.age = age;

  return person;
}

// const mike = new personFromConstructor('Mike', 30);

// // /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/
PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
  constructor() {
    // add code here
  }

  // add code here
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/

// add code here

// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = {
  // add code here
};

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
  // add code here
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log("Woof!");
  }
}

const robotMixin = {
  skin: "metal",
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

/* 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.
*/

//declare a function 'NumberedList' which takes in ..args
//initialize an empty object
//iterate over the args and assign each index of my iteration as key and each corresponding value of args
//assign a length property equal to length of args
//
function NumberedList(...args) {
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
}

// const nums = new NumberedList(5, 6, 7);
// console.log(nums) //---> {0:5, 1:6, 2:7, length: 3}

/* 
Declare a function, 'reverse', that is accessible to ALL instances of the NumberedList object.

'reverse' does not take in any arguments, and will return a new NumberedList instance, in which all elements of the original NumberedList it was called upon have been reversed.

For example, calling 'reverse' on the following NumberedList: 
  { 0: 'a', 1: 'b', 2: 'c', length: 3 } 
should return a new NumberedList with the properties:
  { 0: 'c', 1: 'b', 2: 'a', length: 3 }

Note: this method should NOT modify the object it was called upon!
*/

//add reverse to the NumberedList prototype
NumberedList.prototype.reverse = function () {
  const nums = new NumberedList();
  for (let index = this.length - 1; index >= 0; index--) {
    nums[this.length - index] = this[index];
  }
  nums.length = this.length;
  return nums;
};

// const reversedList = nums.reverse();
// console.log(reversedList);

/*Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. 
Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a
 property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set 
to the price argument the method was called with) and quantity, which should be initially set to 1.

Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price
argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item
name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have
  a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity
 by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.
The method checkItem should take a string as an argument and check to see whether that string exists as a property
 on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'. */

function Inventory(item, price) {
  this[item] = {
    price: price,
    quantity: 1,
  };
}
Inventory.prototype.addItem = function (newItem, newPrice) {
  if (newItem in this) {
    this[newItem].quantity++;
    this[newItem].price = newPrice;
  } else {
    this[newItem] = { price: newPrice, quantity: 1 };
  }
};
Inventory.prototype.deleteItem = function (itemToDelete) {
  if (itemToDelete in this) {
    this[itemToDelete];
  }
};

const myInventory = new Inventory("apple", 3);
myInventory.addItem("cucumber", 1.5);
myInventory.addItem("cucumber", 2);
//console.log(myInventory);

/*Declare a function 'NumArray', which takes in at most two arguments (length and initialValue) and returns an instance of a 'NumArray'
  object when invoked with the 'new' keyword. NumArray should function similarly to arrays - i.e. they will store values at numbered indexes,
   starting at 0. All NumArray objects should contain their own 'length' property to keep track of the number of elements in the array. 
   When a NumArray is first created, it should initialize the length property to the length passed-in and set all values to the initial
    value passed-in (if the initial value is not provided, initialize all values to 0), and if the length is not passed-in, initialize 
    the length property to 0.*/
function NumArray(length = 0, initialValue = 0) {
  this.length = length;
  this.initialValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    this[i] = initialValue;
  }
}
const numArray1 = new NumArray();
// console.log(numArray1.length); // Expected output: 0
//console.log(numArray1);

const numArray = new NumArray(5);
// console.log(numArray2);
// console.log(numArray2.length); // Expected output: 5
// console.log(numArray2[3]); // Expected output: 0 (default initial value)

const numArray3 = new NumArray(3, 10);
// console.log(numArray3.length); // Expected output: 3
// console.log(numArray3[1]); // Expected output: 10 (initial value provided)

/*- Task 1: Declare a function 'addAt', which is accessible to ALL instances of 'NumArray'. 'addAt' should take in two arguments 
 (an index and a value), and when invoked on a NumArray instance, should add the value to that NumArray at the passed-in index.
  Update the NumArray's length property appropriately and return the length of the NumArray. */

NumArray.prototype.addAt = function (index, value) {
  if (index < this.length) {
    this[index] = value;
  } else {
    for (let i = this.length; i <= index; i++) {
      this[i] = this.initialValue;
      this.length++;
    }
    this[index] = value;
  }
};
numArray1.addAt(0, 7);
//console.log(numArray1.length, '-> 1'); // Expected output: 1
//console.log(numArray1);

numArray2.addAt(2, 15);
//console.log(numArray2.length , '-> 5'); // Expected output: 5
//console.log(numArray2[2], '-> 15'); // Expected output: 15

numArray3.addAt(1, 20);
//console.log(numArray3.length, '-> 3'); // Expected output: 3
//console.log(numArray3[1], '-> 20'); // Expected output: 20

numArray3.addAt(5, 8);
//console.log(numArray3);

/*- Task 2: Declare a function 'applyFunc', which is accessible to ALL instances of 'NumArray'. 'applyFunc' should take in a callback 
 function as a single argument, and when invoked on a NumArray instance, should run the callback on every element in the NumArray (except
   the length) and return an instance of NumArray. */

NumArray.prototype.applyFunc = function (callback) {
  let newArray = new NumArray();
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i]);
  }
  newArray.length = this.length;
  newArray.initialValue = this.initialValue;
  return newArray;
};
const doubleValues = (num) => num * 2;
const squaredValues = (num) => num * num;

const numArray4 = numArray1.applyFunc(doubleValues);
// console.log(numArray4.length, '-> 1'); // Expected output: 1
// console.log(numArray4[0], '-> 14'); // Expected output: 14 (double of 7)

const numArray5 = numArray2.applyFunc(squaredValues);
// console.log(numArray5.length, '-> 5'); // Expected output: 5
// console.log(numArray5[2], '-> 225'); // Expected output: 225 (square of 15)

// console.log(numArray3, 'numArray3')
const numArray6 = numArray3.applyFunc(doubleValues);
// console.log(numArray6.length, '-> 6'); // Expected output: 6
// console.log(numArray6[1], '-> 40'); // Expected output: 40 (double of 20)

/*- Task 3: Declare a function 'removeFrom', which is accessible to ALL instances of 'NumArray'. 'removeFrom' should take in at 
 most two arguments (an index and a number K), and when invoked on a NumArray instance, should remove K elements from the NumArray 
 starting from the index (inclusive). If the number K is not passed-in, remove only one element at the index. Remember to update the
  length property properly. */

NumArray.prototype.removeFrom = function (index, K) {
  if (K) {
    for (let i = index; i < index + K; i++) {
      delete this[i];
      this.length--;
    }
  }
  else{
    delete this[index]; 
    this.length--; 
  }
};

// console.log(numArray1, 'numArray1 before')
// numArray1.removeFrom(0);
// console.log(numArray1, 'numArray1 after');

// console.log(numArray2, 'numArray2 before')
//  numArray2.removeFrom(2, 2);
// console.log(numArray2, 'numArray2 after');

console.log(numArray3, "numArray3 after");
numArray3.removeFrom(0, 2);
console.log(numArray3, "numArray3 after");

function delayCountdown(target, wait){
  let countdown = target; 
   return function(){} {
    countdown--;
    setTimeout(()=> console.log(countdown), wait);
   }
  }

delayCountdown(7, 1000)

function commutative (cb1, cb2, val){
  return cb2(cb1(val)) === cb1(cb2(val))
}
