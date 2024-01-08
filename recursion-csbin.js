// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function countdown(n, str = '') {
  if (n<0){
    return str; 
  }
   return countdown(n-1, str + n+ " ")
}
// console.log(countdown(5));
// console.log(countdown(10));

//Challenge 2
//Write a recursive function sum that calculates the sum of an array of integers. 
function sum1(array) {
   //base case: if the length of the array is 2, return sum of the two elements
   if (array.length === 2){
    return array[0] + array[1];
   }
   //recursive case:
  return array[0] + sum(array.slice(1));  
}

function sum(array, result = 0){
    if (array.length === 0){
        return result; 
    }
    return sum(array.slice(1), result + array[0]);
}


// uncomment these to check your work
//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21
//  console.log(sum([1,2,3,4,5,6, -6])); // -> returns 15

/*Challenge 3
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards).
 The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome. */ 
// Challenge 3
function palindrome1(string) {
    //initialize a const stringLower and set it to string to lower case
    let stringLower = string.toLowerCase();
    
    //remove punctuation and spaces
    stringLower = stringLower.replace(/[^a-z]/g, '');
   // first base case: check if the length of string is 1. if so return true
    if (stringLower.length === 1){
        return true;
    }
    //check if length of string is 2. If so return the result of comparing the two letters in the string as a boolean
    if (stringLower===2){
       return stringLower[0] === stringLower[1];
    }
    //initialize a variable firstLast that compares the first and last letters in your string
    let firstLast = stringLower[0] === stringLower[stringLower.length-1]
    //recursive case: return the result of calling the function on itself with the truncated string 
    return firstLast && palindrome(stringLower.slice(1, -1));
}
//very cool chatgpt. Thanks for cleaning up my code
function palindrome(string) {
    let stringLower = string.toLowerCase();
    stringLower = stringLower.replace(/[^a-z]/g, '');
    
    if (stringLower.length === 0) {
        return true;
    }

    let firstLast = stringLower[0] === stringLower[stringLower.length - 1];
    return firstLast && palindrome(stringLower.slice(1, -1));
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

//Challenge 3
//Write a recursive function palindrome that accepts a string as an input and returns 
//true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome. //
// Challenge 4

function isPrime(num, factor = 2) {
    //initialize a variable to the boolean true
    if (num <= 1){
        return false;
    }
    // let primeBool = true; 
    //base case : if factor = num return true
    if (num === factor){
        return true; 
    }
    if (num % factor ===0 ){
        return false;
    }
    // recursive call: return the result of invoking isPrime on itself with factor incremented by 1
    return isPrime(num, factor + 1);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false
// console.log(isPrime(13)); //-> true
// console.log(isPrime(49)); //-> false

//Challenge 5
//Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

//const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
//const arr = ["first","second","third"];
//pathFinder(obj,arr);   //-> "finish"

//great job!!! 
function pathFinder(obj, arr) {
  if (arr.length === 0){
    return obj; 
  }
  else{
    obj = obj[arr[0]];
    return pathFinder(obj, arr.slice(1))
  }
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"

/*Challenge 6
Write a recursive function flattenRecursively that flattens a nested array. 
Your function should be able to handle varying levels of nesting. 
*/
// function flattenRecursively(arr, flat = [], count = 0) {
//    if (!arr[count]){
//     return flat; 
//    }
//   if (!(Array.isArray(arr[count]))){
//     flat.push(arr[count]);
//     count++; 
//   }
//   else{
//     return flattenRecursively(arr[count], flat, count);
//   }
// }
// function flattenRecursively2(arr, flat = [], count = 0) {
//      if (!arr[count]){
//       return flat; 
//      }
//      if (!(Array.isArray(arr[count]))){
//       flat.push(arr[count]);
//       count++; 
//       return flattenRecursively(arr.slice(1), flat, count); 
//     }
//     else{
      
//       count++; 
//       return flattenRecursively(arr, flat, count);
//     }
//   }
  
  
//       for(let i = 0; i < arr.length; i++) {
//       if(Array.isArray(arr[i])) {
//         flat.push(flattenRecursively(arr[i].flat(), flat));
//       } else {
//         flat.push(arr[i]);
//       }
      
//     }
//       return flat;
//   }


// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

/*Challenge 7
Write a recursive function findInOrderedSet that determines if a number is in an ordered array. 
Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary. */

function findInOrderedSet(arr, target) {
   if (!arr[0]){
    return false; 
   }
   if (arr[0]=== target){
    return true;
   }
   else {
    return findInOrderedSet(arr.slice(1), target);
   }
}
//TRYING A BISECTION SEARCH: 

function findInOrderedSet(arr, target){
    //base case 
}



const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
/*There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time.
 Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter).
  See test cases for examples. */ 
function countWaysToReachNthStair(n) {
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
/*Given a collection of distinct integers, write a function getPermutations to return all possible permutations.

Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/ 
function getPermutations(arr) { 

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
/*Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.*/
function getRangeBetween(x, y, array = []) {
  //Base case: stop recursion when x = y. If x = y return array
  if (x===y){
    return array; 
  }
  //increment the value of x by 1
  x += 1
  //push the value of x into the array 
  array.push(x)
  //call the function with x, y , and array 
  getRangeBetween(x, y, array);
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]


function countWaysToReachNthStair1(n) {
    if (n <= 1) {
        // Base case: there is only one way to reach 0 or 1 step
        return 1;
    }

    const ways = new Array(n + 1);
    ways[0] = 1;
    ways[1] = 1;

    for (let i = 2; i <= n; i++) {
        // Number of ways to reach the i-th step is the sum of ways to reach (i-1)th step and (i-2)th step
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    const combinations = [];
    let i = n;
    while (i > 0) {
        if (i >= 2) {
            combinations.push([1, 2]);
            i -= 2;
        } else {
            combinations.push([1]);
            i -= 1;
        }
    }

    return { count: ways[n], combinations };
}

// Example usage
// const n = 5;
// const result = countWaysToReachNthStair(n);
// console.log(`Number of ways to reach ${n} stairs: ${result.count}`);
// console.log(`Combinations of 1 and 2 steps: ${result.combinations.map(combination => combination.join('-')).join(', ')}`);

function countWaysToReachNthStair(n) {
    if (n <= 1) {
        // Base case: there is only one way to reach 0 or 1 step
        return { count: 1, combinations: [[]] };
    }

    const ways = new Array(n + 1);
    ways[0] = 1;
    ways[1] = 1;

    for (let i = 2; i <= n; i++) {
        // Number of ways to reach the i-th step is the sum of ways to reach (i-1)th step and (i-2)th step
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    const combinations = [];
    for (let i = n; i >= 2; i -= 2) {
        combinations.push([1, 2]);
    }
    if (n % 2 === 1) {
        combinations.push([1]);
    }

    return { count: ways[n], combinations };
}

// Example usage
function waysToReachNthStair(n) {
    if (n === 0) {
        // Base case: when n is 0, return an array with an empty combination
        return [[]];
    }
    if (n === 1) {
        // Base case: when n is 1, return an array with a single combination of 1 step
        return [[1]];
    }

    const ways = [];

    // Recursively find combinations for (n-1)th and (n-2)th stair and add 1 or 2 to each combination
    const waysToNMinus1 = waysToReachNthStair(n - 1);
    for (const combination of waysToNMinus1) {
        ways.push([1, ...combination]);
    }

    const waysToNMinus2 = waysToReachNthStair(n - 2);
    for (const combination of waysToNMinus2) {
        ways.push([2, ...combination]);
    }

    return ways;
}

// Example usage
const n = 4;
const combinations = waysToReachNthStair(n);
console.log(`Combinations of ways to reach ${n} stairs:`);
console.log(combinations.map(combination => combination.join('-')).join(', '));


//Declare a function 'formExpressions' which takes in an array of numbers and another number (called 'target') as arguments. 
//If all array numbers can evaluate to the 'target' with 4 basic operators (addition, subtraction, multiplication, and division), 
//return a string to describe one of the valid expressions. Otherwise, return 'Impossible to form a valid expression!'.

//For example:

// console.log(formExpressions([1,2,3,3], 11)); // '1 * 2 + 3 * 3'
// console.log(formExpressions([2,2], 4)); // '2 * 2' OR '2 + 2'
// console.log(formExpressions([9,12,1], 3)); // 'Impossible to form a valid expression!' 


function fibonacci(n, fibs = {}){
  if (n===0){
    return 0;
  } 
  else if (n===1){
    return 1;
  } 
  else{
    if (!fibs[n]){
    fibs[n] = fibonacci(n-1, fibs) + fibonacci(n -2, fibs);  
  }

    return fibs[n]
  
}
}

// Create a function 'addEvenNumbers' that takes a number as an argument. 'addEvenNumbers' should add up all the even numbers from 2 to the number you passed to the function.
// For example, if the input is 8 then your function should return 20 because 2 + 4 + 6 + 8 = 20.
// do not use loops or built in methods

function addEvenNumbers(number, sum = 0){
  //base case: check if the number is 0. if so, return the sum
  console.log({number}, {sum});
  if (number === 0){
    return sum;
  }
  if (number % 2 ===0){
    sum += number
  }
  return addEvenNumbers(number-1, sum);
}

// console.log(addEvenNumbers(8), '-> 20');
// console.log(addEvenNumbers(9), '-> 20');
// console.log(addEvenNumbers(0), '-> 0');
// console.log(addEvenNumbers(12), '-> 2');

//without using any native methods build a function that checks if a string is a palindrome
function isPalindrome1(string){
  //if the string has length less than or equal to 1 then return true
  if (string.length<=1){
    return true;
  }
 return string[0]===string[string.length-1] && isPalindrome(string.slice(1, -1));
}


function isPalindrome2(str) {
  const halfPoint = (str.length - 1) / 2;
  for (let i = 0; i < halfPoint; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true; 
}

function isPalindrome(str, i=0, j=str.length-1){
  if (j>i) return true;
  if (str[i] !== str[j]) return false; 
  return isPalindrome(str, i+1, j-1)
}
// console.log(isPalindrome('level'));
// console.log(isPalindrome('1level1'));
// console.log(isPalindrome('leve'));
// console.log(isPalindrome('Mamam'));

/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

function deepCopy(array){
  return JSON.parse(JSON.stringify(array));
}
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true



