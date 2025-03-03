const assert = require("assert");

// Task: Complete the function partition() and quickSort() that the quickSort() function would sort the input array
// The quickSort() function should sort the input array in-place
// You don't need to return the result array, just make changes directly in the input array
// The partition() function is a function that is used by quickSort() function
// You would want to use recursion for this
// You should use quick sort algorithm for this exercise

const partition = (arr, minIndex, maxIndex) => {
  const pivot = arr[maxIndex];

  let i = minIndex - 1; // -1

  for (let j = minIndex; j <= maxIndex - 1; j++) {
    if (arr[j] < pivot) {
      i++;

      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const tempIPlus1 = arr[i + 1];
  arr[i + 1] = pivot;
  arr[maxIndex] = tempIPlus1;

  return i + 1;
};

const quickSort = (arr, minIndex, maxIndex) => {
  if (maxIndex > minIndex) {
    pi = partition(arr, minIndex, maxIndex);
    quickSort(arr, minIndex, pi - 1);
    quickSort(arr, pi + 1, maxIndex);
  }
};

// export function quickSort(nums: number[]) {
//   // code goes here

//   // Base case, array of length 0 or 1
//   if (nums.length < 2) {
//     return nums;
//   }

//   // Choose pivot
//   const pivot = nums[nums.length - 1];

//   // Seperate into left and right arrays

//   const left = [];
//   const right = [];

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }

//   // Call Quicksort on left and right arrays
//   const sortedLeft: number[] = quickSort(left);
//   const sortedRight: number[] = quickSort(right);

//   // Return left concat pivot and right
//   return sortedLeft.concat(pivot, sortedRight);
// }

// DO NOT MODIFY CODE BELOW
// Test Cases
arr1 = [6, 4, 2, 3, 11];
quickSort(arr1, 0, arr1.length - 1);
assert.deepStrictEqual(arr1, [2, 3, 4, 6, 11], "Test case 1 output is wrong.");

arr2 = [8, 7, 6, 5, 4, 3, 2, 1];
quickSort(arr2, 0, arr2.length - 1);
assert.deepStrictEqual(
  arr2,
  [1, 2, 3, 4, 5, 6, 7, 8],
  "Test case 1 output is wrong."
);

console.log("All test cases passed.");
