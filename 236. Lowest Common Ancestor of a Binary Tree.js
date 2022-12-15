/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let queue = [root];
    let vals = [];
    while(queue.length) {
        let curr = queue.shift();
        vals.push(curr && curr.val);
        if (curr) {
            queue.push(curr.left || null);
            queue.push(curr.right || null);
        }
    }
    console.log(vals);


    let pIndex = -1, qIndex = -1;
   for(let i=0; i< vals.length; i++) {
    if (vals[i] === p) {
        pIndex = i;
    }
    if(vals[i] === q) {
        qIndex = i;
    }
    if(pIndex >=0 && qIndex >= 0) break;
   }

   console.log(pIndex, qIndex);

   let pAncestors = [], qAncestors = [];
   i=pIndex;
   let jump = i%2===0 ? -2 : -1;
   while(i>=0) {
    pAncestors.push(vals[i]);
    i += jump;
   }
   console.log(pAncestors);

   i=qIndex;
   jump = i%2===0 ? -2 : -1;
   while(i>=0) {
    qAncestors.push(vals[i]);
    i += jump;
    }
    console.log(qAncestors);


    if (pIndex < qIndex) {
        for (let i=0; i < pAncestors.length; i++) {
            let lca = qAncestors.indexOf(pAncestors[i]);
            if (lca !== -1) return pAncestors[i];
        }
    } else {
        for (let i=0; i < qAncestors.length; i++) {
            let lca = pAncestors.indexOf(qAncestors[i]);
            if (lca !== -1) return qAncestors[i];
        }
    }
};

const root = {
    val: 3,
    left: {
        val: 5, 
        left: {
            val: 6,
        }, 
        right: {
            val: 2,
            left: {
                val: 7
            },
            right: {
                val: 4
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0
        },
        right: {
            val: 8
        }
    }
}

console.log(lowestCommonAncestor(root, 1, 5));    // 3
console.log(lowestCommonAncestor(root, 5, 4));    // 3


2 - 0       -2
4 - 1       -3
6 - 2       -4
10 - 4      -6