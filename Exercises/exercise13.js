// ==================================================================================================================================
// Implement a function called digitCount which accepts a positive integer and returns the number of the digits that the integer has.
// ==================================================================================================================================

function digitCount(num) {
  return num.toString().length;
}

console.log(digitCount(1));
console.log(digitCount(9));
console.log(digitCount(25));
console.log(digitCount(314));
console.log(digitCount(1234));
console.log(digitCount(77777));
