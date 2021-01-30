// Time complexity => O(n) best case (almost sorted) => O(n^2) average and worst case
// Space complexity => O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([2, 5, 1, 7, 9, -1]));
