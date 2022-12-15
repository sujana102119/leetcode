// https://www.youtube.com/watch?v=RegQckCegDk

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
    let changed = false;

    for (let i=0; i< nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) continue;

        if (changed) return false;

        if ((i === 0) || nums[i+1] >= nums[i-1]) {  // if next element is greater than previous element; to handle edge case for first element, check for i === 0
            nums[i] = nums[i+1];    // copy from next element
        } else {
            nums[i+1] = nums[i];    // copy from previous element
        }

        changed = true;

    }

    return true;
};

console.log(checkPossibility([4,2,3]));     // true
console.log(checkPossibility([4,2,1]));     // false
