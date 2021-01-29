// =========================================================================================================================
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
// If the value does not exist in the array, return -1.
// =========================================================================================================================

// Time Complexity => O(1) best (first position) => O(n) worst and average

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
console.log(linearSearch([100], 200));
