const assert = require("assert");

// Task: Complete the function merge() and mergeSort() that the mergeSort() function would sort the input array
// The mergeSort() function should return the sorted array
// The merge() function is a function that is used by mergeSort() function
// You would want to use recursion for this
// You should use merge sort algorithm for this exercise

const merge = (leftList, rightList) => {
  // Add your code here
  const arr = [];

  while (leftList.length > 0 && rightList.length > 0) {
    if (leftList[0] < rightList[0]) {
      arr.push(leftList.shift());
    } else if (leftList[0] > rightList[0]) {
      arr.push(rightList.shift());
    }
  }

  return arr.concat(leftList).concat(rightList);
};

const mergeSort = (inputList) => {
  // Add your code here
  if (inputList.length < 2) {
    return inputList;
  }

  const middle = inputList.length / 2;

  const left = inputList.splice(0, middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(inputList);

  return merge(sortedLeft, sortedRight);
};

// export function mergeSort(nums: Array<number>): number[] {
// 	// base case, returns if array length is 1 or 0
// 	if (nums.length < 2) {
// 		return nums;
// 	}

// 	// break into two smaller arrays
// 	const length = nums.length;
// 	const middle = Math.floor(length / 2); // if 7 length, returns 4

// 	const left = nums.slice(0, middle);
// 	const right = nums.slice(middle);

// 	// call mergeSort of left and right
// 	const sortedLeft = mergeSort(left);
// 	const sortedRight = mergeSort(right);

// 	// return the merge of left and right
// 	return merge(sortedLeft, sortedRight);
// }

// const merge = (left: number[], right: number[]): number[] => {
// 	//return one sorted array
// 	const result: number[] = [];

// 	while (left.length && right.length) {
// 		if (left[0] <= right[0]) {
// 			result.push(left.shift()!); // removes first element from left and push to result
// 		} else {
// 			result.push(right.shift()!);
// 		}
// 	}

// 	return result.concat(left, right);
// };

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
