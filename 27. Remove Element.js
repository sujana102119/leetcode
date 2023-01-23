/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};


console.log('ans:', removeElement([3,2,2,3], 3))        // 2, nums = [2,2,_,_]
console.log('ans:', removeElement([0,1,2,2,3,0,4,2], 2))        // 5, nums = [0,1,4,0,3,_,_,_]
console.log('ans:', removeElement([3], 3))        // 0, nums = [_]
console.log(removeElement([2], 3))        // 1, nums = [2,]




// [2]   3

// i       0
// last    0