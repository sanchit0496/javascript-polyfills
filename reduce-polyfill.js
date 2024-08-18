console.log('hello')


Array.prototype.customReduce = function(callback){
    console.log(callback, this)
    let sum = 0
    for(let i = 0; i < this.length; i++){
        sum += this[i]
    }
    return sum
}

const addElements = (currentElement, index, inputArray) => {
    return currentElement + inputArray[index+ 1]
}
let arr = [1,2,3,4,5,6,7,8,9,10]
let totalSum = arr.customReduce(addElements)

console.log(totalSum)