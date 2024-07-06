function isLeapYear(n) {
    // if(n % 400 == 0 ||( n % 100 != 0 && n % 4 == 0)){
    //   return true
    // }else{
    //   return false
    // }
      return  n % 400 == 0 ||n % 100 != 0 && n % 4 == 0

}
console.log(isLeapYear(2008))