// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor(number)
{
    // write code here
    let mome = [1,1,2];
    for( let i = 3; i <=number ; i++){
        mome[i] = mome[i-1] + mome[i-2]
    }
    return mome[number];
}

//类比从上下楼梯
//如果上一步跳 n 步到达第 n 个台阶，说明上一步在第 0 个台阶。已知跳到 第0个台阶的方法数为f[0]
//于是初始条件  f[0] = f[1] = 1 ,容易推得 f[2] = 2
//上到第n层台阶有两种情况,从n-1上一层/从n-2上两层 