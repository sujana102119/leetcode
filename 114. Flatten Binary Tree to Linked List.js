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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(root === null) return null;
    if(root.left && root.right) {
            let temp = root.right;
            root.right = flatten(root.left);
            root.left = null;
            let right = getLowestRight(root);
            right.right = flatten(temp);
    } else if (root.left){
            root.right = flatten(root.left);
            root.left = null;
     } else if (root.right) {   
        root.right = flatten(root.right);
    }

    return root;

};

function getLowestRight(node) {
    while(node.right) {
        node=node.right;
    }
    return node;
}


const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 5,
        right: {
            val: 6
        }
    }
}

const root1 = {
    val: 1,
    left: {
        val: 2
    }
}

const root2 = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
}

console.log(JSON.stringify(flatten(root)));