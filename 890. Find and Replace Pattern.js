/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let output = [];
    for (let word of words) {
        if(isMatch(word, pattern)) { 
            output.push(word);
        }
    }

    return output;
};

var isMatch = function(word, pattern) {
    let charMap = new Map();
    for (let i=0; i<pattern.length; i++){
        let match = charMap.get(pattern[i]);
        if(!match) {
            if([...charMap.values()].includes(word[i])) return false;
            charMap.set(pattern[i], word[i]);
        } else {
            if (match !== word[i]) return false;
        }
    }

    return true;
}


console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));   // ["mee","aqq"]
console.log(findAndReplacePattern( ["a","b","c"], "a"));    // ["a","b","c"]
console.log(findAndReplacePattern(["abc","deq","meehee","aqq","dkd","ccc"], "abbdbb"));   // ["meehee"]
