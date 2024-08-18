console.log('hello')


Array.prototype.customFind = function(callback){
    console.log(callback, this)
    for(let i = 0; i < this.length; i++){
        if(isEven(this[i])){
            return this[i]
        }         
    }
    return undefined
}

const isEven = (currentElement) => {
    return currentElement % 2 === 0
}

let arr = [1,2,3,4,5]
let elem = arr.customFind(isEven)

console.log(elem)