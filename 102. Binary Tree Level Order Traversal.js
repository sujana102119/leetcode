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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let output = [];
    if (root === null) return [];
    let queue = [root];

    while(queue.length) {
        let levelLength = queue.length;
        let level = [];
        while(levelLength > 0) {
            const current = queue.shift();
            level.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            levelLength --;
        }
        output.push(level);
    }

    return output;
};
