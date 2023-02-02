/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, count = 0) {
    let start = 0, end = s.length - 1;
    while(start < end) {
        if (s[start] !== s[end]) {
            if (count === 0) {
                let x = s[start+1] === s[end] && validPalindrome(s.slice(start+1, end+1), 1);
                let y = s[start] === s[end -1] &&  validPalindrome(s.slice(start, end), 1);
               return x || y;
            } else {
                return false;
            }
        }
        start++;
        end--;
    }

    return true;
 };


 console.log(validPalindrome("aba"))        // true
 console.log(validPalindrome("abca"))        // true
 console.log(validPalindrome("abc"))        // false
 console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))        // true




