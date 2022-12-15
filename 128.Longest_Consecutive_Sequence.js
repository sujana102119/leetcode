// https://www.geeksforgeeks.org/longest-consecutive-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let max = 0;
    for (let i=0; i<nums.length; i++) {
        const currentElement  = nums[i];
        if (!numSet.has(currentElement-1)) {   // if current element is starting element of a sequence
            let j = currentElement;

            while(numSet.has(j)){
                j += 1;
            }

            max = Math.max(max, j - currentElement); // j - arr[i] will give the length of the sequence i.e. (last element + 1) - first element
        }
    }
    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));     // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  // 9
