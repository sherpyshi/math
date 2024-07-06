
Array.prototype.last = function (){
  return this.length?this[this.length-1]:-1 
  // return this[this.length - 1] ?? -1
  //  这里使用箭头函数 默认 返回 -1 无论是 可选链
  // 三元表达式   还是 赋值
  // 猜测 原型 应该在 es5 写法 中生效 es6+ 不可以 
}

const arr = [1, 2, 3, null , 5];
console.log(arr.last())