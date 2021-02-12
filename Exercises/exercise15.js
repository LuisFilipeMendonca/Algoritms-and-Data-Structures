// =========================================================================================
// Implement radix sort which accepts an array of numbers and sorts them in ascending order.
// =========================================================================================

function radixSort(arr) {
  const maxLen = mostDigits(arr);
  let buckets;
  let digit;

  for (let i = 0; i < maxLen; i++) {
    buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function mostDigits(arr) {
  let maxDigitNum = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigitNum = Math.max(maxDigitNum, digitCount(arr[i]));
  }

  return maxDigitNum;
}

function digitCount(num) {
  return num.toString().length;
}

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

console.log(radixSort([8, 6, 1, 12]));
console.log(radixSort([10, 100, 1, 1000, 10000000]));
console.log(
  radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
);
console.log(radixSort([]));
