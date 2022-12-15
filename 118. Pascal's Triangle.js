/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let allRows = [];
    for (let i=0; i<numRows; i++) {
        let currentRow = [];
        for (let j=0; j<=i; j++) {
            if (j === 0 || j=== i) {
                currentRow.push(1);
                continue;
            }
            const prevRow = allRows[allRows.length -1];
            const currentElement = prevRow[j-1]+ prevRow[j];
            currentRow.push(currentElement);
        }
        allRows.push(currentRow);
    }
    return allRows;
};

console.log(generate(5));
console.log(generate(1));
