const assert = require("assert");

// Task: Complete the function insertionSort() that sort the array in increasing order
// The function should return the sorted array
// You should use insertion sort algorithm

const insertionSort = (arr) => {
  // Copy the input array and work on the cloned array
  // In JS, we always try to work in an immutable way
  let inputArr = [...arr];

  // Main Logic
  // Add your code here

  for (let i = 0; i < inputArr.length; i++) {
    const valueToInsert = inputArr[i];
    let j = i - 1;

    while (j >= 0 && inputArr[j] > valueToInsert) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }

    inputArr[j + 1] = valueToInsert;
  }

  return inputArr;

  // solution
  // for (let i = 1; i < nums.length; i++) {
  //   const valueToInsert = nums[i]; // 1
  //   let j = i - 1; // 0
  //   while (j >= 0 && nums[j] > valueToInsert) {
  //     // 0 > 1
  //     nums[j + 1] = nums[j]; /// 1 = 0
  //     j--; // -1
  //   }
  //   // 0 = value to insert
  //   nums[j + 1] = valueToInsert;
  // }

  // return nums;
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(insertionSort([1]), [1], "Test case 1 output is wrong.");
assert.deepStrictEqual(insertionSort([]), [], "Test case 2 output is wrong.");
assert.deepStrictEqual(
  insertionSort([9, 7, 5, 4, 1, 2]),
  [1, 2, 4, 5, 7, 9],
  "Test case 3 output is wrong."
);
console.log("All test cases passed.");
