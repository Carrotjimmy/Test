// 链接：https://juejin.im/post/6844904077537574919
const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve3');
      console.log('timer1')
    }, 0)
    resolve('resolve1');
    resolve('resolve2');
  }).then(res => {
    console.log(res)
    setTimeout(() => {
      console.log(p1)
    }, 1000)
  }).finally(res => {
    console.log('finally', res)
  })
  
// resolve1
// 'finally' undefined
// timer1
// Promise{<resolve>:undefined}

// 注意的知识点：

// Promise的状态一旦改变就无法改变
// finally不管Promise的状态是resolved还是rejected都会执行，且它的回调函数是接收不到Promise的结果的，所以finally()中的res是一个迷惑项。
// 最后一个定时器打印出的p1其实是.finally的返回值，我们知道.finally的返回值如果在没有抛出错误的情况下默认会是上一个Promise的返回值,
// 而这道题中.finally上一个Promise是.then()，但是这个.then()并没有返回值，所以p1打印出来的Promise的值会是undefined，
// 如果你在定时器的下面加上一个return 1，则值就会变成1。

