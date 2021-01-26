// =================================================================================================
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// =================================================================================================

// First solution -> Time Complexity O(n^2)

function sumZeroV1(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[j] + arr[i] === 0 && j !== i) {
        return [arr[j], arr[i]];
      }
    }
  }
}

console.log(sumZeroV1([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroV1([-2, 0, 1, 3]));
console.log(sumZeroV1([1, 2, 3]));
console.log("------------------------------");
// =================================================================================================

// Refatored solution -> Time Complexity O(n) -> Space Complexity O(1)

function sumZeroV2(arr) {
  let lowerPointer = 0;
  let higherPointer = arr.length - 1;

  while (lowerPointer < higherPointer) {
    const sum = arr[lowerPointer] + arr[higherPointer];
    if (sum > 0) {
      higherPointer--;
    }

    if (sum < 0) {
      lowerPointer++;
    }

    if (sum === 0) {
      return [arr[lowerPointer], arr[higherPointer]];
    }
  }
}

console.log(sumZeroV2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroV2([-2, 0, 1, 3]));
console.log(sumZeroV2([1, 2, 3]));
