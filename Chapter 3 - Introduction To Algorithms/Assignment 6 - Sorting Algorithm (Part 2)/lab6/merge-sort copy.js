const assert = require("assert");

// Task: Complete the function merge() and mergeSort() that the mergeSort() function would sort the input array
// The mergeSort() function should return the sorted array
// The merge() function is a function that is used by mergeSort() function
// You would want to use recursion for this
// You should use merge sort algorithm for this exercise

const mergeSort = (inputList) => {
  // Add your code here
  if (inputList.length < 2) {
    return inputList;
  }

  const length = inputList.length;
  const middle = Math.floor(length / 2);

  const left = inputList.splice(0, middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(inputList);

  return merge(sortedLeft, sortedRight);
};

const merge = (leftList, rightList) => {
  // Add your code here

  const result = [];

  while (leftList.length && rightList.length) {
    if (leftList[0] < rightList[0]) {
      result.push(leftList.shift());
    } else {
      result.push(rightList.shift());
    }
  }

  return result.concat(leftList, rightList);
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(mergeSort([1]), [1], "Test case 1 output is wrong.");
assert.deepStrictEqual(
  mergeSort([8, 3, 2, 4, 9, 0, 1]),
  [0, 1, 2, 3, 4, 8, 9],
  "Test case 2 output is wrong."
);
assert.deepStrictEqual(
  mergeSort([9, 7, 5, 4, 1, 2]),
  [1, 2, 4, 5, 7, 9],
  "Test case 3 output is wrong."
);
console.log("All test cases passed.");
