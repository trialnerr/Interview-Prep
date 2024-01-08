// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
 return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
 return word + "s";
}
// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
 const arr =[];
 array.forEach(el => {arr.push(callback(el))})
 return arr;
}
//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let el of array){
    callback(el);
  }
}
// const myArr = [4, 5, 6];
// const myfunc = (num) => console.log(num+5);
// forEach(myArr, myfunc);
// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
 
}


// Challenge 6
function reduce(array, callback, initialValue) {
  let accum = initialValue; 
  for (let el of array){
    accum = callback(accum ,el )
  }
  return accum
}
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
function intersection(arrays) {
 const intersect = (arr1, arr2) => { 
   const arr = [];
   arr1.forEach(el => {if (arr2.includes(el)){ arr.push(el)}});
   return arr
 }
 return arrays.reduce(intersect)
 }


//console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
//should log: [5, 15]


// Challenge 8
function union(arrays) {
 if (arrays.length === 0) { 
   return [];
 }
  // Concatenate all arrays using reduce and remove duplicates with Set
 const unionWithDuplicates = arrays.reduce((arr1, arr2) => arr1.concat(arr2));
  
  // convert union array to a set to get rid of duplicates & Convert the Set back to an array and return the result
 return Array.from(new Set(unionWithDuplicates));
}

// (union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// //should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
  //compare length of arr1 and arr2. if not equal return error message
  if (array1.length !== array2.length){
    throw new Error('Arrays must be of the same length!')
  }
  else {
    //initialize empty object
    const obj = {};
    //iterate though array1 
    for (let i = 0; i<array1.length; i++){
      if (array2[i]===callback(array1[i])){
          obj[array1[i]] = array2[i];
          }
    }
    return obj;
   
    //for each element if array1[i]===callback(array2[i]) add to obj 
    //return obj 
  }
}

  //from chatgpt using reduce
  function objOfMatches(array1, array2, callback) {
  if (array1.length !== array2.length) {
    throw new Error(`Arrays must be of the same length! Array1: ${array1.length}, Array2: ${array2.length}`);
  }

  return array1.reduce((obj, current, index) => {
    const transformedValue = callback(current);
    if (transformedValue === array2[index]) {
      obj[current] = transformedValue;
    }
    return obj;
  }, {});
}


//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
//should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
 //initialize an empty obj 
  const obj = {}; 
  //loop through arrVals using a for loop
  arrVals.forEach((item)=> {
    const arr = []; 
    arrCallbacks.forEach(callback => arr.push(callback(item)));
    obj[item] = arr;
  });
    // initialize an empty array
    // loop through arrCallbacks using forEach appending each output value to empty array 
    // assign el of initial loop to filled array
  
  return obj;
}

//trying to use the map function

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
//should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
  let filterObj = {}; 
  for (let key in obj){
    if (callback(key, obj[key])===obj[key]){
      filterObj[key] = obj[key]; 
    }
  }
  return filterObj; 
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
//console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
   const filteredArr = array.filter(callback); 
   return filteredArr.length > array.length/2; 
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
 let prioritizedEl = array.filter(callback); 
 return prioritizedEl.concat(array.filter(el => !callback(el)));
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
 // should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
 //initialize an empty obj
 obj = {}; 
 //created a new array by mapping the callback onto the input array
const mappedArr = array.map(callback);
 //iterate through the array using a for loop 
for (value of mappedArr){
    if (!(value in obj)){
        obj[value] = 1;
    }
    else {
        obj[value]+=1;
    }
}
return obj;
 //if element of array is not in empty obj then add the element to obj 
 // else increment the value of the key
 //return obj
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
 //initialize an empty obj
 obj = {}; 
 //created a new array by mapping the callback onto the input array
return mappedArr = array.map(callback);
 //iterate through the array using a for loop 
// for (value of mappedArr){
//     if (!(value in obj)){
//         obj[value] = 1;
//     }
//     else {
//         obj[value]+=1;
//     }
// }
// return obj;
//  //if element of array is not in empty obj then add the element to obj 
//  // else increment the value of the key
//  //return obj 
// 
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {

}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {

}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {

}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return (num % 2 !== 0);
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6

function findLastTrueElement(array, callback){
  //callback returns a boolean
  const filteredArray = array.filter((el, index=0)=> callback);
  return filteredArray[filteredArray.length-1];

}


function isEven(num){
  return num %2===0; 
}
// console.log(isEven(4));
// console.log(findLastTrueElement([1, 2, 3, 4], isEven)) //4 
// console.log(findLastTrueElement([23, 45, 56, 7, 9], isEven)) //56

/* 
Declare another function, 'encode', which takes a string and a callback as arguments.
'encode' should return an encoded version of the string, in which each character is replaced with the result of passing it into the callback.*/ 

function encode(str, callback){
    const strArray = str.split(''); 
    return strArray.map(callback).join('');
}

// const convertToUpper = (str) => str.toUpperCase();
// const changetoB = (str) => str.replace("a", "b");
// console.log(encode('My name is Bongi', convertToUpper ))
// console.log(encode('My name is Bongiaaa', changetoB))