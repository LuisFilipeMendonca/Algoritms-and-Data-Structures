// Time complexity => O(n log n)
// Space complexity => O(n)

function merge(arr1, arr2) {
  let newArr = [];
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < arr1.length && pointerTwo < arr2.length) {
    if (arr1[pointerOne] < arr2[pointerTwo]) {
      newArr.push(arr1[pointerOne]);
      pointerOne++;
    } else {
      newArr.push(arr2[pointerTwo]);
      pointerTwo++;
    }
  }

  if (pointerOne < arr1.length) {
    newArr.push(...arr1.slice(pointerOne));
  }

  if (pointerTwo < arr2.length) {
    newArr.push(...arr2.slice(pointerTwo));
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

console.log(mergeSort([2, 6, 8, 10, 13, 200], [1, 10, 12, 100]));
