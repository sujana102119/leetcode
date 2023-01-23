/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let allRows = [];
    for (let i=0; i<numRows; i++) {
        let currRow = [];
        for (let j=0; j<=i; j++) {
            if(j===0 || j=== i) {
                currRow.push(1);
                continue;
            } 
            currRow.push((allRows[i-1][j-1] + allRows[i-1][j]));
        }
        allRows.push(currRow);
    }

    return allRows;
};

console.log(generate(5));
console.log(generate(1));
