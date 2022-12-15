// https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let res = [];
    let left = 1, n = nums.length;
    for (let i=0; i<n; i++) {
        if (i>0) {
            left = left * nums[i-1];
        }
        res[i] = left;
    }

    let right = 1;
    for (let i=n-1; i >=0; i--) {
        if (i < n-1) {
            right = right * nums[i+1];
        }
        res[i] = res[i] * right;
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]))       // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]))       // [0,0,9,0,0]
