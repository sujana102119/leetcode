/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
//USING LOG  - log x base a/ log y base a = log x base y
 var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    const numberOfTestsPossible = minutesToTest/minutesToDie + 1;
    const numberOfPigs = Math.ceil(Math.log(buckets)/Math.log(numberOfTestsPossible));
    return numberOfPigs;
};

// WITHOUT LOG
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    const numberOfTestsPossible = minutesToTest/minutesToDie + 1;
    let numberOfPigs = 0;
    while(Math.pow(numberOfTestsPossible, numberOfPigs) < buckets) {
        numberOfPigs++;
    }
    return numberOfPigs;
};

console.log(poorPigs(1000, 15, 60))
console.log(poorPigs(4, 15, 15))
console.log(poorPigs(4, 15, 30))
