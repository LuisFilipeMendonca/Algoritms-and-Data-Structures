// =======================================================================================================================
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
// =======================================================================================================================

// First solution -> Time Complexity O(n^2)

function maxSubarraySumV1(arr, length) {
  let sum = null;

  if (arr.length < length) return null;

  for (let i = 0; i <= arr.length - length; i++) {
    let newSum = 0;

    for (let j = i; j < length + i; j++) {
      newSum += arr[j];

      if (newSum > sum) {
        sum = newSum;
      }
    }
  }

  return sum;
}

console.log(maxSubarraySumV1([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySumV1([4, 2, 1, 6], 1));
console.log(maxSubarraySumV1([], 1));
console.log(maxSubarraySumV1([1, 2, 5, 2, 8, 1, 5], 4));
console.log("------------------------------");
// =======================================================================================================================

// Refatored solution -> Time Complexity O(n)

function maxSubarraySumV2(arr, length) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < length) return null;

  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = length; i < arr.length; i++) {
    tempSum = tempSum - arr[i - length] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySumV2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySumV2([4, 2, 1, 6], 1));
console.log(maxSubarraySumV2([], 1));
console.log(maxSubarraySumV2([1, 2, 5, 2, 8, 1, 5], 4));
