/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 1) return 0;

    let leftSum = 0;
    let rightSum = nums.reduce((sum, val) => sum + val , 0);

    for (let i=0; i<nums.length; i++) {
        leftSum += nums[i-1] || 0;
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))      // 3
console.log(pivotIndex([1,2,3]))      // -1
console.log(pivotIndex([2,1,-1]))      // 0
console.log(pivotIndex([1]))      // 0
console.log(pivotIndex([-1,-1,-1,1,1,1]    ))   // -1
