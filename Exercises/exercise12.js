// ===============================================================================================================================================
// Implement a function called getDigit which accepts a positive integer and a position, and returns the digit in that number at a given position.
// The position reads from the right to left, so the 0th position corresponds to the rightmost digit.
// ===============================================================================================================================================

function getDigit(num, idx) {
  let currentIdx = 0;
  const numStr = num.toString();

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (currentIdx === idx) {
      return +numStr[i];
    }
    currentIdx++;
  }

  return 0;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));

console.log(getDigit(8987, 0));
console.log(getDigit(8987, 1));
console.log(getDigit(8987, 2));
console.log(getDigit(8987, 3));
console.log(getDigit(8987, 4));
