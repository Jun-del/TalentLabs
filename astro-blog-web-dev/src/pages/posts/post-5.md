---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to JavaScript (ES6)"
author: Neoh Wei Jun
pubDate: 2023-09-03
description: "The programming language of the web"
# image:
#   url: "https://docs.astro.build/assets/arc.webp"
#   alt: "Thumbnail of Astro arcs."
tags: ["browser", "javascript", "react"]
---

## [Developer Tools](https://developer.chrome.com/docs/devtools/)

`F12` or `Ctrl + Shift + I` / `Cmd+Opt+J` (Mac) to open developer tools

- Elements: View and edit HTML and CSS
- **Console**: Check errors, run JavaScript code
- Sources: View and debug JavaScript code
- Network: View network requests
- Application: View and edit local storage, session storage, cookies, cache, and indexedDB

---

## JavaScript

### _Check browser compatibility before using any new features_

- Internal vs **External** JavaScript (`<script>` tag and `src` attribute)

### [Variables](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/): **let**, **const**, var (Var is not recommended in modern JavaScript, use let or const instead)

- [Variables are hoisted to the top of the file](https://blog.devgenius.io/hoisting-in-javascript-c90f6d03d2df), but since let and const are not initialized, they are in the temporal dead zone (TDZ)
- TDZ is a state where you cannot access the variable before it is declared
- var by default is undefined, let and const are not initialized

- _Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution_

```js
// let
let x = 1;
let a = 8, // declare multiple variables
  b = 9;
x = 2;
console.log(x, a, b); // 2 8 9

// const (constant, value cannot be reassigned, but can be mutated)
const y = 1; // y is always 1
y = 2;
console.log(y); // TypeError: Assignment to constant variable.

// var (same as let but no block scope)
var z = 1;
z = 2;
console.log(z); // 2

console.log(c); // undefined
var c = 1;
console.log(c); // 1
```

### [Scope](https://www.w3schools.com/js/js_scope.asp): Global, Function / Local, Block, Lexical (Closure)

```js
// Global scope
// let - block scoped, const - block scoped constant, var - function scoped
let x = 1;
var y = 2;
const z = 3;

function foo() {
  // Function scope
  let x = 4;
  var y = 5; // do not modify global variables
  const z = 6; // declare new variables
  console.log(x, y, z); // 4 5 6
}

foo();
console.log(x, y, z); // 1 2 3

if (true) {
  // Block scope
  let x = 7;
  var y = 8; // reassign global variables
  const z = 9;
  console.log(x, y, z); // 7 8 9
}

console.log(x, y, z); // 1 8 3
```

---

### [Primitive Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):

- [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String): Textual data (sequence of characters, can be empty)
- [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number): Numeric data (integers, floats / decimals, NaN, Infinity, negative numbers)
- [bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt): Numeric data of arbitrary length (integers larger than 2^53 - 1 or less than -2^53 + 1)
- [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean): Logical data (true / false)
- [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null): A variable that has no value is of type null (intentional absence of any object value)
- [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined): A variable that has not been assigned a value is undefined (yet to be defined)
- [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol): Unique identifiers (used in object properties)
- [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (Non-primitive): For complex data structures (array, date, etc.)

```js
// String
const name = "John Doe";
const ageString = "20";

// Number (integers, floats / decimals, NaN, Infinity)
const age = 20;
const height = -1.7;

// Boolean (true / false)
const isMale = true;

// Null
const car = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

// Object
const address = {
  // key-value pairs
  city: "Boston",
  state: "MA",
};

const hobbies = ["movies", "music"]; // array (object)
console.log(typeof hobbies); // object
console.log(Array.isArray(hobbies)); // true

// array and index
const nums = [1, 2, 3, 4, 5];

// index (starts from 0)
console.log(nums[0]); // Output: 1
console.log(nums[2]); // Output: 3
console.log(nums[4]); // Output: 5

// Accessing the last element using negative index
console.log(array.length); // length of array, Output: 5
console.log(nums[nums.length - 1]); // Output: 5
```

---

### [Type coercion / conversion / type casting](https://javascript.info/type-conversions) (String, Number, Boolean)

```js
// Type coercion (implicit conversion, automatic conversion)
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum); // 11

const val3 = 5;
const val4 = "6";
const sum2 = val3 + val4;
console.log(sum2); // 56

// Type conversion (explicit conversion, manual conversion by developer)
const val5 = 5;
const val6 = "6";
const sum3 = Number(val5) + Number(val6);
console.log(sum3); // 11
```

---

### [Basic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#basic_operators): Arithmetic, Assignment, Comparison, Logical, String, Conditional, Comma

```js
// Arithmetic operators ( +, -, *, /, %, **, ++, --)
// + addition, - subtraction, * multiplication, / division, % modulus
// ** exponentiation, ++ increment by 1, -- decrement by 1
let x = 5;
let y = 3;
console.log(x + y); // 8

// Assignment operators ( =, +=, -=, *=, /=, %=, **=)
// = assignment, += addition assignment, -= subtraction assignment
// *= multiplication assignment, /= division assignment, %= modulus assignment
// **= exponentiation assignment (x += y is equivalent to x = x + y)
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

// Comparison operators ( ==, ===, !=, !==, >, <, >=, <=)
// == equal to, === equal value and equal type (strict equal), != not equal
// !== not equal value or not equal type, > greater than
// < less than, >= greater than or equal to, <= less than or equal to
let x = 5;
let y = 3;
console.log(x == y); // false

// Logical operators (&&, ||, !)
// && and (both conditions must be true to return true),
// || or (one of the conditions must be true to return true),
// ! not (returns true if the condition is false and vice versa)
let x = 5;
let y = 3;
console.log(x > 3 && y < 5); // true

let z = true;
console.log(!z); // false

// String operators (+, +=)
// + concatenation, += concatenation assignment
let x = "John";
let y = "Doe";
console.log(x + " " + y); // John Doe

// Conditional operator (next section)
let age = 20;
let voteable;
if (age < 18) {
  voteable = "Too young";
} else {
  voteable = "Old enough";
}

// Ternary operator
// condition (is condition true?) ? val1 (if true) : val2 (if false)
let voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable); // Old enough

// Comma operator (,)
let x = 5,
  y = 6,
  z = 7;
console.log(x + y + z); // 18

// typeof operator (returns the type of a variable)
let x = 5;
console.log(typeof x); // number

// Array.isArray() (returns true if an object is an array, false if not)
let cars = ["Saab", "Volvo", "BMW"]; // typeof returns object
console.log(Array.isArray(cars)); // true
```

---

### [Control flow](https://blog.devgenius.io/control-flow-statements-in-js-eed55b11aee8): Conditional statements, Loops (Break, Continue), Try/Catch Statements

```js
// if statement (if condition is true, do something)
const x = 10;
if (x === 10) {
  console.log("x is 10");
}

// if else statement (if condition is true, do something,
// else do something else)
const x = 10;
if (x === 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}

// if, else if, else statement (if condition is true, do something,
// else if condition is true, do something, else do something else)
const x = 10;
if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  // x < 10
  console.log("x is less than 10");
}

// switch statement (an alternative to if else if else)
const x = 10;
switch (x) {
  case 10: // if x is 10, do something
    console.log("x is 10");
    break; // break out of the switch statement
  case 20:
    console.log("x is 20");
    break;
  default: // the default case if no case matches, like else
    console.log("x is not 10 or 20");
    break;
}

// for loop (for a certain number of times, do something)
//  (initialization, condition, increment)
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

// for of loop (for each item in an array, do something)
const array = [1, 2, 3];
// cannot set condition, loops all items in array
for (const item of array) {
  console.log(item); // 1 2 3
}

// while (while condition is true, do something)
let i = 0;
while (i < 10) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
  i++;
}

// do while (do something first, then while condition is true, continue)
let i = 0;
do {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
  i++;
} while (i < 10);

// break (break out of a loop or switch statement early)
for (let i = 0; i < 10; i++) {
  // skip this if unless i is 5
  if (i === 5) {
    break; // exit the loop
  }
  console.log(i); // 0 1 2 3 4
}

// continue (skip an iteration of a loop)
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // skip this iteration but continue the loop
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
}

// try catch finally (try to execute some code, if there is an error,
// catch the error and do something, finally do something regardless)
try {
  // try to execute this code
  console.log("Hello");
} catch (err) {
  // if there is an error, catch the error and do something
  console.log(err);
} finally {
  // do something regardless, all code in finally will be executed
  console.log("World");
}
```

---

### [Functions](https://javascript.info/function-basics): Reusable blocks of code, can be called multiple times, hoisted to the top of the file

```js
// Function declaration (function keyword, name, parameters, body)
function greet(name) {
  console.log("Hello " + name);
}

// Function call (name of function, arguments passed as parameters)
// Also known as invoking a function but not calling a function directly
// https://stackoverflow.com/questions/50884893/calling-vs-invoking-a-function
greet("John Doe"); // Hello John Doe
greet("Alice"); // Hello Alice

// A function can return a value back to the caller
// If a function does not return a value, it returns undefined
function greet(name) {
  return "Hello " + name;
}

const greeting = greet("John Doe");
console.log(greeting); // Hello John Doe

// If a function has return statement without a value, it exits the function
function greet(name) {
  return; // exits the function (next line will be unreachable)
  console.log("Hello " + name); // this line will not be executed )
}

// Function expression (anonymous function, function keyword)
// You can give a default value to a parameter
const greet = function (name = "John Doe") {
  console.log("Hello", name);
};

// Arrow function (anonymous function, arrow function, parameters, body)
// You can omit the parentheses if there is only one parameter
// const greet = name => ...
const greet = (name) => {
  console.log(`Hello ${name}`);
};

// Arrow function with implicit return
// You can omit the curly braces if there is only one line of code
// (anonymous function, arrow function, parameters, body)
const double = (num) => num * 2;

// Arrow functions do not have their own this keyword,
// they inherit the this of the parent scope (further reading yourself)
// Regular function as an object method
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John

// Arrow function as an object method
const personArrow = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

personArrow.greet(); // Output: Hello, my name is undefined

// Immediately Invoked Function Expression (IIFE)
// (function () {})(); (anonymous function, function keyword, parentheses)
(function () {
  console.log("Hello"); // Hello (will be executed immediately)
})();

// Spread in function parameters (combining multiple arguments into an array)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = mergeArrays(...array1, ...array2);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest in function parameters (destructuring an array
// into individual variables)
function displayNames(first, second, ...others) {
  console.log(`First Name: ${first}`); // First Name: John
  console.log(`Second Name: ${second}`); // Second Name: Alice
  console.log(`Others: ${others.join(", ")}`); // Others: Bob, Eve, Charlie
}

displayNames("John", "Alice", "Bob", "Eve", "Charlie");
// Output:
// First Name: John
// Second Name: Alice
// Others: Bob, Eve, Charlie
```

---

### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object): store values in key-value pairs, dot notation, bracket notation, object methods, this keyword

**[Object Prototypes and Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)**

- Objects in JavaScript are prototypes, which means they can inherit properties and methods from other objects. This forms the basis of inheritance in JavaScript.
- If it cannot find a property or method in the object itself, it will look for it in the prototype of the object, and so on up the prototype chain until it reaches the top (null). This is called the prototype chain.

```js
// Object literal notation (key-value pairs)
// a person object
const person = {
  name: "John", // key (name) : value ("John")
  age: 30, // key (age) : value (30)
  job: "Developer", // key (job) : value ("Developer")
};

// Using 'object' as a constructor (not recommended)
const car = new Object(); //" object constructor" syntax
car.make = "Toyota";
car.model = "Camry";

// Accessing object properties (dot notation, bracket notation)
console.log(person.name); // John (using ".") (preferred)
console.log(person["name"]); // John (using "[]")

// Adding properties to an object
person.city = "Boston";
person["state"] = "MA";

// Object methods (functions inside an object)
// Dont use arrow functions for object methods (no this keyword)
const person = {
  name: "John",
  age: 30,
  job: "Developer",
  greet: function () {
    // this refers to the current object itself
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John

// delete operator (delete or remove a property from an object)
delete person.job;
console.log(person); // { name: 'John', age: 30 }

// Shorthand property names (ES6)
// (no need to repeat the key and value if they are the same)
const name = "John";
const age = 30;
const job = "Developer";

const person = {
  name, // name: name
  age, // age: age
  job, // job: job
};

// Destructuring (extracting data from objects)
const { name, age, job } = person; // "John", 30, "Developer"
// destructuring with renaming
const { name: personName, age: personAge, job: personJob } = person;

// object spread and rest (ES2018)
const defaults = { color: "blue", size: "medium" };
const overrides = { size: "large" };

// Spread operator (second overrides first)
const merged = { ...defaults, ...overrides };
console.log(merged); // Output: { color: "blue", size: "large" }

const { color, ...rest } = merged; // rest operator
console.log(color); // Output: blue
console.log(rest); // Output: { size: "large" }

// Check if a key exists in an object
console.log("name" in person); // Output: true
console.log(Object.hasOwn(person, "name"));

// Looping through object keys
// for in loop (loop through object keys)
for (const key in person) {
  console.log(key); // name, age, job
}

// Check if a property exists in an object
console.log(person.hasOwnProperty("location")); // Output: false

// Object.keys() (returns an array of object keys)
console.log(Object.keys(person)); // [ 'name', 'age', 'job' ]

// Object.values() (returns an array of object values)
console.log(Object.values(person)); // [ 'John', 30, 'Developer' ]

// Object.entries() (returns an array of object key-value pairs)
console.log(Object.entries(person));
// [ [ 'name', 'John' ], [ 'age', 30 ], [ 'job', 'Developer' ] ]

// Object.entries() with loop
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
}); // name: John, age: 30, job: Developer

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
} // name: John, age: 30, job: Developer

// Object.assign() (copies the values of all enumerable own properties
// from one or more source objects to a target object)
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

const person2 = {
  name: "Alice",
  age: 20,
  job: "Designer",
};

const mergedPerson = Object.assign({}, person, person2);
console.log(mergedPerson);

// Object as Function Parameters (pass in an object as a parameter)
function displayPersonInfo(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

displayPersonInfo(person); // Output: Name: John, Age: 30

// Optional chaining (ES2020)
// person.location is undefined, so person.location.city will throw an error
console.log(person.location.city);
// TypeError: Cannot read property 'city' of undefined

// Optional chaining (?.) (if person.location is undefined, return undefined)
console.log(person.location?.city); // undefined
```

**[Shallow copy/clone vs deep copy](https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/)**

- A deep copy of an object creates a completely independent copy of the original object, including all nested objects and their properties.
- A shallow copy of an object only copies the top-level properties, and nested object references are shared between the original and the copy.
- To achieve a deep copy, you can use libraries like Lodash or write a custom deep copy function. Here's an example using a custom deep copy function:

```js
// Original object
const person = {
  name: "John",
  age: 30,
  address: {
    city: "Boston",
    zip: "10001",
  },
};

// Shalllow copy the original object
const shallowCopiedPerson = { ...person };

// Modify the shallow copied object
shallowCopiedPerson.age = 35;

// Modify the nested object
shallowCopiedPerson.address.city = "Los Angeles";

console.log(person); // Original object is modified

// Similarily modify the original object
person.age = 40;
person.address.city = "San Francisco";

console.log(shallowCopiedPerson); // Shallow copied object is modified

// Shallow copy using spread operator
const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    country: {
      name: "United States",
    },
  },
};

// Fake deep copy using spread operator
const shallowCopy = {
  ...originalObject,
  address: { ...originalObject.address },
};

// Modify the original object
originalObject.name = "Simon";
originalObject.address.city = "Kuala Lumpur";

// Display changes in both the original and shallow copy
console.log(originalObject.name); // Output: Simon
console.log(shallowCopy.name); // Output: John

console.log(originalObject.address.city); // Output: Kuala Lumpur
console.log(shallowCopy.address.city); // Output: New York

originalObject.address.country.name = "Malaysia"; // Affected both objects

console.log(originalObject.address.country.name); // Output: Malaysia
console.log(shallowCopy.address.country.name); // Output: Malaysia
```

[**Deep copy**](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy): To achieve a true deep copy, you would need to create copies of all nested objects and their properties recursively.

```js
const originalObject = {
	name: "John",
	age: 30,
	address: {
		city: "New York",
		zip: "10001",
	},
};

// Simple deep copy using JSON
// Limitations: Cannot copy functions, undefined, circular references
// Dont work on non-JSON safe/compliant values like Date, Map, Set, etc.
const deepCopiedObject = JSON.parse(JSON.stringify(originalObject));

// Custom deep copy function (recursive)
function deepCopy(obj) {
	if (typeof obj !== "object" || obj === null) {
		return obj; // Return primitive values or null as is
	}

	if (Array.isArray(obj)) {
		// Recursively deep copy array elements
		return obj.map((item) => deepCopy(item));
	}

	const copy = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			// Recursively deep copy object properties
			copy[key] = deepCopy(obj[key]);
		}
	}

	return copy;
}

// Using lodash library (deep copy)
import _ from "lodash"; / const _ = require('lodash');
const deepCopiedObject = _.cloneDeep(originalObject);

// Deep copy the original object
const deepCopiedObject = deepCopy(originalObject);

// Modify the deep copied object
deepCopiedObject.age = 35;
deepCopiedObject.address.city = "Los Angeles";

console.log(originalObject); // Original object remains unchanged
console.log(deepCopiedObject); // Deep copied object is independent
```

**[Array shallow copy and deep copy](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)**

- [**Shallow copy**](https://dev.to/smpnjn/javascript-shallow-copy-what-is-a-shallow-copy-1pc5): The new array references the same elements as the original array. If a _referenced_ element changes, the changes are visible in both the new and original arrays.

```js
// Shallow copy
const originalArray = [1, 2, [3, 4]];

// Shallow copy using slice()
const shallowCopy = originalArray.slice();

// Modify the original array (affected the shallow copied array)
originalArray[2][0] = 99;

// Same principle, nested array is shared
console.log(originalArray); // [1, 2, [99, 4]]
console.log(shallowCopy); // [1, 2, [99, 4]] (nested array is shared)
```

- [**Deep copy**](https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig): The new array references different elements than the original array. If a referenced element changes, the changes are not visible in the new array (Independent).

```js
// Deep copy, every element is copied recursively
const originalArray = [1, 2, [3, 4]];

// Custom deep copy function (recursive)
function deepCopy(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopy(item) : item));
}

const deepCopiedArray = deepCopy(originalArray);

// Modify the original array (does not affect the deep copied array)
originalArray[2][0] = 99;

console.log(originalArray); // [1, 2, [99, 4]]
console.log(deepCopiedArray); // [1, 2, [3, 4]] (completely independent)
```

---

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array): Store multiple values in a single variable, can be accessed using an index, can be iterated using loops, can be used with array methods

```js
// Creating an array
const fruits = ["apple", "banana", "cherry"];

// Accessing array elements (index starts from 0)
// fruits[0] = first element, fruits[1] = second element, etc.
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"

// Modify an array element
fruits[0] = "pear";
console.log(fruits); // ["pear", "banana", "cherry"]

// Adding to the end of an array
fruits.push("orange");
console.log(fruits); // ["pear", "banana", "cherry", "orange"]

// Adding to the front of an array
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "pear", "banana", "cherry", "orange"]

// Remove the last element of an array
fruits.pop();
console.log(fruits); // ["strawberry", "pear", "banana", "cherry"]

// Remove the first element of an array
fruits.shift();
console.log(fruits); // ["pear", "banana", "cherry"]

// Get the index of an item in the array
console.log(fruits.indexOf("banana")); // 1

// Get the length of an array
console.log(fruits.length); // 2

// Get the last item in an array
console.log(fruits[fruits.length - 1]); // "cherry"
console.log(fruits.at(-1)); // "cherry" (ES2021)
console.log(fruits.slice(-1)); // ["cherry"]

// Check if a variable is an array
console.log(Array.isArray(fruits)); // true

// Splice method (position, how many to remove, items to add)
// Position is inclusive, how many to remove is exclusive
fruits.splice(1, 0, "lemon", "kiwi");
// ["pear", "lemon", "kiwi", "banana", "cherry"]

// Remove an item by index position (modifying the original array)
fruits.splice(1, 1); // (position, how many to remove)

// Slice method (start, end) (does not modify the original array)
// Start is inclusive, end is exclusive
const fruits2 = fruits.slice(1, 3); // ["lemon", "kiwi"]

// Iterating an array (looping through an array)
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Concatenating arrays (combining arrays)
const fruits = ["apple", "banana", "cherry"];
const moreFruits = ["pear", "orange", "lemon"];

const allFruits = fruits.concat(moreFruits);
// same as allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // ["apple", "banana", "cherry", "pear", "orange", "lemon"]

// Find method (returns the value of the first element in the array
// that satisfies the provided testing function)
const fruits = ["apple", "banana", "cherry"];

const result = fruits.find((fruit) => fruit === "banana");
console.log(result); // "banana"

// Find index method (return the index of the first element in the array)
const fruits = ["apple", "banana", "cherry"];

const result = fruits.findIndex((fruit) => fruit === "banana");
console.log(result); // 1

// Find last index method (returns the index of the last element in the array)
const fruits = ["apple", "banana", "cherry", "banana"];

const result = fruits.findLastIndex((fruit) => fruit === "banana");
console.log(result); // 3
```

### [Array methods used in React](https://raymondosy.medium.com/5-must-know-array-methods-in-react-da531a02b0ef)

- **map()**: Creates a new array by applying a function to each element of the original array. It's often used for rendering lists of elements.

```js
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers: [2, 4, 6, 8, 10]
```

Map React Example:

```jsx
// Create a list of <li> elements from an array of numbers
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => <li>{number * 2}</li>);
// doubledNumbers: [<li>2</li>, <li>4</li>, <li>6</li>, <li>8</li>, <li>10</li>]
```

- **filter()**: Creates a new array containing elements that meet a specified condition. It's useful for filtering data based on certain criteria.

```js
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 },
];
const adults = people.filter((person) => person.age >= 30);
// adults: [{ name: "Alice", age: 30 }, { name: "Carol", age: 35 }]
```

Filter React Example:

```jsx
// When user filter with age >= 30, only Alice and Carol will be shown
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 },
];
const adults = people.filter((person) => person.age >= 30);
const adultNames = adults.map((person) => <li>{person.name}</li>);
```

- **includes()**: Determines whether an array contains a specified element. It's useful for checking if an array contains a certain value.

```js
const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.includes("banana");
// hasBanana: true
```

- **find()**: Returns the value of the first element in an array that satisfies a specified condition. It's useful for finding a specific element in an array.

```js
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 },
];
const carol = people.find((person) => person.name === "Carol");
// carol: { name: "Carol", age: 35 }
```

React example using find / includes, filter and map:

```jsx
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 },
];

// Find the person with word "rol" in their name
const carol = people.find((person) =>
  person.name.toLowerCase().includes("rol")
);
console.log(carol); // { name: "Carol", age: 35 }

// Or filter the people with word "rol" in their name
const filteredPeople = people.filter((person) =>
  person.name.toLowerCase().includes("rol")
);
console.log(filteredPeople); // [{ name: "Carol", age: 35 }]

// Then map the filtered people to a list of <li> elements
const filteredPeopleList = filteredPeople.map((person) => (
  <li>{person.name}</li>
));
```

- **reduce()**: Applies a function to an accumulator and each element of the array (from left to right) to reduce it to a single value. It's useful for aggregating data.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// sum: 15

const expenses = [
  { id: 1, description: "Groceries", amount: 50 },
  { id: 2, description: "Utilities", amount: 100 },
  { id: 3, description: "Rent", amount: 1200 },
  { id: 4, description: "Transportation", amount: 80 },
];

// Calculate the total expense using reduce
const totalExpense = expenses.reduce((accumulator, expense) => {
  return accumulator + expense.amount;
}, 0);
```

---

### [Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) (sort an array in place, returns the sorted array, the default sort order is ascending)

- By default, the sort method converts the elements to strings and sorts them lexicographically. To sort numbers correctly, you should provide a comparison function as an argument to sort

```js
// Example array of numbers
const numbers = [4, 2, 7, 1, 9, 3];

// Sorting the array in ascending order
numbers.sort();

console.log(numbers); // Output: [1, 2, 3, 4, 7, 9]

// Pitfall of sorting an array of numbers (sorts by string Unicode code points)
const numbers = [-200, 100, -300, -111, -11, 0];

numbers.sort();

console.log(numbers); // Output: [-11, -111, -200, -300, 0, 100]

// To sort numbers correctly, you should provide a comparison function
const numbers = [-200, 100, -300, -111, -11, 0];

numbers.sort((a, b) => a - b); // ascending order

console.log(numbers); // Output: [-300, -200, -111, -11, 0, 100]

const descending = [...numbers].sort((a, b) => b - a); // descending order

console.log(descending); // Output: [100, 0, -11, -111, -200, -300]

// Sorting an array of strings

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();

console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Sorting an array of objects (sort by name)

const people = [
  { name: "Carol", age: 27 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

people.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(people);
// Output: [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Carol", age: 27 },
// ]
```

---

## ES6 (ECMAScript 2015)

### [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (Conditional operator, short hand if else statement) (ES6)

```js
// condition : valIfTrue : valIfFalse
let cash = 10; // RM10
// Can buy burger with RM10? If yes, buy burger, else (:) buy fries
let canBuyBurger = cash > 15 ? "🍔" : "🍟";

console.log(canBuyBurger); // 🍟
```

---

### [Template Literals / String interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (Backticks `` ` `` `` ` `` and `${variable}`) (ES6)

```js
const firstName = "Wei Jun";
const lastName = "Neoh";
const job = "Web Developer";

// Without template literals
const greeting = lastName + " " + firstName + " wants to be a " + job + ".";

// With template literals ("Slot in" variables with ${} inside backticks)
const greeting = `${lastName} ${firstName} wants to be a ${job}.`;
```

---

### [Spread and Rest operators (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (ES6)

- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): The spread operator allows you to expand an array or iterable object into individual elements: combining arrays, copying arrays, spreading an array into individual arguments

- [Rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters): The rest operator is used to represent an indefinite number of arguments as an array: destructuring individual arguments into an array

```js
// Spread operator example: Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);
// Output: [1, 2, 3]

// Rest operator example: Destructuring individual arguments into an array
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

// Pass in any number of arguments
console.log(sum(1, 2, 3, 4));
// Output: 10
```

---

### [Destucturing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) (ES6) (Objects, Arrays, can be used with Rest operator, simplifies extracting data from arrays and objects)

```js
// Destructuring objects
const person = {
  name: "John Doe",
  age: 20,
  city: "Boston",
};

// Without destructuring
const personName = person.name; // dot notation
const personAge = person["age"]; // bracket notation
const personCity = person.city;

// With destructuring (extracting data from objects)
const { name, age, city } = person; // curly braces
// rename the variable (name -> personName), default value (if undefined)
const { name: personName, age: personAge, city: personCity, hello } = person;
console.log(personName, personAge, hello); // John Doe 20 undefined

// Destructuring arrays
const numbers = [1, 2, 3, 4, 5];

// Without destructuring
const firstNumber = numbers[0]; // square brackets (0 is the first index)
const secondNumber = numbers[1];

// With destructuring
const [firstNumber, secondNumber] = numbers;
const [firstNumber, , thirdNumber] = numbers; // Skip the second element

// Destructuring arrays with rest operator
const [firstNumber, secondNumber, ...restNumbers] = numbers;
console.log(restNumbers); // [3, 4, 5]

// Without destructuring
const first = numbers[0];
const second = numbers[1];
const rest = numbers.slice(2); // slice from index 2 to the end

// With destructuring
const [first, second, ...rest] = numbers; // rest operator (must be last)
console.log(rest); // [3, 4, 5]

// Destructuring nested objects
const personWithAddress = {
  name: "John Doe",
  age: 20,
  address: {
    city: "Boston",
    state: "MA",
  },
};

// Without destructuring
const city = person.address.city;
const state = person.address.state;

// With destructuring
const {
  name: personName, // rename the variable (name -> personName) (John Doe)
  age: personAge,
  address: { city: personCity, state: personState }, // nested object (Boston, MA)
} = personWithAddress;

// Advanced Nested Destructuring
const company = {
  name: "TechCo",
  location: {
    city: "San Francisco",
    state: "CA",
  },
  employees: [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
    },
    {
      firstName: "Bob",
      lastName: "Brown",
    },
    {
      firstName: "Eve",
      lastName: "Jones",
    },
    {
      firstName: "Charlie",
      lastName: "Davis",
    },
  ],
};

// Destructuring with advanced nested structure
const {
  name: companyName,
  location: { city: companyCity, state: companyState },
  employees: [
    { firstName: firstEmployeeFirstName, lastName: firstEmployeeLastName },
    ,
    thirdEmployee,
    ...restEmployees // rest operator
  ],
} = company;

console.log(companyName); // TechCo
console.log(companyCity); // San Francisco
console.log(companyState); // CA
console.log(firstEmployeeFirstName); // John
console.log(firstEmployeeLastName); // Doe
console.log(thirdEmployee); // { firstName: 'Bob', lastName: 'Brown' }
console.log(restEmployees); // [ { firstName: 'Eve', lastName: 'Jones' },
//  { firstName: 'Charlie', lastName: 'Davis' } ]
```

---

### [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (ES6) Shorter syntax for function expressions

```js
() => expression
// example: const sum = (a, b) => a + b;

param => expression
// ignore the brackets if there is only one parameter
// example: const square = x => x * x;

(param) => expression
// example: const square = (x) => x * x;

(param1, paramN) => expression
// example: const sum = (a, b) => a + b;

() => {
  statements
}
// example: const sum = (a, b) => {
//   const result = a + b;
//   return result;
// };

param => {
  statements
}
// example: const square = x => {
//   const result = x * x;
//   return result;
// };

(param1, paramN) => {
  statements
}
// example: const sum = (a, b) => {
//   const result = a + b;
//   return result;
// };
```

---

### [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (ES2020) (Shorter syntax for checking if a property exists in an object, array, or function)

```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

// Check if adventurer.dog exists, if it does, return adventurer.dog.name
const dogName = adventurer.dog ? adventurer.dog.name : undefined;
console.log(dogName); // Output: undefined

// Optional chaining (?.) (if adventurer.dog is undefined, return undefined)
const dogName = adventurer.dog?.name;
console.log(dogName); // Output: undefined

console.log(adventurer.someNonExistentMethod?.()); // Expected output: undefined
```

---

### [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (ES2020) (Shorter syntax for checking if a value is _null_ or _undefined_)

```js
// If the first operand is null or undefined, it returns the second operand
const greeting = null ?? "Hello, world!";
console.log(greeting); // Output: Hello, world!

const username = null;
const defaultUsername = "Guest";

// username is null, so use defaultUsername
const displayName = username ?? defaultUsername;

console.log("Welcome, " + displayName); // Output: Welcome, Guest
```

- [Nullish coalescing assignment operator (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

```js
const a = { duration: 50 };

a.duration ??= 10; // duration already exists, so the assignment doesn't happen
console.log(a.duration);
// Expected output: 50

a.speed ??= 25; // speed doesn't exist, so the assignment happens
console.log(a.speed);
// Expected output: 25

const user = {
  name: "Alice",
  age: null,
  city: undefined,
};

user.name ??= "Bob"; // Alice (already defined)
user.age ??= 25; // 25 (null so it will be assigned)
user.city ??= "New York"; // New York (undefined so it will be assigned)

console.log(user);
// Output: { name: "Alice", age: 25, city: "New York" }
```

---

### [Short circuiting](https://www.educative.io/answers/what-are-javascript-short-circuiting-operators) (ES6) Act as "gate": Evaluation of an expression from left to right stops (short-circuits) once the result is determined

- #### [Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) (Returns the first falsy value or the last value if none were found)

```js
// If the first operand is falsy, it returns the first operand
// falsy values = false, 0, "", null, undefined, NaN
const result = 0 && "This won't be displayed";

console.log(result); // Output: 0

const user = {
  name: "John Doe",
  age: 20,
};
```

**React Example**: Used in React to render a component if a condition is true, else render nothing

```jsx
const isClockVisible = true;

// The clock will be rendered if isClockVisible is true
return (
  <div>
    {isClockVisible && <Clock />}
    {/* If isClockVisible is false, Clock component will not be rendered */}
  </div>
);
```

- #### [Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) (Returns the first truthy value or the last value if none were found)

```js
// // falsy values = false, 0, "", null, undefined, NaN
// Provide a default name if none is provided
const username = "";
const defaultName = "Guest";

// If username is falsy, set the default name to Guest
const displayName = username || defaultName;

console.log("Welcome, " + displayName); // Output: Welcome, Guest

// Using logical AND (&&) operator and Logical OR (||) operator together
// If user is undefined, set the default value to "Anonymous"
// Else, set the name to user.name
const Nickname = (user && user.name) || "Anonymous";

console.log(Nickname); // Output: John Doe
```

---

### [Modules (Import / Export)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (ES6) Allow splitting code into multiple files by exporting and importing code (variables, functions, classes, etc.) between files

```js
// Named export: export multiple variables, functions, classes, etc.
// myModule.js
export const pi = 3.14159;
export function greet(name) {
  return `Hello, ${name}!`;
}

// Importing named exports
// main.js

// rename the imported variable with the "as" keyword
import { pi, greet as hello } from "./myModule.js";

console.log(pi); // 3.14159
console.log(hello("John Doe")); // Hello, John Doe!

// Export default: only one default export per file
// myModule.js
// myModule.js
export default function add(a, b) {
  return a + b;
}

// Importing default exports
// main.js
// The add is not in curly braces because it is the default export
// You can name the imported variable anything you want
import add from "./myModule.js";

console.log(add(1, 2)); // 3

// Same as above, but with a named export
import addFunc from "./myModule.js";
```

---

### [Promise and Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) (ES6) (Asynchronous programming)

1. JavaScript is a single-threaded language, which means it can execute only one operation at a time in a synchronous manner (one after another, not in parallel, line by line)

2. However, many tasks in web development, such as fetching data from a server or reading/writing files, are inherently asynchronous. To handle these asynchronous operations efficiently and maintain a responsive user interface, JavaScript provides mechanisms like Promises and Async/Await so that asynchronous operations can be executed in the background without blocking the main thread

[**Promise**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise): A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation. It allows you to work with asynchronous code in a more structured and readable way.

- **Creating a Promise**: You can create a Promise using the Promise constructor, which takes a function called the executor. The executor function has two parameters: resolve and reject, which are functions you call to indicate the completion status of the asynchronous operation.

- **Consuming a Promise**: You can consume a Promise's result using the .then() and .catch() methods. .then() is used for handling the successful completion, while .catch() handles any errors that occur during the operation.

```js
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  setTimeout(() => {
    // If successful, call resolve with the result
    resolve("Operation completed successfully");

    // If there's an error, call reject with an error message
    // reject("Operation failed");
  }, 2000);
});

// Consuming a promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

- [**Promise.all**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): The Promise.all() method takes an array of promises and returns a single Promise that resolves to an array of the results. It resolves when all the promises in the array resolve, or **rejects if _any_ of the promises reject**

- [**Promise.allSettled**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): The Promise.allSettled() method takes an array of promises and returns a single Promise that resolves to an array of objects representing the status of each promise. It **resolves when all the promises in the array have settled (resolved or rejected), or rejects if the array contains no promises**

```js
// Promise.all: Wait for all promises to resolve or reject
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "three");
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values); // ["one", "two"]
});

const promises = [promise1, promise2, promise3];

// Promise all immediately rejects if any of the promises reject
Promise.all(promises)
  .then((values) => {
    console.log(values); // This is not called
  })
  .catch((error) => {
    console.log(error); // "three"
  });

// Promise.allSettled: Wait for all promises to settle (resolve or reject)
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // [
  //   { status: "fulfilled", value: "one" },
  //   { status: "fulfilled", value: "two" },
  //   { status: "rejected", reason: "three" },
  // ]
});
```

- [**Async/Await**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await): Async/Await is a new way to write asynchronous code. It is built on top of Promises, and it provides a simpler and more concise syntax for dealing with asynchronous code in comparison to Promises. Async/Await is also non-blocking, which means it doesn't block the main thread while waiting for asynchronous operations to complete

```js
// async keyword: The async keyword is used to define an asynchronous function
async function fetchData() {
  // try-catch block: Used to handle errors
  try {
    // await keyword: Used to wait for the asynchronous
    // operation to complete
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    // all errors will be caught here
    throw new Error("Failed to fetch data");
  }
}

// Calling the async function
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Real World Example:

```js
// Fetch user data from GitHub API
async function fetchUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}

fetchUserData("jun-del")
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });

// Chain multiple async functions together
async function performAsyncTasks() {
  try {
    // Wait for the first async function to complete before
    // running the second one
    const result1 = await someAsyncFunction();
    const result2 = await anotherAsyncFunction(result1);

    // Return the result of the second async function
    return result2;
  } catch (error) {
    throw new Error("An error occurred during async tasks");
  }
}

performAsyncTasks()
  // Return the result of the second async function
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## Resources

**Your go to resource for all things JavaScript are either of these two:**

- **[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
- **[JavaScript.info](https://javascript.info/)**

---

To understand the basics of how JavaScript works under the hood, I recommend watching the following video:

#### [An Introduction to Functions, Execution Context and the Call Stack](https://www.youtube.com/watch?v=exrc_rLj5iw)

```js
const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

- thread of execution, callstack, execution context, global memory, local memory, scope

---

#### Additional Resources

- [How to Use ES6 Features in React](https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/)
