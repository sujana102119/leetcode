/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if (!text.length || text.length < 7) return 0;
    let balloonMap = new Map([['b', 0], ['a', 0], ['l', 0], ['o', 0], ['n', 0]])
    for (let char of text) {
        balloonMap.set(char, (balloonMap.get(char) || 0) + 1);
    }
    let count = Math.min(
        balloonMap.get('b'),
         balloonMap.get('a'), 
         balloonMap.get('l')/2, 
         balloonMap.get('o')/2,
         balloonMap.get('n'))
    return Math.trunc(count);
};


// SIMPLER (AND MAYBE FASTER) SOLUTION)

var maxNumberOfBalloons = function(text) {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };
    
    for (const l of text) {
        map[l]++; 
    }
    
    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );
};

console.log(maxNumberOfBalloons('nlaebolko'))       // 1
console.log(maxNumberOfBalloons('loonbalxballpoon'))       // 2
console.log(maxNumberOfBalloons('leetcode'))       // 0
console.log(maxNumberOfBalloons('lloo'))       // 0

