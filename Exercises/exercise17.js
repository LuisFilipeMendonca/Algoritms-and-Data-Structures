// ===========================================================================================================================
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// ===========================================================================================================================

function buildFrequencyCounter(str) {
  const frequencyCounter = {};

  for (let i = 0; i < str.length; i++) {
    frequencyCounter[str[i]] = (frequencyCounter[str[i]] || 0) + 1;
  }

  return frequencyCounter;
}

function constructNote(msg, letters) {
  const frequencyOne = buildFrequencyCounter(msg);
  const frequencyTwo = buildFrequencyCounter(letters);

  for (let key in frequencyOne) {
    if (!(key in frequencyTwo) || frequencyOne[key] !== frequencyTwo[key]) {
      return false;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "dcba"));
console.log(constructNote("aabbcc", "bcabcaddff"));
console.log(constructNote("hellothereworld", "ellothereworld"));
