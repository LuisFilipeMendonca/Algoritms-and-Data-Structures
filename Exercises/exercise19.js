// ===================================================================================================================
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.
// ===================================================================================================================

function findPair(array, n) {
  const hash = {};
  for (let index = 0; index < array.length; index++) {
    if (hash[array[index]]) {
      return true;
    }
    hash[array[index] - n] = 1;
    hash[array[index] + n] = 1;
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2));
