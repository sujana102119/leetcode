/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    // sort by descending order of attack power( column 0)
    // this implies rows appearing lower will have lesser attack power than all the chars appearing above 
    // To determine if there is a char above, with greater defense power as well, use a max variable to keep track of the max defensive power.


    // IMP: While sorting,  If attack power is equal, sort by ascending order of defense; cos otherwise one of those characters (despite having equal power) will account to weak characters' count; 
    // This is to maintain 'strict less than' check

    const attackSortedMatrix = properties.sort((a, b) => a[0] === b[0]? a[1] - b[1] : b[0] - a[0]); 
    let currMaxDefense = 0;
    let countOfWeakCharacters = 0;
    for (const row of attackSortedMatrix) {
        if (row[1] < currMaxDefense) countOfWeakCharacters++;
        else currMaxDefense = Math.max(currMaxDefense, row[1]); 
    }

    return countOfWeakCharacters;
};

console.log(numberOfWeakCharacters([[5,5],[6,3],[3,6]]))        // 0
console.log(numberOfWeakCharacters([[2,2],[3,3]]))  // 1
console.log(numberOfWeakCharacters([[1,5],[10,4],[4,3]]))  // 1
