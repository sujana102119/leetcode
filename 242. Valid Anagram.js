// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
//  var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
//     let sortedS = s.split('').sort();
//     let sortedT = t.split('').sort();
//     for (let i=0; i<sortedS.length; i++) {
//         if (sortedS[i] !== sortedT[i]) return false;
//     }

//     return true;
// };


// ALTERNATIVE SOLUTION 
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let sFrequencyMaP = new Map();
    for (let char of s) {
        sFrequencyMaP.set(char, (sFrequencyMaP.get(char) || 0) + 1)
    }

    let tFrequencyMaP = new Map();
    for (let char of t) {
        tFrequencyMaP.set(char, (tFrequencyMaP.get(char) || 0) + 1)
    }
    console.log(sFrequencyMaP)
    console.log(tFrequencyMaP)

    for (let key of sFrequencyMaP.keys()) {
        if(sFrequencyMaP.get(key) !== tFrequencyMaP.get(key)) return false;
    }

    return true;
};

// OTHER ALTERNATIVE SOLUTIONS - https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/

console.log(isAnagram('anagram', 'nagaram')); //true
console.log(isAnagram('rat', 'car'));   //false
console.log(isAnagram('a', 'ab'));  // false

