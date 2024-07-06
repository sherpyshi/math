const majornums = (nums)=>{
    let major = nums[0]
     let count =0
     for( let i=0;i<nums.length<=0;i++){
           if(count<0){
            major =nums[i]
           }
           if(major===nums[i]){
            count+=1
           }else{
            count-=1
           }
        
     }
     return major
}
console.log(majornums(1,1,1,1,1,2,2,2,2))