/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subsequence = 0;
    for (let i=0; i<t.length; i++) {
       if (s[subsequence] === t[i]) {
        subsequence++;
       }
    }

    return subsequence === s.length;
};

// 

console.log(isSubsequence("abc", "ahbgdc"))     // true
console.log(isSubsequence("axc", "ahbgdc"))     // false
