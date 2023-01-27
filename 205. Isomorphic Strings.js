/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function(s, t) {
//     if(s.length !== t.length) return false;
//     let charStoTMap = {},
//         charTtoSMap = {};
//      for (let i = 0; i < s.length; i++) {
//         if (!charStoTMap[s[i]] && !charTtoSMap[t[i]]) {
//             charStoTMap[s[i]] = t[i];
//             charTtoSMap[t[i]] = s[i];
//         } else if(charStoTMap[s[i]] !== t[i] 
//                     || charTtoSMap[t[i]] !== s[i])   {
//             return false;
//         }
//     }
//     return true;
// };







// -------FASTEST SOLUTION----------  - Store only the index in the maps

var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let charStoTMap = {},
        charTtoSMap = {};
     for (let i = 0; i < s.length; i++) {
        if (charStoTMap[s[i]] !== charTtoSMap[t[i]]) return false;

            charStoTMap[s[i]] = i;
            charTtoSMap[t[i]] = i;
    }
    return true;
};
// ----------------------------------------





// SIMILAR SOLUTION - First occurrence transformation
// https://leetcode.com/problems/isomorphic-strings/solutions/1261227/isomorphic-strings/?orderBy=most_votes - Approach 2
var isIsomorphic = function(s, t) {
    return transform(s) === transform(t);
};

var transform = (str) => {
    let charMap = {};
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in charMap)) {        // important to use 'in' operator, cos index 0 will result in false in if condition
            charMap[str[i]] = i;
        } 
       // console.log(str[i], charMap);
        result += `, ${charMap[str[i]]}`;      //  comma is needed since 1,10 and 11, 0 would be the same without the comma
    }
    console.log(result)
    return result;
}

// console.log(isIsomorphic("egg", "add"))     // true
// console.log(isIsomorphic("foo", "bar"))     // false
// console.log(isIsomorphic("paper", "title"))     // true
// console.log(isIsomorphic("badc", "baba"))     // false
// console.log(isIsomorphic("aaeaa", "uuxyy")) // false
console.log(isIsomorphic("ab", "aa")) // false
console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck")) // false


