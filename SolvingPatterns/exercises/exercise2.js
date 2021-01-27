// =============================================================================================
// Implement a function called, areThereDuplicates which accepts a variable number of arguments.
// Check whether there are any duplicates among the arguments passed in.
// =============================================================================================

function areThereDuplicatesV1(...args) {
  let frequency = {};

  for (let value of args) {
    frequency[value] = (frequency[value] || 0) + 1;
  }

  for (let value in frequency) {
    if (frequency[value] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicatesV1(1, 2, 3));
console.log(areThereDuplicatesV1(1, 2, 2));
console.log(areThereDuplicatesV1("a", "b", "c", "a"));
console.log("------------------------------");

function areThereDuplicatesV2() {
  return [...new Set(arguments)].length !== arguments.length;
}

console.log(areThereDuplicatesV2(1, 2, 3));
console.log(areThereDuplicatesV2(1, 2, 2));
console.log(areThereDuplicatesV2("a", "b", "c", "a"));
