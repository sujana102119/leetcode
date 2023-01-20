/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length -1;
    while(s[i] === ' ' && i >= 0) {
        i--;
    }
    let count = 0;
   while(s[i] !== ' ' && i >= 0) {
    count++;
    i--;
   }
   return count;
};

console.log(lengthOfLastWord("Hello World"))    // 5
console.log(lengthOfLastWord("   fly me   to   the moon  "))    // 4
console.log(lengthOfLastWord("luffy is still joyboy"))    // 6
