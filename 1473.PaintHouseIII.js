// https://www.youtube.com/watch?v=iz7j7eA1gTc


/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
 var minCost = function(houses, cost, m, n, target) {
    
    const memo = new Map();
    const paint = (houseIndex, prevColor, currentNumOfneighborhoods) => {

        if (houseIndex === m) {
            return currentNumOfneighborhoods === target ? 0 : Infinity;
        }

        const key = `${houseIndex},${prevColor},${currentNumOfneighborhoods}`;

        if (memo.has(key)) return memo.get(key);

        const currentColor = houses[houseIndex];
        let min = Infinity;
        if (currentColor === 0) { // painted
            for (let i = 1; i <=n; i++) {
                min = Math.min(min, cost[houseIndex][i-1] + paint(houseIndex+1, i, i === prevColor ? currentNumOfneighborhoods : currentNumOfneighborhoods + 1));
            }
        }  else if (currentColor === prevColor)   {  // painted with color same as that of prev house   
            min = Math.min(min,  paint(houseIndex+1, currentColor,  currentNumOfneighborhoods));
        } else {    // painted with color different from that of prev house  
            min = Math.min(min,  paint(houseIndex+1, currentColor,  currentNumOfneighborhoods + 1));
        }

        memo.set(key, min);

        return min;
    }

    return  result === Infinity ? -1 : result;
};

console.log(minCost([0,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3))     // 9
console.log(minCost([0,2,1,2,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3))     // 11
console.log(minCost([3,1,2,3], [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], 4, 3, 3))     // -1
