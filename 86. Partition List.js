/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */
// var partition = function (head, x) {
//     if (head === null) return null;
    
//     // find node greater than x and store pointer to prev node as well
//     let dummy = {next:head};
//     let preNodeGTX = dummy;
//     let nodeGTX = head;
//     while(nodeGTX !== null) {
//         if(nodeGTX.val >= x) {
//             break;
//         }
//         preNodeGTX = nodeGTX;
//         nodeGTX = nodeGTX.next;
//     }

//     // if no node greater than x, return original list
//     if (nodeGTX === null) {
//        return head;
//     }

//     let preCurr = nodeGTX;      // start with the node following 'the node greater than x'; So, prev will be the 'the node greater than x'
//     while(preCurr.next !== null) {
//         let curr = preCurr.next;
//         if (curr.val >= x) {        // if current value equals the given x, skip this iteration and move to next node
//             preCurr = preCurr.next;
//             continue;
//         }
//         // else
//         preCurr.next = curr.next;               // 82-84 moving current node to the other side
//         curr.next = preNodeGTX.next;
//         preNodeGTX.next = curr;                 
//         preNodeGTX = preNodeGTX.next;           // point other side's prev pointer to currently moved node
//     }
// // Note: there are two prev pointers; 
// // prevNodeGTX- for keeping track of LHS (this is needed since original relative order is to be preserved) 
// // prevCurr - for the traversal on RHS.
//     return dummy.next;
// };


// ---------------------Simpler solution w/0 swapping ------------------------
// https://leetcode.com/problems/partition-list/solution/

// Maintain two lists for less than x and greater than x 
// Traverse the list and move elements to either of the lists depending on their val


var partition = function (head, x) {
    if (head === null) return null;
    
    let lessThanXHead = {}, greaterThanXHead = {};
    let lessThanX = lessThanXHead, greaterThanX = greaterThanXHead;


    let currentNode = head;
    while(currentNode !== null) {
        if(currentNode.val >= x) {
            greaterThanX.next = currentNode;
            greaterThanX = greaterThanX.next;
        } else {
            lessThanX.next = currentNode;
            lessThanX = lessThanX.next;
        }
        currentNode = currentNode.next;
    }

    greaterThanX.next = null;
    lessThanX.next = greaterThanXHead.next;
    return lessThanXHead.next;
};











const head1 = {
	val: 1,
	next: {
		val: 4,
		next: {
			val: 3,
			next: {
				val: 2,
				next: {
					val: 5,
					next: {
						val: 2,
						next: null,
					},
				},
			},
		},
	},
};

const head2 = {
    val: 2, 
    next: {
        val: 1,
        next: null
    }
}

const head3 = {
    val: 3, 
    next: {
        val: 1,
        next: null
    }
}

const head4 = {
    val: 1, 
    next: {
        val: 2,
        next: null
    }
}

console.log(partition(head1, 3));   // [1,2,2,4,3, 5]
console.log(partition(head2, 2));   // [1, 2]
console.log(partition(head3, 2));   // [1, 3]
console.log(partition(head4, 3));   // [1, 2]




// [3,1] , 2 => [1, 3]