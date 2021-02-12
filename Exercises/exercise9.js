// =====================================================================================================
// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array.
// The function takes 2 parameters: an array and an optional comparator function.
// =====================================================================================================

function merge(arr1, arr2, callback) {
  const newArr = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  if (typeof callback !== "function") {
    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
      if (arr1[arr1Idx] < arr2[arr2Idx]) {
        newArr.push(arr1[arr1Idx]);
        arr1Idx++;
      } else {
        newArr.push(arr2[arr2Idx]);
        arr2Idx++;
      }
    }
  } else {
    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
      if (callback(arr1[arr1Idx], arr2[arr2Idx]) < 0) {
        newArr.push(arr1[arr1Idx]);
        arr1Idx++;
      } else {
        newArr.push(arr2[arr2Idx]);
        arr2Idx++;
      }
    }
  }

  if (arr1Idx < arr1.length) newArr.push(...arr1.slice(arr1Idx));
  else if (arr2Idx < arr2.length) newArr.push(...arr2.slice(arr2Idx));

  return newArr;
}

function mergeSort(arr, callback) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right, callback);
}

function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}

console.log(mergeSort([4, 20, 12, 10, 7, 9]));
console.log(mergeSort([0, -10, 7, 4]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([]));

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(mergeSort(kitties, strComp));
