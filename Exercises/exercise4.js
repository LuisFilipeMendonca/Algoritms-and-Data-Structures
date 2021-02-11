// ========================================================================================================
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array. If the value is not found, return -1.
// Time complexity -> O(log n)
// =========================================================================================================

function findRotatedIndex(arr, num) {
  let middleIdx;
  let rightIdx = arr.length;
  let leftIdx = 0;

  while (leftIdx < rightIdx) {
    middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[middleIdx] === num) return middleIdx;

    if (
      arr[middleIdx] < num &&
      ((arr[arr.length - 1] < num && arr[0] > num) || arr[0] > num)
    ) {
      leftIdx = middleIdx;
    } else if ((arr[middleIdx] < num && arr[0] < num) || arr[middleIdx] > num) {
      rightIdx = middleIdx;
    }
  }

  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16));
