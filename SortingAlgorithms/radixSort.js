// Time Complexity => O(nk) => n - length of array / k - number of digits
// Space Complexity => O(n + k)

function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function countDigit(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigit = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(countDigit(arr[i]), maxDigit);
  }
  return maxDigit;
}

function radixSort(arr) {
  const maxLen = mostDigits(arr);

  for (let i = 0; i < maxLen; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);

      buckets[digit].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([1, 25, 8474, 2563, 1245, 120]));
