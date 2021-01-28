// ==================================================================
// Write a function called power which accepts a base and an expoent.
// The function should return the power of the base to the expoent.
// This function should mimic the funcionality of Math.pow().
// ==================================================================

function power(base, exp) {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
