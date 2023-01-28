/**
 * @param {number[]} nums
 * @return {number[]}
 */
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1212505/o-n-constant-space-javascript-solution-with-explanation/?orderBy=most_votes&languageTags=javascript
var findDisappearedNumbers = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let indexBasedOnNum = Math.abs(nums[i]) - 1;        // find corresponding index
        if (nums[indexBasedOnNum] > 0) {
            nums[indexBasedOnNum] = Math.abs(nums[indexBasedOnNum]) * -1;       // Mark as visited
        }
    }
    let result = [];
    nums.forEach((num, i) => {
        if (num > 0) {
            result.push(i + 1);     // return indices that are not marked as visited
        }
    });
    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))  // [5, 6]
console.log(findDisappearedNumbers([1, 1]))  // [2]
