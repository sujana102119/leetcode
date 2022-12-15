/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let visitedMap = new Map();
    for (let num of nums) {
        if (visitedMap.has(num)) return true;
        visitedMap.set(num, 1);
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))   // true
console.log(containsDuplicate([1,2,3,4]))   // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))   // true
