class MaxQueue{
    constructor() {
        this.items = [];
    }

    front() {
        return this.items[0];
    }

    enqueue(element) {
        let inserted = false;
        for (let i =0; i<this.items.length; i++) {
            if (element > this.items[i]) {
                this.items.splice(i, 0, element);
                inserted = true;
                break;
            }
        }
        if(!inserted) {
            this.items.push(element);
        }
    }

    isEmpty(){
        return this.items.length === 0;
    }

    dequeue() {
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    print() {
        let str = '';
        for (let i =0; i<this.items.length; i++) {
            str += ' ' + this.items[i];
        }
        console.log(str);
    }
}

/**
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function(courses) {
    const coursesSortedByLastDay = courses.sort((a, b) => a[1] - b[1]);
    const maxQueue = new MaxQueue();
    let totalDuration = 0;
    for (let i=0; i<coursesSortedByLastDay.length; i++) {
        let durationofCurrentCourse = coursesSortedByLastDay[i][0];
        let lastDayofCurrentCourse = coursesSortedByLastDay[i][1];
        totalDuration += durationofCurrentCourse;
        maxQueue.enqueue(durationofCurrentCourse);
        if (totalDuration > lastDayofCurrentCourse) {
            totalDuration -= maxQueue.dequeue();
        }
    }

    return maxQueue.size();
};

console.log(scheduleCourse([[3,2],[4,3]]))    