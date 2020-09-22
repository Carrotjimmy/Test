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