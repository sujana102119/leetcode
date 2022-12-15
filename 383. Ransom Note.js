/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;

    let frequencyMap = new Map();
    for (let char of magazine) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1 );
    }

    for (let char of ransomNote) {
        let remaining = frequencyMap.get(char) || 0;
        if (remaining === 0) return false;
        frequencyMap.set(char, remaining - 1);
    }

    return true;
};

console.log(canConstruct('a', 'b'));    //false
console.log(canConstruct('aa', 'ab'));  //false
console.log(canConstruct('aa', 'aab'));     //true
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));     //true

