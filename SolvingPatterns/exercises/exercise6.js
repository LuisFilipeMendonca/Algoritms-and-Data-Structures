// ==================================================================================================================================================
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of the contiguous subarray which the sum is greater or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
// ==================================================================================================================================================

function minSubArrayLen(arr, value) {
  let position = 0;
  let windowSize = 1;
  let minLength = Infinity;

  while (position < arr.length) {
    const newArray = arr.slice(position, windowSize);
    const sum = newArray.reduce((acc, curr) => acc + curr, 0);

    if (sum >= value) {
      minLength = Math.min(minLength, newArray.length);
    }

    if (sum >= value || windowSize > arr.length) {
      position++;
      windowSize = position + 1;
    }

    if (sum < value) {
      windowSize++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
