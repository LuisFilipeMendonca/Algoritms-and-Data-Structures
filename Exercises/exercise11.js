// ==================================================================================================
// Implement quick sort algorithm with the aid of your pivot helper.
// This function is responsible for taking an array, setting the pivot value, and mutating the array.
// ==================================================================================================

function pivot(arr, callback, start = 0, end = arr.length - 1) {
  let pivot = start;

  if (typeof callback !== "function") {
    for (let i = start + 1; i <= end; i++) {
      if (arr[start] > arr[i]) {
        pivot++;
        swap(arr, pivot, i);
      }
    }
  } else {
    for (let i = start + 1; i <= end; i++) {
      if (callback(arr[start], arr[i]) > 0) {
        pivot++;
        swap(arr, pivot, i);
      }
    }
  }

  swap(arr, pivot, start);

  return pivot;
}

function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

function srtComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}

function quickSort(arr, callback, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, callback, left, right);

    quickSort(arr, callback, left, pivotIdx - 1);
    quickSort(arr, callback, pivotIdx + 1, right);
  }

  return arr;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
const arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

console.log(quickSort(arr1));
console.log(quickSort(arr2));
console.log(quickSort(arr3, srtComp));

const moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];
quickSort(moarKittyData, oldestToYoungest);
console.log(moarKittyData);
