// =============================================================================================================
// Write a recursive function called isPalindrome which returns true if the strings passed to it is a palindrome.
// Oherwise it returns false.
// ==============================================================================================================

function isPalindrome(str) {
  let reverseStr = "";

  function palindromeHelper(newStr) {
    if (newStr.length <= 0) return newStr[0];

    reverseStr += newStr[newStr.length - 1];

    return palindromeHelper(newStr.slice(0, newStr.length - 1));
  }

  palindromeHelper(str);

  return reverseStr === str;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
