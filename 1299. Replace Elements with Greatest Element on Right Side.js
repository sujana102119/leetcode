/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let currMax = -1;

    for (i=arr.length -1; i >= 0; i --) {
        let currElement = arr[i];
        arr[i] = currMax;
        if (currElement > currMax) currMax = currElement;
    }

    return arr;
};


console.log(replaceElements([17,18,5,4,6,1]));      // [18,6,6,6,1,-1]
console.log(replaceElements([400]));                // [-1]
// console.log(replaceElements([17,18,5,4,6,1]));
