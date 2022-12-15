class MinQueue {
    constructor() {
        this.items = [];
    }

    enqueue(val) {
        let inserted = false;
        for (let i=0; i< this.items.length; i++) {
            if (this.items[i] > val) {
                this.items.splice(i, 0, val);
                inserted = true;
                break;
            }
        }

        if(!inserted) {
            this.items.push(val);
        }
    }

    dequeue() {
        return  this.isEmpty() ? null : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxUntil = [];
    maxUntil[0] = nums[0];
    let maxSum = nums[0];
    for (let i=1; i<nums.length; i++) {
       maxUntil[i] = nums[i] + (maxUntil[i-1] > 0 ? maxUntil[i-1] : 0);
       maxSum = Math.max(maxSum, maxUntil[i]);
    }
    return maxSum;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))   // 6
console.log(maxSubArray([1]))   // 1
console.log(maxSubArray([5,4,-1,7,8]))   // 23

