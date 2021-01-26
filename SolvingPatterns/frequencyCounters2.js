// =======================================================================================================================
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// =======================================================================================================================

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounterOne[str1[i]] = (frequencyCounterOne[str1[i]] || 0) + 1;
    frequencyCounterTwo[str2[i]] = (frequencyCounterTwo[str2[i]] || 0) + 1;
  }

  for (let value in frequencyCounterOne) {
    if (
      !(value in frequencyCounterTwo) ||
      frequencyCounterTwo[value] !== frequencyCounterOne[value]
    )
      return false;
  }

  return true;
}

console.log(isAnagram("", ""));
console.log(isAnagram("aaz", "zza"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("awesome", "awesom"));
