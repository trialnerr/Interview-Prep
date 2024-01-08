//Two strings a and b are called isomorphic if there is a one to one mapping possible for every character 
//of a to every character of b. And all occurrences of every character in a map to same character in b.

// function isomorphic(str1, str2){
//     //initialize an empty obj 
//     //loop the characters of str1 and set it as a key in empty obj whose value is the corresponding char of str2
//     //if its not in the obj if it is, check to see if the value of that element is 
//    const map = {}; 
//    for (let i = 0; i<str1.length; i++){
//      if (!map[str1[i]]){
//         if (Object.values(map).includes(str2[i])) return false; 
//         map[str1[i]] = str2[i]; 
//      }
//      else{
//         if (map[str1[i]] != str2[i]) return false; 
//      }
//    }
//    return true; 
// }

// console.log(isomorphic('CBAABC', 'DEFFED'), 'must be true'); 
// console.log(isomorphic('XXX', 'YYY'), 'must be true'); 
// console.log(isomorphic('RAMBUNCTIOUSLY', 'THERMODYNAMICS'), 'must be true'); 
// console.log(isomorphic('AB', 'CCB'), 'false'); 
// console.log(isomorphic('XXY', 'XYY'), 'false'); 
// // console.log(isomorphic("abcdefghijk","abcdefghijba"), 'false'); 
// // console.log(isomorphic("SEE", "SAW"), 'false'); 
// // Test cases for isomorphic function
// // console.log(isomorphic("egg", "add"));        // true (e -> a, g -> d)
// // console.log(isomorphic("foo", "bar"));        // false (lengths are different)
// // console.log(isomorphic("paper", "title"));    // true (p -> t, a -> i, e -> l, r -> e)
// // console.log(isomorphic("ab", "aa"), "f");           // false (a maps to different characters)
// // console.log(isomorphic("badc", "baba"));       // true (b -> b, a -> a, d -> b, c -> a)
// // console.log(isomorphic("turtle", "tletur"));   // true (t -> t, u -> l, r -> e, l -> u, e -> r)
// // console.log(isomorphic("abc", "xyz"));         // true (a -> x, b -> y, c -> z)
// // console.log(isomorphic("aab", "xyz"));         // false (a maps to different characters)
// // console.log(isomorphic("abc", "aba"));         // false (b maps to different characters)
// // console.log(isomorphic("", ""));               // true (empty strings are isomorphic)
// // console.log(isomorphic("abc", ""));            // false (different lengths)
// console.log(isomorphic("", "xyz"));            // false (different lengths)
// console.log(isomorphic("an", "xyz"));          // false (different lengths)
// // console.log(isomorphic("abc", "aaa"));         // false (a maps to different characters)

// function descendingOrder(n){
//   return n.toString().split("").sort((a,b)=> b-a).join("");
// }

// // console.log(descendingOrder(439281))

// function removeSmallest(numbers) {
//     //create a copy of numbers. Sort the copy and find the smallest #. 
//     //Find the index of the smallest number, and remove it from the original array
//     const smallest = numbers.slice().sort()[0]; 
//     const smallestIndex = numbers.indexOf(smallest)
//     numbers.splice(smallestIndex, 1);
//     return numbers 
//   }

// console.log(removeSmallest([1, 2, 3, 4, 5])); 
// console.log(removeSmallest([2, 3, 4, 1, 5])); 
// console.log(removeSmallest([2, 3, 1, 4, 1, 5])); 


