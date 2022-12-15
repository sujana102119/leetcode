
 //Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let preorderIndex = 0;
let inorderMap = {};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder, levelOrder = []) {
    for (let i=0; i<inorder.length; i++) {
        inorderMap[inorder[i]] =  i;
    }

    return arrayToTree(preorder, 0, preorder.length - 1);
};

const arrayToTree = (preorder, left, right) => {
    if (left > right) return null;

    const rootValue = preorder[preorderIndex++];
    const rootNode =  new TreeNode(rootValue);
    rootNode.left = arrayToTree(preorder, left, inorderMap[rootValue] - 1);
    rootNode.right = arrayToTree(preorder, inorderMap[rootValue] + 1, right);
    return rootNode;
}
// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));  // [3, 9, 20 , null, null, 15, 7]
console.log(buildTree([-1], [-1]));  // [-1]
// console.log(buildTree([1,2,4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]));  // [1, 2, 3,4, 5, 6, 7]

