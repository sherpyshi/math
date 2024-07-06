// var o = {flag: true}; 
// // var test = !!o.flag
// // 等价于
// var test = o.flag || false

// console.log(test)
//  巴什博弈 bash 先手拿 1-3个石块 偶数 
//  情况先手拿走 一个必赢 
//  使用 !! 运算符 判断 n模四的值是否存在
//   返回值
function bash (n){
    // return !!(n%4)  等于下面这个
    return n%4===0?false:ture
// 判断 4的余数是否存在
}
console.log(bash(2312))