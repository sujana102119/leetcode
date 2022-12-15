/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    const power = Math.log10(n)/Math.log10(4);
    return power % 1 === 0;
};

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
