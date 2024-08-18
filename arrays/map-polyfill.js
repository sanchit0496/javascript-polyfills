Array.prototype.customMap = function(callback){
    let resultArr = []
    for(let i=0; i < this.length; i++){
        resultArr.push(callback(this[i], i, this))
    }
    return resultArr
}

const doubleTheElement = (currentNumber, index, array) => {
    // for this example we need only 1 params
    // index and array must be required for other examples
    return currentNumber * 2
}

let arr = [1,2,3,4,5]
let result = arr.customMap(doubleTheElement)
console.log(result)
