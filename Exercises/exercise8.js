// ==================================================================================================================================================================
// Givens two sorted arrays, write a functions called merge which accepts two sorted arrays and returns a new array with both of the values form each array sorted.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
// As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this is what will be used.
// ==================================================================================================================================================================

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

  if (arr1Idx === arr1.length) newArr.push(...arr2.slice(arr2Idx));
  else if (arr2Idx === arr2.length) newArr.push(...arr1.slice(arr1Idx));

  return newArr;
}

function strLengthComp(a, b) {
  return a.length - b.length;
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2));
const arr3 = [-2, -1, 0, 4, 5, 6];
const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(merge(arr3, arr4));
const arr5 = [3, 4, 5];
const arr6 = [1, 2];
console.log(merge(arr5, arr6));
console.log("----------------------");

const names = ["Bob", "Ethel", "Christine"];
const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];
console.log(merge(names, otherNames, strLengthComp));
