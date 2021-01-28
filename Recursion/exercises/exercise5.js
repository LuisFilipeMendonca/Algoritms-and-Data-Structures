// =====================================================================================================
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// =====================================================================================================

function reverse(str) {
  if (str.length <= 1) return str[0];

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
