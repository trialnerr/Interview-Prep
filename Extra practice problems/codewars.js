//Given an integer x, return true if x is a palindrome, and false otherwise.
const isPalindrome = function (x) {
  const intArray = x.toString().split("");
  return x == intArray.reverse().join("");
};
// console.log(isPalindrome(12));
// console.log(isPalindrome(33));
// console.log(isPalindrome(121));
// console.log(isPalindrome(1001));
// console.log(isPalindrome(2323));

function majority(array, callback) {
  const filteredArr = array.filter(callback);
  return filteredArr.length > array.length / 2;
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 Return k.*/

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === val) {
      k++;
      nums[i] = "_";
    }
  return k;
}
// console.log(removeElement([3,2,2,3], 2));

//Create a function that takes in two numbers, a, and b, and returns a random number between a and b (inclusive). 
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 2 * min);
}

function randomChallenge() {
  const categories = [
    "intro",
    "callbacks",
    "closures",
    "asynch",
    "oop",
    "recursion",
  ];
  let randomIndex = Math.floor(Math.random() * categories.length);
  let category = categories[randomIndex];
  let num;
  if (category == "intro") {
    num = randomNumber(1, 19);
  } else if (category === "callbacks") {
    num = randomNumber(1, 24);
  } else if (category === "closures") {
    num = randomNumber(1, 19);
  } else if (category === "asynch") {
    num = randomNumber(1, 10);
  } else if (category === "oop") {
    num = randomNumber(1, 15);
  } else if (category === "recursion") {
    num = randomNumber(1, 10);
  }
  // console.log(category + ' ' + num)
}

// randomChallenge()

///**

var longestCommonPrefix = function (strs) {
  const lengths = strs.map((str) => str.length);
  const shortest = Math.min(...lengths);
  let shortestWord = strs[strs.findIndex((str) => str.length === shortest)];

  //find the length of the shortest str in array
  //use a for loop to check if the substring of length i is present in all strings. if so return the substring
  //outside of loop return ''
  while (shortestWord.length >= 1) {
    //use filter to check if the shortest word slice is present in all words in str
    if (strs.every((word) => word.includes(shortestWord))) {
      return shortestWord;
    }
    shortestWord = shortestWord.slice(0, -1);
  }
  return "";
};

//console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["aca", "cba"]));

//SPIN WORDS GREATER THAN 5 length
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have
// five or more letters reversed. Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"


function spinWords(str){
   const words = str.split(" "); 
   const reversed = words.map((word)=> {
    word.length >= 5? word.split("").reverse().join(""): word; 
    return word; 
   })
  return reversed.join(" "); 
}

// console.log(spinWords("Hey fellow warriors")); 
// console.log(spinWords("This is a test")); 
// console.log(spinWords("This is another test")); 

//--------------------------------------------------------------------------------------------------------------------

// Description:

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 *  ... * N
// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

//To find the number of multiples of 10, we need to count the number of multiples of 5 we have in the product

function zeros(num){
  //have a counter that starts at 0
  //iterate from 5 to the num; 
  //for each iteration, divide the number by 5, until it is equal to 1. for each division, add 1 to the counter
  //return counter
  let product = 1; 
  for (let i = 5; i<=num; i+=5){
    product *= 5; 
  }
  return Math.pow(product, 1/5); 
}

console.log(zeros(0), "=> 0"); 
console.log(zeros(5), "=> 1"); 
console.log(zeros(6), "=> 1"); 
console.log(zeros(12), "=> 2"); 
console.log(zeros(30), "=> 7"); 
