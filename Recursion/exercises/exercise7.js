// ============================================================================================================================
// Write a recursive function called isPalindrome which accepts an array and a callback.
// The function return true if a single value in the array return true when passed to the callback. Otherwise it returns false.
// ============================================================================================================================

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (!callback(arr[0])) return someRecursive(arr.slice(1), callback);
  return true;
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8, 11], (val) => val > 10));
