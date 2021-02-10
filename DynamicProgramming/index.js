// -----------------------------
// Big O
//
// O(2^n) that's horrible
// -----------------------------

function fibonacciRecursive(n) {
  if (n <= 2) return 1;

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(25));

// -----------------------------
// Big O
//
// O(n)
// -----------------------------

function fibonacciMemoized(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  const res = fibonacciMemoized(n - 2, memo) + fibonacciMemoized(n - 1, memo);
  memo[n] = res;
  return res;
}

console.log(fibonacciMemoized(20));

function fibonacciTabulated(n) {
  if (n <= 2) return 1;
  let tab = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    tab[i] = tab[i - 2] + tab[i - 1];
  }

  return tab[n];
}

console.log(fibonacciTabulated(20));
