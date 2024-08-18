Array.prototype.customForEach = function(callback){
    console.log(callback)
    console.log(this)
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const iterateArray = (element, index, array) => {
    console.log(element)
}

let arr = [1,2,3,4,5]
arr.customForEach(iterateArray)
