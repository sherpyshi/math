function sum (a, b){
  
  while(b!=0)

  {

    let a1=a^b;

    let b1=(a&b)<<1;

    a=a1;

    b=b1;

  }

  return a

}
console.log(sum(213,3453))
