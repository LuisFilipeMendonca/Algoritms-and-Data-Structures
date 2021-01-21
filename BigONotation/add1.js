function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();

console.log(`Script1: Time elapsed: ${(t2 - t1) / 1000} seconds.`);

// The number of operations grows proportionately with n
// O(n)
