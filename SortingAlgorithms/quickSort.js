// Time Complexity => O(n log n) best and average case => O(n^2) worst case (picking min or max value)
// Space Complexity = O(log n)

function swap(arr, index1, index2) {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      pivot++;
      swap(arr, pivot, i);
    }
  }

  swap(arr, pivot, start);

  return pivot;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3, -1]));
