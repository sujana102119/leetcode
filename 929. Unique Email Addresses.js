// 'Neetcode All - Day 7 - LC 929'

/**
 * @param {string[]} emails
 * @return {number}
 */
// W/O USING STRING METHODS
var numUniqueEmails = function(emails) {
    let uniqueEmailsMap = new Set();
  emails.forEach((email) => {
        let newEmail = '';
        let i =0;
        while(email[i] !== '@') {
            if (email[i] === '.') {
                i++;
                continue;
            }
            if (email[i] === '+') {
                break;
            }
            
            newEmail += email[i];
            i++;
        }
        while(email[i] !== '@') i++;
        while(i < email.length) {
            newEmail += email[i];
            i++;
        }
        uniqueEmailsMap.add(newEmail);
    });
    return uniqueEmailsMap.size;
};

// USING STRING METHODS
var numUniqueEmails = function(emails) {
    let uniqueEmailsMap = new Set();
     emails.forEach((email) => {
        let [local, domain] = email.split('@');
        local = local.split('+')[0].replaceAll('.', '');
        uniqueEmailsMap.add(local+'@' + domain);        // '@' is important here
  });
    return uniqueEmailsMap.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));  // 2 - "testemail@leetcode.com" and "testemail@lee.tcode.com"
console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]));  // 3
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))  // 2