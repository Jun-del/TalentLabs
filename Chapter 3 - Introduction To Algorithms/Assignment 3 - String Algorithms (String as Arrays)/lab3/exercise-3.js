const assert = require("assert");

// Task: Complete the function that takes in two strings and check if there are anagram
// They are not anagram if they are the same word
// You should ignore cases,
// i.e. "Pairs" and "paris" is also anagram although they have the letter "P" in different cases
// E.g. Input String 1: "Paris", Input String 2: "Pairs" => true
// E.g. Input String 1: "Paris", Input String 2: "pairs" => true
// E.g. Input String 1: "Hello", Input String 2: "Bye" => false

const checkAnagram = (inputString1, inputString2) => {
	// Add your code here

	const inputString1LowerCase = inputString1.toLowerCase();
	const inputString2LowerCase = inputString2.toLowerCase();

	const inputArray1 = inputString1LowerCase.split("");
	const inputArray2 = inputString2LowerCase.split("");

	const sortedArray1 = inputArray1.sort();
	const sortedArray2 = inputArray2.sort();

	if (
		sortedArray1.join("") === sortedArray2.join("") &&
		inputString1LowerCase !== inputString2LowerCase
	) {
		return true;
	}

	return false;
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.strictEqual(
	checkAnagram("Paris", "Pairs"),
	true,
	"Test case 1 output is wrong."
);
assert.strictEqual(
	checkAnagram("Paris", "pairs"),
	true,
	"Test case 2 output is wrong."
);
assert.strictEqual(
	checkAnagram("Hello", "Bye"),
	false,
	"Test case 3 output is wrong."
);
assert.strictEqual(
	checkAnagram("Paris", "Paris"),
	false,
	"Test case 4 output is wrong."
);
assert.strictEqual(
	checkAnagram("Paris", "paris"),
	false,
	"Test case 5 output is wrong."
);
console.log("All Tests Passed.");