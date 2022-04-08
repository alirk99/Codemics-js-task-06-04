// ============================== QUESTION 1
// Create a Higher Order Function that accepts a Callback function as an arrow function
console.log("\n" + "QUESTION 1");

let higherOrder = (cb) => {
   console.log("this is a higher order function");
   cb();
};
let sayHello = () => console.log("Hello! How are you");

higherOrder(sayHello);

// ============================== QUESTION 2
// Create an array of numbers 1 till 10. Use the .forEach() method to print Multiplication tables of each number.
console.log("\n" + "QUESTION 2");

let numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((i) => {
   for(x=1; x<=10; x++){
      console.log(`${i} x ${x} = ${i*x}`);
   }
   console.log("\n");
});

// ============================== QUESTION 3
// Create an Array of Products. Each product must contain the keys ‘name’, ‘price’ and ‘expiry’.
// Expiry key must be a Date (hint: Use JS Dates). Use the .filter() method to get a sublist of all those
// products whose expiry date has passed.
console.log("\n" + "QUESTION 3");

let products = [{name: "fruits", price: 500, expiry: new Date(2022, 4, 15,)},
{name: "meat", price: 1000, expiry: new Date(2022, 2, 15)},
{name: "fish", price: 2000, expiry: new Date(2022, 6, 15)},
{name: "milk", price: 150, expiry: new Date(2022, 1, 15)}];

let today = new Date();
console.log(products.filter((x) => {return x.expiry < today}));

// ============================== QUESTION 4
// Create an Array of Shapes. Each shape must contain the keys ‘name’, ‘sides’. Return true if all the shapes inside that array have the same number of sides, otherwise return false
console.log("\n" + "QUESTION 4");

let shapes = [{name: "circle", sides: 0},
{name: "square", sides: 4},
{name: "triangle", sides: 3},
{name: "hexagon", sides: 6} ];

let sides = shapes[0].sides;
let equal = shapes.every( (x) => {
   if (sides !== x.sides) {
     return false;
   }
   return true;
 });

 console.log(equal);

// ============================== QUESTION 5
// Create an object of Person. Person must contain the keys name, age, gender, address, and a function called describe. This function should print the information of the person in a humanfriendly readable format.
console.log("\n" + "QUESTION 5");

let person = {
   name: "John",
   age: 30,
   gender: "Male",
   address: "California, USA",
   describe : function() {
      return "likes to travel";
    }
}

console.log(`My name is ${person.name}, i am a ${person.age}yrs old ${person.gender} living in ${person.address}. I ${person.describe()}.`);

// ============================== QUESTION 6
// Create an Array of numbers and sort it.
console.log("\n" + "QUESTION 6");

let num = [3,2,26,9,8,5,14,7,11];
num.sort((a, b) => {return a - b});

console.log(num);

// ============================== QUESTION 7
// Create an Array of Users. User is an object and each user must have the keys ‘name’, ‘age’. Sort the array on the basis of the names of those users.

console.log("\n" + "QUESTION 7");

let users = [{name:"Faizan", age:24}, {name:"Ali", age:22}, {name:"Ayesha", age:23}];
users.sort((a, b) => {  
   let x = a.name.toLowerCase();
   let y = b.name.toLowerCase();
   if (x < y) {return -1;}
   if (x > y) {return 1;}
   return 0;
});

console.log(users);

// ============================== QUESTION 8
// Create an Array of strings. Return the index of the first element in that array whose length is greater than 8. Use .findIndex()
console.log("\n" + "QUESTION 8");

let fruits = ["apple", "orange", "rasberry", "pomegranate", "apricot", "blueberry"];

let index = fruits.findIndex((x) => {return x.length > 8;});
console.log(`length of "${fruits[index]}" at index ${index} is greater than 8.`);

// ============================== QUESTION 9
// Show with code the difference between .find() and .findIndex() methods of Array
console.log("\n" + "QUESTION 9");

let random = [23, 65, 98, 74, 12, 56, 98]
console.log(random.find( (x) => {return x == 98;} ) );
console.log(`number 98 is present in array 'random'`);
console.log(random.findIndex( (x) => { return x == 98;} ) );
console.log(`number 98 is present in array 'random' at index 2.`);

// ============================== QUESTION 10
// Create an Array of numbers and return a slice of that array that contains numbers from start till the 3rd last element.
console.log("\n" + "QUESTION 10");

let record = [3,2,26,9,8,5,14,7,11];
console.log(record.slice(0, record.length-3));

// ============================== QUESTION 11
// Create an Array and Reverse it.
console.log("\n" + "QUESTION 11");

let alphabets = ["a", "b", "c", "d", "e", "f"];
alphabets.reverse();
console.log(alphabets);

// ============================== QUESTION 12
// Create an Array and add an element to its start.
console.log("\n" + "QUESTION 12");

let score = [20, 30, 40, 50];

score.unshift(10)
console.log(score);

// ============================== QUESTION 13
// Create an Array and add an element to its end.
console.log("\n" + "QUESTION 13");

score.push(60);
console.log(score);

// ============================== QUESTION 14
// Create an Array and remove an element from its start
console.log("\n" + "QUESTION 14");

let marks = [5, 15, 25, 35];

marks.shift();
console.log(marks);

// ============================== QUESTION 15
// Create an Array and remove an element from its end.
console.log("\n" + "QUESTION 15");

marks.pop();
console.log(marks);

// ============================== QUESTION 16
// . Create an Array of strings where each element is Lowercase. Transform that array such that each elements is now Uppercase.
console.log("\n" + "QUESTION 16");

let cars = ["toyota", "honda", "suzuki"];
cars.forEach((element, i) => {cars[i] = element.toUpperCase()});
console.log(cars);

// ============================== QUESTION 17
// Create an Array of strings, and return true if some of its elements contains the word ‘cat’.
console.log("\n" + "QUESTION 17");

let words = ["call", "cat", "mobile", "phone", "dog"]
console.log(words.some( (x) => { return x === 'cat';} ) );

// ============================== QUESTION 18
// Create two different arrays and concatenate them into a single resultant array.
console.log("\n" + "QUESTION 18");

let part1 = ["ball", "bat", "wicket"];
let part2 = ["helmet", "pads", "gloves"];

let total = part1.concat(part2);
console.log(total);