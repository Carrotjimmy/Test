// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n<=39
let arr=[0,1];
function Fibonacci(n)
{
    function fib(n){
        if(arr[n] != undefined){
            return arr[n];
        }else{
            arr[n] = fib(n-1) + fib(n-2);
            return arr[n];
        }
    }
    return fib(n);
}

// 0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）