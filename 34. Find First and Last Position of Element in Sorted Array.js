/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if (nums.length) {
        let l=0;
        let r=nums.length -1;
        let positions = [];
        while(l < r) {
            let mid = Math.floor((l + r )/2);
            // console.log('l, r, mid  ', l, r, mid)
            if(nums[mid] === target) {
                let left = mid - 1;
                while(nums[left] === target) {
                    left--;
                }
                positions.push(left+1);
                let right = mid +1;
                while(nums[right] === target) {
                    right++;
                }
                positions.push(right - 1);
                return positions;
                //console.log(positions);
            } else if (nums[mid] > target) {
                //console.log('lesser than mid')
                r = mid -1;
            } else {    // if (nums[mid] < target)
                //console.log('greater than mid')
                l = mid + 1;
            }
        }
    }

    return  [-1, -1];
};

// IMPROVED SOLUTION with better time complexity

var searchRange = function(nums, target) {
    const left = binSearch(nums, target, true);
    const right = binSearch(nums, target, false);
    return  [left, right];
};

var binSearch = function (nums, target, leftBias) {
    let l=0;
    let r=nums.length -1;
    let position = -1;
    while(l <= r) {
        let mid = Math.floor((l + r )/2);
        // console.log('l, r, mid  ', l, r, mid)
        if(nums[mid] === target) {
            position = mid;
            if(leftBias) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
            //console.log(positions);
        } else if (nums[mid] > target) {
            //console.log('lesser than mid')
            r = mid -1;
        } else {    // if (nums[mid] < target)
            //console.log('greater than mid')
            l = mid + 1;
        }
    }

    return position;
}

console.log(searchRange([5,7,7,8,8,10], 8))      // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6))      // [-1, -1]
console.log(searchRange([], 0))      // [-1, -1]

