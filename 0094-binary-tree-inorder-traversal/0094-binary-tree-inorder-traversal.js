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
var inorderTraversal = function(root) {
    let output = [];
    function foo (node) {
       if(!node) return;
        foo(node.left)
        output.push(node.val)
        foo(node.right)
    }
    foo(root)
    return output
    
};
