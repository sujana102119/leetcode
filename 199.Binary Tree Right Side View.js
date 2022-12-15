/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let output = [];
    if(root) {
        let queue = [root];
        while(queue.length) {
            let level = queue.length;
            output.push(queue[level -1].val);
            while(level > 0) {
                const item =  queue.shift();
                if (item.left) {queue.push(item.left);}
                if (item.right) {queue.push(item.right);}
                level--;
            }    
        }
    }
    return output;
};

//Logic:
// Two arrays - one for OUTPUT and another for a QUEUE
// Do level order traversal;
// In the beginning, push the root into the QUEUE;
// Starting from the root, at each level, push the VALUE of the last element in the QUEUE into the OUTPUT array
// Then, For each of the elements in the QUEUE, add the left and right children and remove the parent from the queue.

// Input:
// [1,2,3,null,5,null,4]
// [1,null,3]
// []

// Output:
// [1,3,4]
// [1,3]
// []