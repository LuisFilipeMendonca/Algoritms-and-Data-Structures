function numberCompare(num1, num2) {
  return num1 - num2;
}

function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

console.log([10, 5, 1, 7, 8].sort(numberCompare));
console.log(
  ["something", "eagle", "hi", "shopping", "car"].sort(compareByLength)
);
