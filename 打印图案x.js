function printx(n){
  
//         1. 数组中每一项的字符串长度是等于n的
// 2. 数组中每一项都是对称的，由对称就想到a[i] = a[a.length - i - 1] = 'X'
    let arr =[]
    for(i=0;i<arr.length;i++){
        
        var str='1'.padStart(len,'1').split('')

        str[len-i-1]=str[i]='X'

        var temp=str.join('').replace(/1/g,' ')

        arr[i]=temp
    }
      return arr
}
console.log(printx(3))