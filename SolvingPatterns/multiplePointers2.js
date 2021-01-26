// =======================================================================================================================
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// =======================================================================================================================

function countUniqueValues(arr) {
  let firstPointer = 0;
  let secondPointer = 1;

  if (arr.length <= 0) return firstPointer;

  while (secondPointer < arr.length) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    } else {
      secondPointer++;
    }
  }

  return ++firstPointer;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
