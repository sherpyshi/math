function getmonthday(year,month){
    let monthdays =[31,28,31,30,31,30,31,31,30,31,30,31]
    if(year%4==0&&year%100!==0||year%400==0){
        monthdays[1]+=1
    }
    return monthdays[month-1]
 
}
console.log(getmonthday(2008,2))