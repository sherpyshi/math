function isnumberorstring (c){
    const pt = /[a-zA-Z0-9]+/
    return pt.test(c)
}
console.log(isnumberorstring('dadwa'))