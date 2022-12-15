https://www.youtube.com/watch?v=OKRkQ1YT_2s


/**
 * @param {number[]} target
 * @return {boolean}
 */
 var isPossible = function(target) {

    // check for duplicates
    if ( [...new Set(target)].length !== target.length) return false;

    // sort the array
    const sortedTarget = target.sort();

    // build initial array
    let output = [];
    for (let i=0; i < sortedTarget.length; i++) output.push(1);

    // process

    let possible;
    let covered = -1;
    do {
        possible = false;
        let currentVal = output[output.length - 1];
        for (let i=0; i < sortedTarget.length; i++) {
            if (currentVal > sortedTarget[i]) break;

            possible = true;

            if (currentVal === sortedTarget[i]) {
                covered +=1;
                output.unshift(output.pop())
                sortedTarget.splice(i,1);
            }
        }
        let currentSum = output.reduce((sum, val) => sum + val,0);
        output.splice(covered+1, 1);
        output.push(currentSum);
        // console.log(`target: ${sortedTarget}, output: ${output}`);

    } while (possible && sortedTarget.length > 0);
 
    return sortedTarget.length === 0;
    
};

// console.log(isPossible([9,3,5]));   // true
// console.log(isPossible([1, 1,1,2]));    // false
// console.log(isPossible([8, 5]));    // true
console.log(isPossible([1,1000000000]));    // true








// 3 3 4

// step 1: if set(arr).length !== arr.length => duplicates => false;
// step 2: sort target Array

// case [9, 3, 5]
// covered = -1 
// 1 1 1  => 3     covered = 0
// 3 1 1 => 5      covered = 1
// 3 5 1 => 9      covered = 2
// 3 5 9 covered === arr.length - 1 => true

// [1, 1, 1]
// [1,1, 3]
// [1,3, 5]
// [3,5,9]
// case [8, 5]
// covered = -1 
// [1, 1]
// [1,2]
// [3, 5]
// [5, 8]



// 3 5 9
// let possible = false;
// let found = -1;
// for (let i=0; i<target.length; i++) {
//     if (sum > target[i]) break;

//     if(sum < target[i]) {
//         possible = true;
//     }
//     if (sum === target[i]) {
//         found = i;
//         possible = true;
//         break;
//     }
// }

// if (possible === true &&)