// https://www.youtube.com/watch?v=3Rw3p9LrgvE


/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    const s1Length= s1.length;
    const s2Length = s2.length;
    if (s1Length + s2Length !== s3.length) return false

    let dp = new Array(s1Length + 1).fill(false).map(x => new Array(s2Length + 1).fill(false));

    dp[s1Length][s2Length] = true;

    for (let i = s1Length; i >=0; i--){
        for (let j = s2Length; j >=0; j--){
            if (i < s1Length && s1[i] === s3[i+j] && dp[i+1][j]) {
                dp[i][j] = true;
            } else if (j < s2Length && s2[j] === s3[i+j] && dp[i][j+1]) {
                dp[i][j] = true;
            }
        }
    }
    return dp[0][0];    
};


console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))   // true
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))   // false
console.log(isInterleave('', '', ''))   // true
console.log(isInterleave('', 'b', 'b'))   // true
console.log(isInterleave('a', 'b', 'a'))   // false


