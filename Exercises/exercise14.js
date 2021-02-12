// =======================================================================================================================================================================
// Implement a function called mostDigits which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.
// =======================================================================================================================================================================

function mostDigits(arr) {
  let maxDigitNum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxDigitNum = Math.max(maxDigitNum, digitCount(arr[i]));
  }

  return maxDigitNum;
}

function digitCount(num) {
  return num.toString().length;
}

console.log(mostDigits([1, 9, 10, 100, 99]));
console.log(mostDigits([100, 1010, 1, 500]));
console.log(mostDigits([0, 100000, 400, 12, 8]));
console.log(mostDigits([]));
