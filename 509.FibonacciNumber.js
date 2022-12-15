/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, memo={0: 0, 1:1}) {
    if (n in memo) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};

console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3

