Array.prototype.customFilter = function(callback) {
    console.log(callback)
    console.log(this)
    let resultArr= []
    for(let i = 0; i < this.length; i++){
        if(this[i] % 2 === 0){
            resultArr.push(this[i])
        }
    }
    return resultArr
}

const getEven = (currentNumber, index, inputArray) => {
    return currentNumber % 2 === 0
}

let arr = [1,2,3,4,5,6,7,8]
let filteredArray = arr.customFilter(getEven)
console.log(filteredArray)