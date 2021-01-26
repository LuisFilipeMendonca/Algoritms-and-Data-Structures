// =====================================================================================================================
// Write a funtion which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// =====================================================================================================================

// First solution -> Time Complexity O(n^2)

function sameV1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let areSame = true;

  arr1.forEach((outerValue) => {
    const existsIndex = arr2.findIndex(
      (innerValue) => innerValue === outerValue ** 2
    );

    areSame = existsIndex >= 0 ? true && areSame : false && areSame;
    arr2.splice(existsIndex, 1);
  });

  return areSame;
}

console.log(sameV1([1, 2, 3], [1, 4, 9]));
console.log(sameV1([1, 2, 1], [1, 4]));
console.log(sameV1([1, 2, 3], [9, 4, 1]));
console.log("---------------------------------------");

// =====================================================================================================================

// Refatored solution -> Time Complexity O(n)

function sameV2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounterOne = {};
  const frequencyCounterTwo = {};

  for (let value of arr1) {
    frequencyCounterOne[value] = (frequencyCounterOne[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounterTwo[value] = (frequencyCounterTwo[value] || 0) + 1;
  }

  for (let value in frequencyCounterOne) {
    if (
      !(value ** 2 in frequencyCounterTwo) ||
      frequencyCounterTwo[value ** 2] !== frequencyCounterOne[value]
    )
      return false;
  }
  return true;
}

console.log(sameV2([1, 2, 3], [1, 4, 9]));
console.log(sameV2([1, 2, 1], [1, 4]));
console.log(sameV2([1, 2, 3], [9, 4, 1]));
