/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let output = '';
    let carry = 0;
    for (let i= num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
        let val = (i < 0 ? 0 : +num1[i]) + (j < 0 ? 0 : +num2[j]) + carry; 
        carry = val > 9 ? Math.trunc( val/ 10) : 0;
        val = val % 10;
        output = val + output;
    }
    if(carry) {                         
        output = carry + output;
    }
    return output;
};


console.log(addStrings('11', '123'))        // 134
console.log(addStrings('456', '77'))        // 533
console.log(addStrings('0', '0'))        // 0
console.log(addStrings('1', '9'))        // 10

