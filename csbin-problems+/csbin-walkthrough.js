//----------------------------------------------------
//Create a functon "buildSentence" that takes three words (strings)and returns the full sentence complete with capitalization at the beginning of the sentence and punctuation (add an exclamation point to each sentence).
//input is 3 strings
//output is the full capitalized sentence with exclamation

//END OF PROBLEM

//----------------------------------------------------
//SOLUTION HERE
function buildSentence(word1, word2, word3){
    return `${word1.replace(word1[0], word1[0].toUpperCase())} ${word2} ${word3}!`
}
console.log(buildSentence("i", "am", "word"))

//END OF SOLUTION

//--------------------------------------------------------
//NEXT PROBLEM
//Create a function combineNum that takes an array and a value that will act as the length of the number. combineNum is going to return a number that is the highest combination of the numbers in the passed in array with the length of value. If the array cannot be combined to make the number reach the value of length, return "combine not possible".
// console.log(combineNum([4,6,1,8,2],4)) //=> 8642
// console.log(combineNum([4,9,1,8,2],6)) // => combine not possible
// console.log(combineNum([7,9,1,8,2],3)) //=> 987
//END OF PROBLEM

//-----------------------------------------------------

//SOLUTION
function combineNum(nums, len){
    if (nums.length < len) return "combine not possible"
    const sortedNums = nums.sort((a, b)=> b-a); 
    return sortedNums.join("").slice(0, len); 
}

console.log(combineNum([4,6,1,8,2],4)) //=> 8642
console.log(combineNum([4,9,1,8,2],6)) // => combine not possible
console.log(combineNum([7,9,1,8,2],3)) //=> 987


//END OF SOLUTION

//--------------------------------------------------------
// Declare a function 'trigger' that takes in a number K and a callback as arguments, and return another function.
// The returned function should take in a single argument and when invoked at the K-th time, it should run the 
//callback on the passed-in argument and return that value, then reset the timer for that specific argument to be
// ready for the next time. However, the next invocation at the K-th time on the same value, it should run the callback 
//with the previous returned value as the argument. And if it's not the time to run the callback, return
// 'Please invoke the function *time* time(s) more with *argument* to see the result'.
//--------------------------------------------------------
//SOLUTION
function trigger(K, callback){
    //initialize an object to store the counters
    let counters = {}; 
    let results = {}; 
    //return an anonymous function(arg){
    return function(arg){
      //if the argument is not in the counters object, initialize it to zero
      if (!counters.hasOwnProperty(arg)) {
        counters[arg] = 0;
      }
      //increment the counter for the argument
      counters[arg] ++; 
    //if the counter is equal to K, then return callback(arg)
      if (counters[arg] === K) {
        counters[arg] = 0;
        results[arg] = callback(results[arg])
        return results[arg];
      }
    //else return please invoke function K-counter with arg to see ...
      return `Please invoke the function ${K-counters[arg]} time(s) more with ${arg} to see the result` 
    } 
  }

  

//END OF SOLUTION
//--------------------------------------------------------
//PROBLEM
//Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
//END OF PROBLEM
//--------------------------------------------------------------------------
//SOLUTION

//END OF SOLUTION
//--------------------------------------------------------------------------

//NEXT PROBLEM:

//OOP PART 1
//Declare a function 'MyArray' which returns an instance of a 'MyArray' object when invoked with the 'new' keyword. MyArray should mirror a Javascript array - i.e. store values at numbered indices starting at 0. All MyArray objects should contain their own 'length' property to keep track of the number of elements in the array. When a MyArray is first created, it should initialize the length property to 0.

//OOP PART 2
//Recreate the push method. It should be available to all instances of MyArray.

//OOP PART 3
//Recreate the includes method. It should be available to all instances of MyArray.

/* 
EXAMPLES OF VERBAL QUESTIONS YOU MAY NEED TO KNOW: 
What is the difference between var, let, const?

•

What is recursion?

•

What is closure?

•

What is scope?

•

What is a callback?

•

What is the difference between the &&
operator and the || operator?

•

What is pass by value vs pass by reference?

•

What is the difference between a parameter and an argument?

•

What is hoisting?

•

What is the difference between map & forEach?

*/

/* 
LINKS TO DOCUMENTS I MADE THAT GAVE ME AN IDEA ABOUT THE INTERVIEW PROCESS. LITTLE OUTDATED BUT STILL HELPFUL, AS CS PROBABLY STILL HAS JUST ABOUT THE SAME PROCESS

https://docs.google.com/document/d/1fg9pzCJH0cT3LJfGatpAbjwBlhnuyKgFbi-UxLksLUE/edit

Tips for codesmith interview
https://docs.google.com/document/d/1Tl6Tj2fmzQ8p0aQEsrdW0u1wDPq0RESgR9vwDxg9cnw/edit

CS-Interview Structure and Tips
https://docs.google.com/document/d/1ufuwWZ7W1RAsrbZaTdzNBYDlZiJV8QQbW1IiMGkWXTQ/edit 

*/