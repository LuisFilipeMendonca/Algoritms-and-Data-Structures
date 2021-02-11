// ==================================================================================================================================
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array.
// Time complexity -> O(log n)
// ==================================================================================================================================

function sortedFrequency(arr, num) {
  let count = 0;
  let middleIdx;

  while (arr.length) {
    middleIdx = Math.floor(arr.length / 2);

    if (arr[middleIdx] === num) {
      count++;
      arr.splice(middleIdx, 1);
    }

    if (arr[middleIdx] < num) {
      arr.splice(0, middleIdx + 1);
    }

    if (arr[middleIdx] > num) {
      arr.splice(middleIdx);
    }
  }

  return count > 0 ? count : -1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4], 3));
