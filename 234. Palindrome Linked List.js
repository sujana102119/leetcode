/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(!head || !head.next) return true;       // return true if empty or only one element

    let slow = head, fast = head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = reverseLinkedList(slow.next);
    slow.next = null;
    slow = head;

    while(fast) {       // checking fast instead of slow cos slow might have one extra element in case of odd number of elements in the original linked list
        if(fast.val !== slow.val) return false;

        slow = slow.next;
        fast = fast.next;
    }

    return true;

};


const reverseLinkedList = (curr) => {
    let prev = null, next;

    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const list1 =  {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
};

const list2 =  {
    val: 1,
    next: {
        val: 2,
        next: null
    }
};
console.log(isPalindrome(list1));
console.log(isPalindrome(list2));
