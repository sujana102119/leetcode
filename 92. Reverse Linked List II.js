// https://www.youtube.com/watch?v=wk8-_M-2fzI


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const dummy = {next: head};
    
    let pre = dummy;

    for(let i=0; i<left-1; i++) pre = pre.next;
    let curr = pre.next;

    for (let i=0; i< right-left; i++) {
        let NEXT = curr.next;
        curr.next = NEXT.next;
        NEXT.next = pre.next;
        pre.next = NEXT;
    }

    return dummy.next;
};

let NODE2 = {
    val: 5,
    next: null
};
let NODE1 = {
    val: 3,
    next: NODE2
};

console.log(reverseBetween(NODE1, 1, 2))



var recurseAndReverse = function(right, m, n) {
    if (n == 1) {
        return;
    }

    // Keep moving the right pointer one step forward until (n == 1)
    right = right.next;

    // Keep moving left pointer to the right until we reach the proper node
    // from where the reversal is to start.
    if (m > 1) {
        left = left.next;
    }

    // Recurse with m and n reduced.
    recurseAndReverse(right, m - 1, n - 1);

    // In case both the pointers cross each other or become equal, we
    // stop i.e. don't swap data any further. We are done reversing at this
    // point.
    if (this.left == right || right.next == this.left) {
        this.stop = true;            
    }

    // Until the boolean stop is false, swap data between the two pointers
    if (!this.stop) {
        int t = this.left.val;
        this.left.val = right.val;
        right.val = t;

        // Move left one step to the right.
        // The right pointer moves one step back via backtracking.
        this.left = this.left.next;
    }
}

const reverseBetween = ( head, m,  n) => {
    let left = head;
    let stop = false;
    recurseAndReverse(head, m, n);
    return head;
}