const assert = require("assert");

// Task: Complete the function bubbleSort() that sort the array in increasing order
// The function should return the sorted array
// You should use bubble sort algorithm

const bubbleSort = (arr) => {
  // Copy the input array and work on the cloned array
  // In JS, we always try to work in an immutable way
  let inputArr = [...arr];

  // Main Logic
  // Add your code here

  for (let i = 0; i < inputArr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < inputArr.length - i - 1; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return inputArr;

  // Solution 2:
  // 	for (let i = 0; i < arr.length; ++i) {
  // 		for (let j = 0; j < arr.length - 1 - i; ++j) {
  // 				if (arr[j] > arr[j + 1]) {
  // 						const temp = arr[j];
  // 						arr[j] = arr[j + 1];
  // 						arr[j + 1] = temp;
  // 				}
  // 		}
  // }
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(bubbleSort([1]), [1], "Test case 1 output is wrong.");
assert.deepStrictEqual(bubbleSort([]), [], "Test case 2 output is wrong.");
assert.deepStrictEqual(
  bubbleSort([9, 7, 5, 4, 1, 2]),
  [1, 2, 4, 5, 7, 9],
  "Test case 3 output is wrong."
);
console.log("All test cases passed.");
