// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/discuss/2504285/Super-simple-and-easy-to-understand-js-solution-with-explanation
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if(prices.length <= 1) return 0;
	
	//as we are now using arrays, we also store "cost0" and "profit0" for easier coding. So we need have k+1 elements.
    let costs = Array(k+1).fill(Number.MAX_SAFE_INTEGER);
    let profits = Array(k+1).fill(0);
    
    profits[0] = 0;
    costs[0] = prices[0];
    
    for(let i = 0; i < prices.length; i++){
        for(let j = 1; j <= k; j++){
            profits[j] = Math.max(profits[j], prices[i] - costs[j]);  
            costs[j] = Math.min(costs[j], prices[i] - profits[j-1]);
        }
    }

	//from the above loop we also maintain the max profits[k] with different i. So we can just return profits[k].
    return profits[k];
};


console.log(maxProfit(2, [2,4,1]))      // 2
console.log(maxProfit(2, [3,2,6,5,0,3]))      // 7
console.log(maxProfit(2, [6,1,3,2,4,7]))      // 7
console.log(maxProfit(2, [3,3,5,0,0,3,1,4]))      // 7


