/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */
//Create a function delayedGreet that console logs welcome after 3 seconds. 
function delayedGreet() {
  setTimeout(()=> console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
//delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */
//Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds. 
function helloGoodbye() {
  console.log('hello');
  setTimeout(()=> console.log('good bye'), 2000);
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
//Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when
// you are satisfied that it is working. 
function brokenRecord() {
  setInterval(()=> console.log('hi again'), 1000)
}
// Uncomment the following line to check your work!
 //brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */
//Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this. 
function limitedRepeat() {
  const myInterval = setInterval(()=> console.log('hi for now'), 1000);
  setTimeout(() => clearInterval(myInterval), 5000)
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */
//Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.
// everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.
// Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
// What do you expect to happen?
function everyXsecsForYsecs(func, interval, duration) {
  const myInterval = setInterval((func), interval);
  setTimeout(()=> clearInterval(myInterval), duration)
  
}
//Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
//everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */
//Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
function delayCounter1(target, wait) {
  for (let i = 1; i<=3; i++){
    setTimeout(()=> console.log(i), i*wait);
  }
}

//my own challenge: create a delaycounter function that logs numbers in reverse order
function delayCountdown(target, wait){
  //initialize a countdown to target input
  let countdown = target;
  //return an anon function 
  function setCountdown(){
    //if countdown >=1 
    if (countdown >= 1){
      //log the countdown value
      console.log(countdown); 
     //decrement the countdown
      countdown--; 
      setTimeout(setCountdown, wait);
    }   
  }
  return setCountdown;
}
  //return the function setout for wait seconds later

// const mycountdown = delayCountdown(7, 1000); 
// mycountdown();
//7 after 1 sec, 6 after 2 secs, 5 after 3 sec, 4 after 4 secs, 3 after 5 secs, 2 after 6 sec, 1 after 7 secs, 

// UNCOMMENT THESE TO TEST YOUR WORK!
//delayCounter(3, 1000)
//countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */
//Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.
//Hint: take a look at the Promise object docs on MDN.
function promised(val){
  return new Promise((resolve, reject)=> {setTimeout(resolve(val))})
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); 
//will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */
//Write a SecondClock class, with two methods: start and reset. 
//start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".
//In other words, the callback gets invoked every second on the "seconds hand" of the clock. Always start with 1 and don't utilize the seconds value of the current computer clock time.
//The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
//The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation. .... 
//The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
// The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
// The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation...etc.
// reset: upon invocation, completely stops the "clock".
// Also resets the time back to the beginning.
// 
// Hint: look up setInterval and clearInterval.
class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */
//Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.
// Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.
// For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/

function debounce(callback, interval) {
  // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'


const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  //console.log(`Yay! ${successMessage}`);
});

const promise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num >= 0.5) {
    resolve(`${num} Promise is fulfilled!`);
  } else {
    reject(`${num} Promise failed!`);
  }
});

function handleResolve(value) {
  console.log(value);
}

function handleReject(reason) {
  console.error(reason);
}

promise.then(handleResolve, handleReject);