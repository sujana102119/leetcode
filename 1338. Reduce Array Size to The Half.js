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

    dequeue() {
        return  this.isEmpty() ? null : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        return this.items[0];
    }

    // print() {
    //     let str = '';
    //     for (let i=0; i<this.items.length; i++) {
    //         str += this.items[i];
    //     }
    //     console.log(str);
    // }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const halfLength = arr.length / 2;
    let frequencyMap = new Map();
    for (let element of arr) {
        if(frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }
    // console.log('frequencyMap', frequencyMap);
    let queue = new MinQueue();
    let count = 0;
    for (let frequency of frequencyMap.values()) {
        queue.enqueue(frequency);
        count += frequency;
        // console.log('before', queue);
        while (count - queue.front() >= halfLength) {
            count -= queue.dequeue();
        }
        // console.log('after', queue);
    }

    if (count - queue.front() >= halfLength) queue.dequeue();

    return queue.items.length;
};

console.log(minSetSize([7,2,2,5,5,5, 3,3,3,3]));
console.log(minSetSize([7,7,7,7,7,7]));
console.log(minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]))
