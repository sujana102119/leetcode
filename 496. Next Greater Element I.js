/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    for (let num of nums2) {
        while(stack.length > 0 && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }
        stack.push(num);
    }
    let ans = [];
    for (let num of nums1) {
        ans.push(map[num] || -1);
    }
    return ans;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))     // [-1,3,-1]
console.log(nextGreaterElement( [2,4], [1,2,3, 4]))     // [3,-1]
