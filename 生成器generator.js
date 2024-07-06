// 可暂停函数 
// 取7倍 
function* count(x=1){
    while(true){
        if(x%7===0){
            yield x
        }
        x++
    }
}
let n =count()
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)

