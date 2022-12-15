class MinQueue {
    constructor() {
        this.items = [];
    }

    enqueue(val) {
        let inserted = false;
        for (let i=0; i< this.items.length; i++) {
            if (this.items[i] > val) {
                this.items.splice(i, 0, val);
                inserted = true;
                break;
            }
        }

        if(!inserted) {
            this.items.push(val);
        }
    }

    dequeue() {
        return  this.isEmpty() ? null : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let col = 0, row = m-1;
    while(row >= 0) {
        doSomething(row, col, mat, m, n);
        row--;
    }
    row = 0;
    while(col < n) {
        doSomething(row, col, mat, m, n);
        col++;
    }
    return mat;
};

const doSomething = (row, col, mat, m, n) => {
    let c=col, r=row;
    // console.log('row, col', r, c);
    let minQueue = new  MinQueue();
    while(c < n && r <m) {
        minQueue.enqueue(mat[r][c]);
        c+=1;
        r+=1;
    }
    c=col, r=row;
    while(!minQueue.isEmpty()) {
        mat[r][c] = minQueue.dequeue();
        c+=1;
        r+=1;
    }
}

console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]));
console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]));
