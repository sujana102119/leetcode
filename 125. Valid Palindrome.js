/**
 * @param {string} s
 * @return {boolean}
 */
// USING 2 POINTERS
// var isPalindrome = function(s) {
//     if (s.length === 1) return true;  
//     let start = 0;
//     let end = s.length - 1;
//     while(start < end) {
//         let startChar = s.charCodeAt(start);
//         let endChar = s.charCodeAt(end);
//         if(!isAlphanumeric(startChar)) {
//             start++;
//             continue;
//         } 
//         if (!isAlphanumeric(endChar)) {
//             end--;
//             continue;
//         }  
        
//         if (toLower(startChar) !== toLower(endChar)) {
//                 return false;
//         }  

//         start++;
//         end--;
//     } 
//     return true;
// };

var isAlphanumeric = function (code) {
    return  ((code > 47 && code < 58)        // 0-9    48 - 57
    || (code > 64 && code < 91)             // A-Z      65 - 90
    || (code > 96 && code < 123  ) )    // a-z        97 - 122 
}

var toLower = function (char) {
    return char < 97 ? char + 32 : char;
}


// USING STRING REVERSAL
var isPalindrome = function(s) {
    const alphanumericLowerCase = s.toLowerCase().replaceAll(/[^0-9a-z]/g, '');
    const reversed = alphanumericLowerCase.split('').reverse().join('');
    return alphanumericLowerCase === reversed;
}


console.log(isPalindrome('A man, a plan, a canal: Panama'));        // true
console.log(isPalindrome('race a car'));        // false
console.log(isPalindrome(' '));      // true
console.log(isPalindrome('.,'))       // true