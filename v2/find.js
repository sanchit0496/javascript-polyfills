const arr = [1,2,4,5,6]


const ans = arr.find((item) => item > 4)
console.log(ans)

Array.prototype.customFind = function(callback){
    
    if(!callback){
        throw('callback aint defined here')
    }


    if(typeof callback !== 'function'){
        throw('callback aint a function here')
    }

    console.log(callback, this)
    let arr = this

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            return arr[i]
        }
    }
}

const ans1 = arr.customFind((item) => item > 1)
console.log(ans1)