// ============================================================================================================
// Write a function called isSubsequence which takes two strings.
// Check whether the characters in the first string form a subsequence of the characters in the second string.
// ============================================================================================================

function isSubsequence(str1, str2) {
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < str2.length) {
    if (str1[pointerOne] === str2[pointerTwo]) pointerOne++;

    if (pointerOne === str1.length) return true;

    pointerTwo++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abacadraba"));
console.log(isSubsequence("abc", "acb"));
