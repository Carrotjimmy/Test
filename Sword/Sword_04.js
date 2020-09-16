// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
// 有点难用啊VS的git
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    if(pre.length==0 || vin.length==0){
        return null;
    }

    const rootVal = pre[0];
    const node = new TreeNode(rootVal);

    let i = 0;
    for(i;i<vin.length;i++){
        if(vin[i]==rootVal){
            break;
        }
    }
    node.left  = reConstructBinaryTree(pre.slice(1,i+1),vin.slice(0,i));
    node.right = reConstructBinaryTree(pre.slice(i+1,pre.length),vin.slice(i+1,vin.length));
    return node;
}
