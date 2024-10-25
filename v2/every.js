const arr = [1,2,3,4,5]  


const ans = arr.every((item) => item > 0)
console.log(ans)

Array.prototype.customEvery = function(callback){

    if(!callback){
        throw('callback aint defined bro')
    }

    if(typeof callback !== 'function'){
        throw('callback aint a function bro')
    }

    console.log(callback, this)
    let arr = this
    for(let i = 0; i < arr.length; i++){ 
        if(!callback(arr[i])){
            return false;
        }
    }
    return true
}

const ans1 = arr.customEvery((item) => item > 0)
console.log(ans1)