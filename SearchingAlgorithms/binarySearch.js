// Binary Search

// Rather than eliminating one element at a time, you can eliminate half of the remaining elemenst at a time.
// Binary search only works on sorted arrays!

// ==============================================================================================================================
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.
// ==============================================================================================================================

// Time Complexity => O(1) best (first middle position) => O(log n) worst and average (length 16 => 4 interações => log2 16 = 4)

function binarySearch(arr, value) {
  let begin = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + begin) / 2);

  while (arr[middle] !== value && begin <= end) {
    if (arr[middle] > value) end = middle - 1;
    else begin = middle + 1;
    middle = Math.floor((end + begin) / 2);
  }

  return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      0,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  )
);
