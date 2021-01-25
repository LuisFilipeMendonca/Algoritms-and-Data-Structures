// ===========================================================================================
// Write a function wich takes in a string and returns counts of each character in the string.
// ===========================================================================================

// charCount('aaa') => {a: 3};
// charCount('hello') => {h: 1, e: 1, l: 2, o: 1};
// charCount('') => What should we return in this case?

// 'My phone number is 125458' => Do we count spaces? What about numbers?
// 'Hello hi' => Do we count uppercase and lowercase characters?

// ===============================================
// INITIAL SOLUTION
// ===============================================

// function charCount(str) {
//   const lowerStr = str.toLowerCase();
//   const alphaNumericRegex = /[a-z0-9]+/;
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = lowerStr[i];

//     if (alphaNumericRegex.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }

//   return result;
// }
// ===============================================

// ===============================================
// AFTER REFATORING
// ===============================================

function charCount(str) {
  const lowerStr = str.toLowerCase();
  let result = {};

  for (let char of lowerStr) {
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char) {
  const charCode = char.charCodeAt();

  return (charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123);
}

console.log(charCount("Hello 1231"));
