const { log } = require("console");

let p1=  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
    
    })
    .then(function(result) { // (**)
    
    alert(result); // 1
    return result * 2;
    
    })
    .then(function(result) { // (***)
    
    alert(result); // 2
    return result * 2;
    
    })
    .then(function(result) {
    
    alert(result); // 4
    return result * 2;
    let res = result
    });
    console.log(p1);
    console.log(res)