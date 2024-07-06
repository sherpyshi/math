// arr.sort 方法对数组进行 原位（in-place） 排序，更改元素的顺序。(译注：原位是指在此数组内，而非生成一个新数组。)

// 它还返回排序后的数组，但是返回值通常会被忽略，因为修改了 arr 本身
// n = [4,45,546,25,11];
// n.sort(function(a,b) 
// {
// return a-b;
// });
// console.log(n)
// const nums= new Array 
// const maxnums =(nums)=>{
//     return nums.sort((a,b)=>{return b-a})[0]
// }
function maxNum(nums) {

   return nums.sort((a,b)=>{return b-a})[0]

  }
  const nums =[1,34,767,32,23,89]
console.log(maxNum(nums))