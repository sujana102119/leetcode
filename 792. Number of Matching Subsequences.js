// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number}
//  */
// // TIME LIMIT EXCEEEDS in this approach
//  var numMatchingSubseq = function(s, words) {
//     let count = 0;
//     for (const word of words) {
//         const index = s.indexOf(word[0]);
//         let j = 0;
//         if (index != -1) {
//             for (let i=index; i < s.length; i++) {
//                 if (word[j] === s[i]) j++;
//                 if (j === word.length) { count++; break;}
//             }
//         }
//     }
//     return count;
// };




// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number}
//  */
// //  TIME LIMIT EXCEEEDS in this approach
// var numMatchingSubseq = function(s, words) {
//     let count = 0;
//     for (const word of words) {
//         const regex = word.split('').join('.*');
//         if(s.match(regex)) count++;
//     }
//     return count;
// };


// TIME LIMIT EXCEEDED BECAUSE THE SUBSEQUENCES ARRAY CONTAINS DUPLICATES => use Map to tore frequency of each word

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let memo = new Map();
    let count = 0;
    for (const word of words) {
        memo.set(word, (memo.get(word) || 0) + 1);
    }
    memo.forEach((value, key) => {
        let index = -1;
        let char = 0;
        for (; char < key.length; char++) {
            index = s.indexOf(key[char], index + 1);
            if (index === -1) break;
        }
        if (char === key.length) {
            count += value;
        }
    })
    return count;
};


// Diff b/w map and object - https://www.geeksforgeeks.org/map-vs-object-in-javascript/#:~:text=In%20Object%2C%20the%20data%2Dtype,true%20in%20case%20of%20objects.


console.log(numMatchingSubseq('abcde', ["a","bb","acd","ace"])) // 3
console.log(numMatchingSubseq('dsahjpjauf', ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])) // 2
console.log(numMatchingSubseq('qlhxagxdqh', ["qlhxagxdq","qlhxagxdq","lhyiftwtut","yfzwraahab"])) // 2
