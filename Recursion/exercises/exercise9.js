// ==================================================================================================================================
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in array.
// ==================================================================================================================================

function capitalizeFirst(arr) {
  let capitalizedArr = [];

  function capitalizeHelper(arr) {
    if (arr.length <= 0) return;

    const str = arr[0];

    const capitalized = str[0].toUpperCase() + str.slice(1, str.length);
    capitalizedArr.push(capitalized);

    return capitalizedArr.concat(capitalizeHelper(arr.slice(1)));
  }

  capitalizeHelper(arr);

  return capitalizedArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
