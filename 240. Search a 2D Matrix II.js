/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    let i = 0, j=matrix[0].length - 1;

    while(i>=0 && j>=0 && i < matrix.length && j <matrix[0].length) {
        if (matrix[i][j] === target) return true;
        if (target > matrix[i][j]) { i++;}
        else if (target < matrix[i][j]) j--;
    }
   return false;
    
};


console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))
