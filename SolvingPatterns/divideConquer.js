// ==============================================================================================================================================================
// Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed to the function is located.
// If the value is not found, return -1.
// ==============================================================================================================================================================

// First solution -> Time Complexity O(n) (Linear Search)

function searchV1(arr, searchNumber) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchNumber) {
      return i;
    }
  }
  return -1;
}

console.log(searchV1([1, 2, 3, 4, 5, 6], 4));
console.log(searchV1([1, 2, 3, 4, 5, 6], 6));
console.log(searchV1([1, 2, 3, 4, 5, 6], 11));
console.log("-------------------------------");

// Refatored solution -> Time Complexity O(log n) (Binary Search)

function searchV2(arr, searchNumber) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let currentElement = arr[middle];

    if (currentElement < searchNumber) {
      min = middle + 1;
    } else if (currentElement > searchNumber) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(searchV2([1, 2, 3, 4, 5, 6], 4));
console.log(searchV2([1, 2, 3, 4, 5, 6], 6));
console.log(searchV2([1, 2, 3, 4, 5, 6], 11));
