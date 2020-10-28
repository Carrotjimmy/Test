//输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示
//这主要是一道涉及二进制的题目，解法是使用了二进制的技巧，不作延伸

function NumberOf1(n)
{
    // write code here
    let count = 0;
    while(n!=0){
        count++
        n = n & (n-1);
    }
    return count
}
// 时间复杂度：O(n) 
// 空间复杂度：O(1)