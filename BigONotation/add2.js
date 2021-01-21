function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t3 = performance.now();
addUpTo(1000000000);
const t4 = performance.now();

console.log(`Script2: Time elapsed: ${(t4 - t3) / 1000} seconds.`);

// He have 3 operations here
// O(1) => constant
