const arr = [1,2,3,4,5]
console.log(arr)

const ans = arr.reduce((accumulator, item) => {
    return item + accumulator
}, 0)
console.log(ans)


Array.prototype.customReduce = function(callback, accumulator){



    if(!callback){
        throw('callback aint defined here')
    }

    if(typeof callback !== 'function'){
        throw('callback aint a function here')
    }

    console.log(callback, this, accumulator)
    
    
    let ans = accumulator;
    let arr = this
    for(let i = 0; i < arr.length; i++){
        ans += callback(accumulator, arr[i])
    }
    return ans
}   

const ans1 = arr.customReduce((accumulator, item) => {
    return item + accumulator
}, 0)
console.log(ans1)