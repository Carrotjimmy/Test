// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number)
{
    if(number==1) return 1
    return jumpFloorII(number-1) *2    
}

// 设n级台阶有f(n)种跳法，根据最后一次跳台阶的数目可以分解为最后一次一级，则前面需要跳n-1级，有f(n-1)种跳法；最后一次跳两级，则前面需要跳n-2级，有f(n-2)种跳法。以此类推 易知，
// $$
            //f(n)=f(n-1)+f(n-2)+……+f(0)
            //f(n-1)=f(n-2)+……+f(0)
// 两式相减得，
            //f(n)=2f(n-1)
