//     输入：millis = 100
// 输出：100
// 解释：
// 在 100ms 后此异步函数执行完时返回一个 Promise 对象
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// }
async function sleep(millis) {
    // return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve()
    //     },millis)
    // })
     await new Promise((s)=> setTimeout(s,millis))
    // 简化  return new Promise(resolve => setTimeout(resolve, millis))  
}
// 返回的时间每次都不一样 不知道那里损耗了

 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
 