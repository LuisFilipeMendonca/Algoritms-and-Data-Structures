// ====================================================================================================================================================
// Implement a function called pivot. This function contains nearly all of the logic you'll need in order to implement Quick Sort in the next exercise.
// The pivot function is responsible for taking an array, setting the pivot value, and mutating the array.
// All the values less that the pivot wind up to the left, and all values greater to the right. Should return the index of the pivot.
// ====================================================================================================================================================

function pivot(arr, callback, start = 0, end = arr.length - 1) {
  let pivot = start;

  if (typeof callback !== "function") {
    for (let i = pivot + 1; i <= end; i++) {
      if (arr[start] > arr[i]) {
        pivot++;
        swap(arr, pivot, i);
      }
    }
  } else {
    for (let i = pivot + 1; i <= end; i++) {
      if (callback(arr[start], arr[i]) > 0) {
        pivot++;
        swap(arr, pivot, i);
      }
    }
  }

  swap(arr, start, pivot);

  return pivot;
}

function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

function strLength(a, b) {
  return a.length - b.length;
}

const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
const arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

console.log(pivot(arr1));
console.log(pivot(arr2));
console.log(pivot(arr3, strLength));
