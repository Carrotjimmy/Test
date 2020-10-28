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