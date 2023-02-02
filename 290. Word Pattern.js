// SIMILAR To LC 205. But use Map since the word "constructor" can result in the constructor function when using object instead of map


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// First occurrence transformation
// var wordPattern = function(pattern, s) {
//     const words = s.split(' ');
//     if (pattern.length !== words.length) return false;

//     let charPatternToWordsMap = new Map(),
//         charWordsToPatternMap = new Map();
//     for (let i=0; i<pattern.length; i++) {
//         if (charPatternToWordsMap.get(pattern[i]) !== charWordsToPatternMap.get(words[i])) return false;
//         charPatternToWordsMap.set(pattern[i] ,i);
//         charWordsToPatternMap.set(words[i] ,i);
//     }
//     return true;
// };


// Alternative solution

var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    return transform(pattern) === transform(words);
};

var transform = (input) => {
    let itemMap = new Map(); 
    let result = '';
    for (let i=0; i<input.length; i++) {
        if (!itemMap.get(input[i])) {
            itemMap.set(input[i], i);
        }
        result += `, ${itemMap.get(input[i])}`
    }
    return result;
}


console.log(wordPattern("abba", "dog cat cat dog"))     // true
console.log(wordPattern("abba", "dog cat cat fish"))     // false
console.log(wordPattern("aaaa", "dog cat cat dog"))     // false
console.log(wordPattern("abba", "dog constructor constructor dog"))     // true  // SPECIAL CASE


