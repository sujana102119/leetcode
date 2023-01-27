/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// w/o checking boundaries - seemed to be faster on submission
var canPlaceFlowers = function(flowerbed, n) {
    for (let i=0; i<flowerbed.length; i++) {
                if (n === 0) break;
        if (flowerbed[i] === 0) {
            if (flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    return n === 0;
};

// Checking boundaries
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i=0; i<flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            // If both left and right plots are empty, we can plant a flower here.
            if (((i == 0) || (flowerbed[i - 1] == 0))
             && ((i == flowerbed.length - 1) || (flowerbed[i + 1] == 0))) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))        // true
console.log(canPlaceFlowers([1,0,0,0,1], 2))        // false