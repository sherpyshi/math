// 使用扩展运算符  ...a
const a =[1,45,762,387,3]
const maxofarray =(a)=>{
    return Math.max(...a)
}
console.log(maxofarray(a))