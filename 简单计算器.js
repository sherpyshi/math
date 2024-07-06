const calculate = (a,op,b)=>{ 
    // 给出两个整数 a , b ,以及一个操作符 opeator
    // 返回结果 a<operator>b
    // 可以使用分支结构 也可以使用 内建函数eval(a+opeator+b)
    let result =(a+op+b)   
    return parseInt(eval(result))
}

console.log(calculate(1,'+',5))

