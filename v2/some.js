const arr = [1,2,3,4,5]


const ans = arr.some((item) => item > 1)
console.log(ans)

Array.prototype.customSome = function(callback){

    if(!callback){
        throw('callback aint defined bro')
    }

    if(typeof callback !== 'function'){
        throw('callback aint a function here')
    }
    
    console.log(callback, this)
    let arr = this
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) return true
    }
    return false
}


const ans1 = arr.customSome((item) => item > 1)
console.log(ans1)