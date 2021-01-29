// =========================================================================================================================================
// Write a function called stringSearch which accepts a string and a value and returns the number of times the value is found on the string.
// =========================================================================================================================================

function stringSearch(str, value) {
  let count = 0;
  let index = 0;

  while (index < str.length - value.length + 1) {
    const subStr = str.slice(index, index + value.length);

    if (subStr === value) {
      count++;
    }

    index++;
  }

  return count;
}

console.log(stringSearch("helloworldhello", "l"));
