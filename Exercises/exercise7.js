// ====================================================================================================================================================================
// Implement insertionSort. Given an array, both algorithms will sort the values in the array.
// The function takes 2 parameters: an array and an optional comparator function.
// The comparator function is a callback that will take two values from the array to be compared.
// The function returns a negative value if the first value is less that the second, a positive value if the first is greater than the second, and 0 if both are equal.
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from the smallest to largest.
// ====================================================================================================================================================================

function insertionSort(arr, callback) {
  if (typeof callback !== "function") {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (callback(arr[i], arr[j]) < 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }

  return arr;
}

function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));
console.log(insertionSort([0, -10, 7, 4]));

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
insertionSort(kitties, strComp);
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
insertionSort(moarKittyData, oldestToYoungest);
console.log(moarKittyData);
