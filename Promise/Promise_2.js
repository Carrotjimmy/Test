// 链接：https://juejin.im/post/6844904077537574919
const async1 = async () => {
    console.log('async1');
    setTimeout(() => {
      console.log('timer1')
    }, 2000)
    await new Promise(resolve => {
      console.log('promise1')
    })
    console.log('async1 end')
    return 'async1 success'
  } 
  console.log('script start');
  async1().then(res => console.log(res));
  console.log('script end');
  Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => console.log(res))
  setTimeout(() => {
    console.log('timer2')
  }, 1000)
  
// script start
// async1
// promise1
// script end
// 1
// timer2
// timer1

// async函数中await的new Promise要是没有返回值的话则不执行后面的内容
// .then函数中的参数期待的是函数，如果不是函数的话会发生透传
