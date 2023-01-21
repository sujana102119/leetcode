/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramsMap = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (anagramsMap.has(key)) {
            let value = anagramsMap.get(key);
            value.push(str);
            anagramsMap.set(key, value);
        } else {
            anagramsMap.set(key, [str]);
        }
    }
    let anagramsResult = [];
    for(let value of anagramsMap.values()) {
        anagramsResult.push(value);
    }

    return anagramsResult;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))       //  [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""]))   // [[""]]
console.log(groupAnagrams(["a"]))   // [["a"]]