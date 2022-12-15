/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target, memo={}) {
    if (target in memo) return memo[target];
    if(target === 0) return 1;
    if (target < 0) return 0;
    let numOfCombinations = 0;
    for (let num of nums) {
        numOfCombinations += combinationSum4(nums, target-num, memo);
    }
    memo[target] = numOfCombinations;
    return memo[target];
};


console.log(combinationSum4([1, 2, 3], 4))  // 7
console.log(combinationSum4([9], 3))  // 0
