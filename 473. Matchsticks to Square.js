/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    const perimeter =  matchsticks.reduce((sum, element) => sum + element, 0);
    if (perimeter % 4 !== 0) return false;  // perimeter of square is 4a
    const sideOfSquare = perimeter/4;
    const sortedList = matchsticks.sort();
    let i=0;
    while(i<matchsticks.length) {
        if(matchsticks[i] > sideOfSquare) return false;
        if(matchsticks[i] === sideOfSquare) {
            i++;
        } else {    // if < sideOfSquare
            let remaining = sideOfSquare - matchsticks[i];
        }
    }
};

console.log(makesquare([1,1,2,2,2]));