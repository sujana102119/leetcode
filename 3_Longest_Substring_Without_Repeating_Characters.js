function lengthOfLongestSubstring(input) {
    let lengthOfLongestSubstring = 0;
    let leftMost = 0;
    const visitedMap = new Map();
    let currentMax = 0;
    for (let i = 0; i < input.length; i++) {
        // console.log('i', i);
        if (!visitedMap.has(input[i])) {
            visitedMap.set(input[i], i);
            currentMax++;
            // console.log('here', currentMax);
        }
        else {
            lengthOfLongestSubstring = Math.max(currentMax, lengthOfLongestSubstring);
            const prevOccurrence = visitedMap.get(input[i]);
            if (leftMost <= prevOccurrence) {
                leftMost = prevOccurrence + 1;
                currentMax = i - prevOccurrence;
            }
            else {
                currentMax++;
            }
            visitedMap.set(input[i], i);
            // console.log(currentMax);
        }
    }
    lengthOfLongestSubstring = Math.max(currentMax, lengthOfLongestSubstring);
    return lengthOfLongestSubstring;
}
;
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("abba")); // 2
