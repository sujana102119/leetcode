// https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array-set-1/


class HeapNode
{
    constructor(val,r,c)
    {
        this.val = val;
        this.c = c;
        this.r = r;
    }
}
 
// A utility function to minheapify the node
// harr[i] of a heap stored in harr[]
function minHeapify(harr,i,heap_size)
{
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let min = i;
      
    if(l < heap_size&& r<heap_size && harr[l].val < harr[i].val && harr[r].val < harr[i].val){
            let temp=harr[r];
            harr[r]=harr[i];
            harr[i]=harr[l];
            harr[l]=temp;
            minHeapify(harr ,l,heap_size);
            minHeapify(harr ,r,heap_size);
        }
          if (l < heap_size && harr[l].val < harr[i].val){
            let temp=harr[i];          
            harr[i]=harr[l];
            harr[l]=temp;
            minHeapify(harr ,l,heap_size);
        }
}
 
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix,k)
{
    const n = matrix.length;     
    // Create a min heap of elements
    // from first row of 2D array
    let harr = new Array(n);
      
    for(let i = 0; i < n; i++)
    {
        harr[i] = new HeapNode(matrix[0][i], 0, i);
    }
      
    let hr = new HeapNode(0, 0, 0);
      
    for(let i = 1; i <= k; i++)
    {
          
        // Get current heap root
        hr = harr[0];
          
        // Get next value from column of root's
        // value. If the value stored at root was
        // last value in its column, then assign
        // INFINITE as next value
        let nextVal = hr.r < n - 1 ?
                      matrix[hr.r + 1][hr.c] :
                      Number.MAX_VALUE;
                        
        // Update heap root with next value
        harr[0] = new HeapNode(nextVal,
                               hr.r + 1, hr.c);
                                 
        // Heapify root
        minHeapify(harr, 0, n);
    }
      
    // Return the value at last extracted root
    return hr.val;
}

console.log(kthSmallest([
    [1,2,4],
    [2,42,55],
    [3,54,60],
], 5))              

console.log(kthSmallest([
    [1,5,9],
    [10,11,13],
    [12,13,15]
], 8))          // 13

console.log(kthSmallest([
    [1,6,10,13,14,16,21],
    [3,10,12,18,22,27,29],
    [3,15,19,20,23,29,34],
    [8,15,19,25,27,29,39],
    [12,17,24,25,28,29,41],
    [16,22,27,31,31,33,44],
    [20,26,28,35,39,41,45]]
    ,38))


console.log(kthSmallest([[-5]], 1));        // -5