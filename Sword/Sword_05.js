// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
var stack1 = [],stack2 = [];
function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    if(stack2.length==0){
        if(stack1.length==0){
            return null;
        }
        else {
            while(stack1.length!=0){
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
    else return stack2.pop();
}