const assert = require("assert");

// Task: Complete the function that takes in an array and the missing numbers for a complete number sequence
// E.g. input = [3, 7, 1], output should be [2, 4, 5, 6]

const findMissingNumber = (arr) => {
	// Add your code here

	// Math.min(...arr) and Math.max(...arr)
	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}

	const missingNumber = [];

	// min + 1 and i < max to exclude min and max since they are not missing
	for (let i = min + 1; i < max; i++) {
		if (arr.indexOf(i) === -1) {
			missingNumber.push(i);
		}
	}

	return missingNumber;
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(
	findMissingNumber([3, 7, 1]),
	[2, 4, 5, 6],
	"Test case 1 output is wrong."
);
assert.deepStrictEqual(
	findMissingNumber([2, 8, 0]),
	[1, 3, 4, 5, 6, 7],
	"Test case 2 output is wrong."
);
assert.deepStrictEqual(
	findMissingNumber([1, 2]),
	[],
	"Test case 3 output is wrong."
);
console.log("All test cases passed.");
