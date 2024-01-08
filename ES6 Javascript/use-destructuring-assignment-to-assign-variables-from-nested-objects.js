//Replace the two assignments a destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
//Example 1
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
//Here's how to extract the values of object properties and assign them to variables with the same name:
const {
  johnDoe: { age, email },
} = user;
//And here's how you can assign an object properties' values to variables with different names:
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(lowToday, highToday);
