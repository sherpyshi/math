const plusOne=(digits)=>{

    

    return (digits.join('')*1 + 1).toString().split('').map(item => Number(item))

  }
  plusOne()