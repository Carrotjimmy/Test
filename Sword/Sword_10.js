// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
// 比如n=3时，2*3的矩形块有3种覆盖方法
function rectCover(number)
{
    // write code here
    if(number==0){return 0}
    let dp=[1,1];
    for(let i = 2; i <= number; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[number];
}

//经画图，1:1, 2:2, 3:3, 4:5
//f(n)=f(n-1)+f(n-2)