// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
 var maxProfit = function(prices) {
    let lowest = prices[0];
    let maxProfit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] > lowest) {
            let currentProfit = prices[i] - lowest;
            if (currentProfit > maxProfit) maxProfit = currentProfit;
        } else if (prices[i] < lowest) {
            lowest = prices[i];
        }
    }

    return maxProfit;
};


// ALTERNATIVE SOLUTION WITH 2 POINTERS

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let lowest = 0, right = 1;
    let maxProfit = 0;
    while(right < prices.length) {
        if(prices[right] > prices[lowest]) {
            let currentProfit = prices[right] - prices[lowest];
            if (currentProfit > maxProfit) maxProfit = currentProfit;
        } else if (prices[right] < prices[lowest]) {
            lowest = right;
        }
        right++;
    }

    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]))   // 5
console.log(maxProfit([7,6,4,3,1]))   // 0
