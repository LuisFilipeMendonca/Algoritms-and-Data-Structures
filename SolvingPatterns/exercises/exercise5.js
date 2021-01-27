// =======================================================================================================
// Given an array of integers and a number, write a function calledmaxSubarraySum.
// This functions find the maximum sum of a subarray with the length of the number passed to the function.
// =======================================================================================================

function maxSubarraySum(arr, value) {
  if (arr.length < value) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < value; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = value; i < arr.length; i++) {
    tempSum = tempSum - arr[i - value] + arr[i];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
