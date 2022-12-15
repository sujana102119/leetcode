// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  var twoSum = function(nums, target) {
//     const len = nums.length;
//     for (let i=0; i<len-1; i++) {
//         let otherNum = target - nums[i];
//         for(j=i+1; j<len; j++) {
//             if(nums[j] === otherNum) {
//                 return [i, j];
//             }
//         }
//     }
// };



// REVISED SOLUTION USING MEMOIZATION
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const visitedMap = new Map();
    for (let i=0; i<nums.length; i++) {
        let otherNum = target - nums[i];
        if (visitedMap.has(otherNum)) {
            return [i, visitedMap.get(otherNum)];
        }
        visitedMap.set(nums[i], i)
    }
};


console.log(twoSum([2,7,11,15], 9))     // [0,1]
console.log(twoSum([3,2,4], 6))     // [1, 2]
console.log(twoSum([3,3], 6))     // [0,1]
