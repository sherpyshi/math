// A = [1,2,3]
// B=[6,3,2]
// B[0] = A[1] * A[2] = 6; B[1] = A[0] * A[2] = 3; B[2] = A[0] * A[1] = 2
const nums=[2,4,6]

const productExcludeItself =(nums)=>{
    let b =new Array(nums.length)
    for(let i=0;i<=nums.length;i++){
        b[i] = nums.filter((e, j) => j != i)
        .reduce((x, y) => x * y, 1)
    }
    return b
}
console.log(productExcludeItself(nums))
