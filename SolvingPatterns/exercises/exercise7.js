// ==================================================================================================================================================
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// ==================================================================================================================================================

function findLongestSubstring(str) {
  let begin = 0;
  let maxLen = 0;
  let window = 1;

  while (begin < str.length) {
    let frequency = {};
    let newString = str.slice(begin, window);
    let isRepeated = false;

    for (let value of newString) {
      if (value in frequency) {
        isRepeated = true;
        break;
      }
      frequency[value] = frequency[value];
    }

    if (!isRepeated) {
      maxLen = Math.max(maxLen, newString.length);
      window++;
    }

    if (isRepeated || window >= str.length) {
      begin++;
      window = begin + 1;
    }
  }

  return maxLen;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishoewedoit"));
