// ============================================================================================================
// Write a function called averagePair that receives a sorted array and a target average.
// Determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
// ============================================================================================================

function averagePair(arr, avg) {
  let pointerOne = 0;
  let pointerTwo = 1;

  while (pointerOne < arr.length - 1) {
    let average = (arr[pointerOne] + arr[pointerTwo]) / 2;

    if (average === avg) {
      return true;
    }

    if (pointerTwo < arr.length - 1) {
      pointerTwo++;
    }

    if (pointerTwo >= arr.length - 1) {
      pointerOne++;
      pointerTwo = pointerOne + 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
