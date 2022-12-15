class MinQueue {        // Not Min Priority Queue since it does not take a separate priority field on the element.
    constructor() {
        this.items = []
    }

    enqueue(element) {
        let inserted = false;
        for (let i=0; i < this.items.length; i++) {
            if (this.items[i] > element) {
                this.items.splice(i, 0, element);
                inserted = true;
                break;
            }
        }
        if(!inserted) {
            this.items.push(element);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    dequeue() {
        return  this.isEmpty() ? null : this.items.shift();
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    print() {
        let str = '';
        for (let i=0; i<this.items.length; i++) {
            str += this.items[i];
        }
        console.log(str);
    }
}





/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

// Use up all ladders; All diffs that use ladders are maintained in a min priority queue.
// when there are no more ladders,  
        //if current diff > least diff encountered so far (i.e the front element of the min priority queue), 
                // use ladder for the current (=>enqueue the cuurent) and use bricks (if any) for the least diff. Since now bricks are used for the least diff element, remove it from the min priority queue.
                // If there are no more bricks to perform the swap, BREAK
        // else 
                // use bricks (if any ) for the current diff
                // If there are no more bricks, BREAK

 var furthestBuilding = function(heights, bricks, ladders) {

    const minPriorityQueue = new MinQueue();
    let i = 0;
    const len = heights.length - 1;
    for (; i < len; i++) {          // Loop runs only until last but one element since loop body checks whether next building can be reached; so if (heights.length-1 - 1) iteration is done, it means (heights.length - 1) which is the last building, can be reached.
        minPriorityQueue.print();
        const diff = heights[i+1] - heights[i];
        if (diff > 0) {
            if (ladders > 0) {      // use up ladders 
                minPriorityQueue.enqueue(diff);
                ladders -= 1;
            } else if (!minPriorityQueue.isEmpty() && diff > minPriorityQueue.front()) {
                minPriorityQueue.enqueue(diff);
                const frontElement = minPriorityQueue.dequeue();
                bricks -= minPriorityQueue.dequeue();
            } else {
                bricks -= diff;
            }

            if (bricks < 0) return i;   // When there are no more ladders/bricks to reach the next building, return index of current building
        }
    }

    return len; // When control reaches here, for loop is complete => (heights.length-1 -1) iteration was successful => last building can be reached => return index of last building => heights.length -1 => len

};




console.log('Answer: ', furthestBuilding([4,2,7,6,9,14,12], 5, 1))  // Output: 4
console.log('Answer: ', furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2))   // Output: 7
console.log('Answer: ', furthestBuilding([14,3,19,3], 17, 0))   // Output: 3
console.log('Answer: ', furthestBuilding([1,5,1,2,3,4,10000],4,1))   // Output: 5

