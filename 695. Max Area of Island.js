let gridData;
let seen;

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(gridData) {
    grid = gridData;
    const m = grid.length;
    const n = grid[0].length;
    seen = new Array(m).fill(false).map(x => x = new Array(n));
    let max = 0;
    for (let i = 0; i< m; i++) {
        for(let j=0; j<n; j++) {
            max = Math.max(max, area(i, j));
        }
    }
    return max;
};

const area = (i, j) => {
    if(i < 0 || j <0 
        || i >= grid.length || j >= grid[0].length 
        || seen[i][j] 
        || (grid[i][j] === 0) ) {
            return 0;
        }

    seen[i][j] = true;
    return 1 + area(i-1, j) + area(i+1, j) + area(i, j-1) + area(i, j+1);
}

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]));        // 6

console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));      // 0