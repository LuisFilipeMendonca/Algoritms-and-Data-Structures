// ====================================================================================================================================================================
// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array.
// The function takes 2 parameters: an array and an optional comparator function.
// The comparator function is a callback that will take two values from the array to be compared.
// The function returns a negative value if the first value is less that the second, a positive value if the first is greater than the second, and 0 if both are equal.
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from the smallest to largest.
// ====================================================================================================================================================================

function bubbleSort(arr, callback) {
  if (!arr.length) return arr;

  let result;

  if (typeof callback !== "function") {
    let wasSwapped;
    for (let i = 0; i < arr.length - 1; i++) {
      wasSwapped = false;
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          wasSwapped = true;
        }
      }
      if (!wasSwapped) break;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      wasSwapped = false;
      for (let j = 0; j < arr.length - 1; j++) {
        result = callback(arr[j], arr[j + 1]);
        if (result >= 1) {
          swap(arr, j, j + 1);
          wasSwapped = true;
        }
      }
      if (!wasSwapped) break;
    }
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 32, 232, 32, 4, 35, 34];
bubbleSort(nums);
console.log(nums);

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
bubbleSort(kitties, strComp);
console.log(kitties);

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
bubbleSort(moarKittyData, oldestToYoungest);
console.log(moarKittyData);
