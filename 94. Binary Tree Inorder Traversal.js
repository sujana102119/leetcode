
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
// RECURSIVE SOLUTION
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root, output = []) {
    if (!root) return [];
    inorderTraversal(root.left, output);
    if (root.val !== null && root.val !== undefined) {
        output.push(root.val);
    }
    inorderTraversal(root.right, output);

    return output;
};


// ITERATIVE SOLUTION
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root, output = []) {
    if (!root) return [];


    inorderTraversal(root.left, output);
    if (root.val !== null && root.val !== undefined) {
        output.push(root.val);
    }
    inorderTraversal(root.right, output);

    return output;
};


const left = new TreeNode(3);
const right = new TreeNode(2,left );
const root = new TreeNode(1, undefined, right);



STACK:  {1}, {2}


console.log(inorderTraversal({}));
