/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//    return nums.sort().at(Math.floor(nums.length/2));
// };

// USING BOYER MOORE VOTING ALGORITHM - O(n) time, O(1) space
// https://leetcode.com/problems/majority-element/solutions/127412/majority-element/?orderBy=most_votes - Approach 7

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate, count = 0;
    for(let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += candidate === num ? 1 : -1;
    }

    return candidate;
 };

console.log(majorityElement([3,2,3]))    // 3
console.log(majorityElement([2,2,1,1,1,2,2]))    // 2
