// ================================================================================================
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. You can return the elements in any order.
// ================================================================================================

function findAllDuplicates(arr) {
  const frequencyCounter = {};
  const duplicateArr = [];

  for (let value of arr) {
    frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      duplicateArr.push(+key);
    }
  }

  return duplicateArr;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findAllDuplicates([4, 3, 2, 1, 0]));
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
