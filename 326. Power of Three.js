/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    const power =  Math.log10(n) / Math.log10(3);
    return power % 1 === 0;
};

console.log(isPowerOfThree(9));
