function reverseInteger (number){

        let newNum = number.toString().split('').reverse().join('').replace(/\b(0+)/gi,"")

        return parseInt(newNum)

    }

console.log(reverseInteger(132154))