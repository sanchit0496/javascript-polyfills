console.log('hello')


Array.prototype.customReduce = function(callback, initialValue){
    console.log(callback, this)
    let sum = 0
    for(let i = 0; i < this.length; i++){
        sum += callback(initialValue, this[i])
    }
    return sum
}

const addElements = (accumulator, currentElement) => {
    return accumulator + currentElement
}

let arr = [1,2,3,4,5,6,7,8,9,10]
let totalSum = arr.customReduce(addElements, 0)

console.log(totalSum)