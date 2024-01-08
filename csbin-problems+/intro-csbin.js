// /* ========== *
// * Challenge 1 *
// * =========== */

// //Uncomment the lines below to test your code
// // console.log(typeof 7.0 === "_______")
// // console.log(typeof 22 === "_______")
// // console.log(typeof true === "_______")

// var myVar;
// // console.log(typeof myVar === "_______")

// //myVar = //add your name here
// // console.log(typeof myVar === "_______")

// //Comment them back out with two forward slashes at the beginning once you have finished

// /* ========== *
// * Challenge 2 *
// * =========== */

// function buildSentence(word1, word2, word3) {
//   //your code goes here...

// }

// //buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// //buildSentence("we're", "number", "1") //=> "We're number 1."

// /* ========== *
// * Challenge 3 *
// * =========== */

// function lastLetter(word) {
//   //your code goes here...
// }

// //Uncomment the lines below to test your code
// // lastLetter("hello") //=> "o"
// // lastLetter("goodbye!") //=> "!"
// // lastLetter("ZeltoiD") //=> "D"

// /* ========== *
// * Challenge 4 *
// * =========== */

// function buildGreeting(time, name) {
//   //your code goes here...

// }

// //buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// //buildGreeting(12, "John") //=> "Good Afternoon, John!"
// //buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// //buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

// /* ========== *
// * Challenge 5 *
// * =========== */
// function indexOf(str, pattern){
//     const regex = "/" + pattern + "/"
//     return str.match(regex);
// }

// // console.log( indexOf("CodeSmith", "o"))
// // console.log( indexOf("hello", "ll"))
// // console.log( indexOf("zebra", "z"))
// // console.log( indexOf("banana", "B"))

// /* ========== *
// * Challenge 6 *
// * =========== */

// function letterExists1(word, letter) {
//   const regex = new RegExp(letter);
//   console.log(regex.test(word));
// }


// function letterExists(word, letter){
//   const wordArray = word.split("");
//   console.log(wordArray.includes(letter));
// }

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true

// /* =========== *
// * Challenge 7 *
// * ============ */

 function isPrime(number) {
    //declare a variable prime and initialize it to true 
    let isPrime = true; 
    if (number < 2){
        isPrime = false;
    }

    //create a for loop and for each index check if number is divisible by index
    for (let factor = 2; factor < Math.sqrt(number); factor++){
        if (number % factor === 0){
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);

 }

// isPrime(-7); // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false

// /* ========== *
// * Challenge 8 *
// * =========== */

function range(start, end) {
  let arr = []; 
  for (let i= start; i<=end; i++){
    arr.push(i);
  }
return `The numbers between ${start} and ${end} are ${arr.join(", ")}`; 
}

// //Uncomment the lines below to test your code
// console.log(range(1,4)) //=> 1, 2, 3, 4
// console.log(range(4,2)) //=>

// /* =========== *
// * Challenge 9 *
// * ============ */

function myIndexOf(array, ele){
  //iterate through all the elements of the array using a for loop
  for (let i = 0; i < array.length; i++){
    if (array[i]=== ele){
        return i; 
    }
  }
  return -1
  // if the current element of the iteration is equal to ele 
  // return the index of the element
  // if index is not found return -1


}

// console.log(myIndexOf([1, 2, 3, 4, 5], 5)) //=> 4
// console.log(myIndexOf(["a", "b", "c"], "a")) //=> 0
// console.log(myIndexOf(["a", "b", "c"], "d")) //=> -1

// /* =========== *
// * Challenge 10 *
// * ============ */

function unique(array) {
  return Array.from(new Set(array));
}

// console.log(unique([1, 1, 2, 3, 3])) //=> [1, 2, 3]
// console.log(unique(["a", "a", "c", "aa", "b", "b"])) //=> ["a", "c", "aa", "b"]

// /* =========== *
// * Challenge 11 *
// * ============ */

function longestWord(sentence) {
  //declare a const words and initialize it to an array of words in sentence
  const words = sentence.split(" "); 
  let longest = words[0];  
  //iterate through words comparing each word length to longest. 
  for (let word of words){
     //if word length is greater than or equal to longest
     if (word.length >= longest.length){
        // change longest to current longest word
        longest = word; 
     }
  }
  //return word
  return longest; 
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''

// /* =========== *
// * Challenge 12 *
// * ============ */

function disemvowel(string) {
  //declare and initialize a vowel regex
  const vowels = /[aeiou]/gi
  //then use the replace method to replace the regex
  return string.replace(vowels, ""); 
}

//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

// /* =========== *
// * Challenge 13 *
// * ============ */

function divisibleByFivePairSum(array){
    const indices = []; 
  for (let i = 0; i<array.length; i++){
    for (let j= i+1; j<array.length; j++){
        if ((array[i]+ array[j]) % 5 ===0) {
            indices.push([i, j])
        }
         
    }
  }
  return indices; 
}

//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

// /* =========== *
// * Challenge 14 *
// * ============ */

// function highestScore(students) {
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // var students = [
// // {name: 'Will Sentance', id: 128, score: -42},
// // {name: 'Jamie Bradshaw', id: 32, score: 57},
// // {name: 'Lisa Simpson', id: 2, score: 99},
// // {name: 'Luke Skywalker', id: 256, score: 94}
// // ];

// // console.log(highestScore(students)); //=> 'LS2'

// /* =========== *
// * Challenge 15 *
// * ============ */

// function leastCommonMultiple(num1, num2) {
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // console.log(leastCommonMultiple(2, 3)); //=> 6
// // console.log(leastCommonMultiple(6, 10)); //=> 30
// // console.log(leastCommonMultiple(24, 26)); //=> 312

// /* ========== *
// * Extension 1 *
// * =========== */

// function arrayBuilder(count) {
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// // console.log(arrayBuilder({})); //=> []

// /* ========== *
// * Extension 2 *
// * =========== */

// function objectBuilder(count) {
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // console.log(objectBuilder(4)); //=> {
//   // 0: 0,
//   // 1: 5,
//   // 2: 10,
//   // 3: 15,
//   // 4: 20,
// // }
// // console.log(objectBuilder(0)); //=> { 0: 0 }

// /* ========== *
// * Extension 3 *
// * =========== */

// function secretCipher(sentence, cipher){
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// // console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// // console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

// /* ========== *
// * Extension 4 *
// * =========== */

// function passingStudents(students) {
//   // your code here...

// }

// //Uncomment the lines below to test your function:

// // var students = [
// //   {
// //     "name": "Marco",
// //     "id": 12345,
// //     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
// //   },
// //   {
// //     "name": "Donna",
// //     "id": 55555,
// //     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
// //   },
// //   {
// //     "name": "Jukay",
// //     "id": 94110,
// //     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
// //   }
// // ];

// // console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]

// // A group of friends have decided to start a secret society.
// //The name will be the first letter of each of their names, sorted in alphabetical order.
// // Create a function ‘societyName’ that takes in an array of names and returns the name of the secret society.
// // For example, if our input is [‘Adam’, ‘Sarah’, ‘Malcolm’] then ‘societyName’ should return the string ‘AMS’

// function societyName(array){
//   const firstLetter = [];
//   for (let name = 0; name<array.length; name++){
//     firstLetter.push(array[name][0]);
//   }
//   return firstLetter.sort().join("");
// }
// // console.log(societyName(["Michael", "Sam", "Nancy"]))
// // console.log(societyName([1, 2, 3]))

// // Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the
// // returned function is called, return an array of all the previously passed values.

// //declare function memory Maker
// // function memoryMaker(){
// // //declare an array memory to an empty array
// // const memory = [];
// // //return a function that takes in an input argument
// // return function(arg){
// //     //inside the return function, append the input arg to the array
// //     //return the input array
// //     memory.push(arg);
// //     console.log(memory);
// // }
// // }

// // example:
// // const iRemember = memoryMaker();
// // iRemember('hello'); //-> ['hello']
// // iRemember(1); //-> ['hello', 1]
// // iRemember('world'); //-> ['hello', 1, 'world']
// // iRemember(true); //-> ['hello', 1, 'world', true]

// // function memoryMaker() {
// // 	// 	declare result array initially empty
// //   const resultArr = [];
// // 	//	declare function inner; input=1 argument
// //   	function inner(arg) {
// // 		//	push arg into result array
// //       resultArr.push(arg);
// // 		//	return result array
// //       return [...resultArr]; // we return a shallow copy of the array
// //     }
// //   //	return inneru
// //   return inner;
// // }

// // const iRemember = memoryMaker();

// // const test = iRemember('hello'); //
// // test.push("12");
// // console.log(test);

// Given an array, return its mode (the number that appears most often)
// If there is a tie, return the greater number of tied modes.
// ex. mode([1,1,2,2,3,3,2,4,5]) === 2 // true because 2 appears most often in the array (the number 2 appears 3 times)
// ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values

// function mode(array) {
//   obj = {};
//   array.forEach((el) => {
//     if (!(el in obj)) {
//       obj[el] = 1;
//     } else {
//       obj[el] += 1;
//     }
//   });
//    let max_occurence = Math.max(...Object.values(obj));
//    const mode_vals = [];
//    for (key in obj){
//     if (obj[key] === max_occurence){
//         mode_vals.push(key);
//     }
//    }
//    return Math.max(...mode_vals);
   
// }
// console.log(mode([1, 1, 2, 2, 3, 3, 2, 4, 5]));
// console.log(mode([1, 1, 1, 3, 3, 3]));


//function mode(array) {
    //   const rep = []
    //   array = [...array].sort((a,b)=>a-b); //
      
    //   // array to store [value, repitition]
    //   // array.reduce((acc, x) => acc = acc.push())
    //   // sort the array based on the second value, and the second valuevp
      
    //   array.forEach((x,i)=> {
    //     if (x !== array[i-1]) {
    //     rep.push([x,1]): rep}
    //   });


// Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).
// The callback function will return a boolean value.
// The callback function will be called on every element in the array. If the callback function being called returns true
// for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
//input: array, callback 
//output: boolean 

function atLeastOne (array, callback) {
  //returns a boolean value 
  //declare const filterArray and initialize it to the result of using
  filteredArr = array.filter(callback);
  //console.log(filteredArr);
  // the filter function on array to invoke the callback on each element of the array 
  return filteredArr.length > 0;
  //return filteredArr.length > 0
}

// const odd = (num) => {return num % 2 === 1}
// const even = (num) => {return num % 2 ===0}
// arr = [1, 2, 3, 4, 5]
// arr2 = [2, 4, 6, 8, 10]
// arr3 = [3, 5, 7, 9]
// console.log(atLeastOne(arr, odd));  //true 
// console.log(atLeastOne(arr2, odd)); //false 
// console.log(atLeastOne(arr2, even)); //true
// console.log(atLeastOne(arr3, odd)); //true
// console.log(atLeastOne(arr3, even)); //false

/*Declare a function, 'Collection', which takes in an array as an argument and returns an instance of a 'Collection' object when invoked with the 'new' keyword.
'Collection' objects should function similarly to a Set - i.e., they will store UNIQUE values (no duplicates) inside where its values and keys are the same.
All Collection objects should contain their own 'size' property, which keeps track of the number of items they contain. When a Collection is first created, it should have a size of 0.
*/

function Collection(array, size = 0){
    this.array = array; 
    this.size = array.length;


}
//REVERSE STRING USING REDUCE
function reverseString(str) {
    return str.split('').reduce((str1, str2) => str2+str1, '');
  }
  
  //console.log(reverseString("hello"));
      
/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/
function largestOfFour(arr) { 
    let largestArr = [];
    
    for (let nums of arr){
      largestArr.push(Math.max(...nums));
    }
    return largestArr;
  }
  
  //console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  /*Repeat a given string str (first argument) for num times (second argument). 
  Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
    let strin = '';
    for (let i = 0; i<num; i++){
      strin += str;
    }
    return strin;
  }
  

// console.log(repeatStringNumTimes("*", 3)) //should return the string ***.
// console.log(repeatStringNumTimes("abc", 3)) //should return the string abcab
// console.log(repeatStringNumTimes("abc", 4)) //should return the string abcabcabcabc.
// console.log(repeatStringNumTimes("abc", 1)) //should return the string abc.
// console.log(repeatStringNumTimes("*", 8)) //should return the string ********.
// console.log(repeatStringNumTimes("abc", -2)) //should return an empty string ("").
// // The built-in repeat() method should not be used.
// console.log(repeatStringNumTimes("abc", 0)) //should return "".

/*You are given two arrays and an index.Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    //use the tospliced method with starting index n
    return arr2.toSpliced(n, 0, ...arr1);
 }
 
 //console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

 /* Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean */
function bouncer(arr) {
    //use filter to iterate through array and filter values that falsy
    return arr.filter(el => {return el});
  }
function bouncer2(arr){
    return arr.filter(el => {return Boolean(el)});
}
//   console.log(bouncer([7, "ate", "", false, 9]));
//   console.log(bouncer2([7, "ate", "", false, 9]));

function getIndexToIns(arr, num) {
    // Sort the array numerically in ascending order
    const sortedArr = arr.sort((a, b) => a - b);
    
    // Find the index of the first element greater than or equal to num
    const index = sortedArr.findIndex(el => el >= num);
    
    // If no element is greater than or equal to num, return the length of the array
    // Otherwise, return the found index
    return index === -1 ? arr.length : index;
  }
  
// Example usage
//   console.log(getIndexToIns([40, 60], 50)); // Output: 1
//   console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // Output: 2
//   console.log(getIndexToIns([5, 3, 20, 3], 5)); // Output: 2
//   console.log(getIndexToIns([], 1)) //should return 0.
//   console.log(getIndexToIns([40, 60], 70)); // Output: 2


  /*Write a function that splits an array (first argument) into groups the
   length of size (second argument) and returns them as a two-dimensional array. */ 
   function chunkArrayInGroups1(arr, size) {
    //initialize an empty array
    const group = [];
    //iterate through array using for loop
    const chunk = (arr.length)/size;
    for (let i = 0; i< chunk; i++){
    // add  [n*i, n*i+1] to empty array 
       group.push(arr.slice(size*i, size*(i+1)));
    }
    //return array
    return group;
  }
  
  function chunkArrayInGroups(arr, size) {
    //initialize an empty array
    const group = [];
    //iterate through array using for loop
    for (let i = 0; i< arr.length; i += size){
    // add  [n*i, n*i+1] to empty array 
       group.push(arr.slice(i, i+size));
    }
    //return array
    return group;
  }
  
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))

function censor(){
    //initialize an empty object censorWords
    const censorWords = {}; 
    //return an anon function that takes in ...args
    return function(...args){
        //if length of args = 2
      if (args.length ===2){
        //store the censored words in empty object key = first str and value = second str 
        censorWords[args[0]] = args[1]; 
        return "Censored words have been stored!"
      }
      else{
        const str = args.join(" ")
        let replaced; 
         //for el in obj if el in arg then 
        for (let key in censorWords){ 
          if (str.includes(key)){
            replaced = str.replace(key, censorWords[key]);
          }
        }
        return replaced;
        //use replace to replace key with value in input string
       // return the replaced string
      }
    }
  }
  
  // Uncomment these to check your work!
  const changeScene = censor();
  changeScene('dogs', 'cats');
  changeScene('quick', 'slow');
  console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'


/*
Create a function 'addEvenNumbers' that takes a number as an argument. 'addEvenNumbers' should add up all the even numbers from 2 to the number you passed to the function.
For example, if the input is 8 then your function should return 20 because 2 + 4 + 6 + 8 = 20.
*/
function addEvenNumbers(num){
  let sum = 0; 
  for (let i=0; i<num; i+=2){
    sum +=i; 
  }
  return sum; 
}

console.log(addEvenNumbers(5)) //6
console.log(addEvenNumbers(8)) //20

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


const twoSum = function(nums, target) {
  for (let i = 0; i<nums.length; i++){
      for (let j = i+1; j<nums.length; j++){
          if(nums[i]+ nums[j]===target){
              console.log([i, j]);
          }
  }
  }
};

// twoSum([2, 7, 11, 15, 9], 24);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);
// twoSum([2, 7, 11, 15], 9);