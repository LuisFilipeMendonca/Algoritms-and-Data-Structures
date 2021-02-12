// =======================================
// Implement the selection sort algortihm.
// =======================================

function selectionSort(arr) {
  let minValueIdx;

  for (let i = 0; i < arr.length; i++) {
    minValueIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIdx]) {
        minValueIdx = j;
      }
    }

    if (i !== minValueIdx) {
      [arr[i], arr[minValueIdx]] = [arr[minValueIdx], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9]));
console.log(selectionSort([0, -10, 7, 4]));
console.log(selectionSort([1, 2, 3]));
console.log(selectionSort([]));
