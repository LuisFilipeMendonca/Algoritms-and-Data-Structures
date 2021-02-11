// ===================================================================================
// Given an array of 1s and 0s which has all 1s first followed by all 0s.
// Write a function called countZeros, which returns the number of zeros in the array.
// Time complexity -> O(log n)
// ===================================================================================

function countZeros(arr) {
  let rightIdx = arr.length;
  let leftIdx = 0;
  let middleIdx;

  while (leftIdx < rightIdx) {
    middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[middleIdx] === 1) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return arr.slice(leftIdx).length;
}

console.log(countZeros([1, 1, 1, 1, 0, 0]));
console.log(countZeros([1, 0, 0, 0, 0]));
console.log(countZeros([0, 0, 0]));
console.log(countZeros([1, 1, 1, 1]));
