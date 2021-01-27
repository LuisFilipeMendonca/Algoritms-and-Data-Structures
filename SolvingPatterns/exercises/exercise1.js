// ==================================================================================
// Write a function called sameFrequency.
// Given two integers, find out if the two numbers have the same frequency of digits.
// ==================================================================================

function sameFrequency(int1, int2) {
  const intConvertedStringOne = int1.toString();
  const intConvertedStringTwo = int2.toString();

  if (intConvertedStringOne.length !== intConvertedStringTwo.length)
    return false;

  let frequencyOne = {};
  let frequencyTwo = {};

  for (let i = 0; i < intConvertedStringOne.length; i++) {
    frequencyOne[intConvertedStringOne[i]] =
      (frequencyOne[intConvertedStringOne[i]] || 0) + 1;
    frequencyTwo[intConvertedStringTwo[i]] =
      (frequencyTwo[intConvertedStringTwo[i]] || 0) + 1;
  }

  for (let value in frequencyOne) {
    if (
      !(value in frequencyTwo) &&
      frequencyOne[value] !== frequencyTwo[value]
    ) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
