const arr = [1,2,3,4,5]
// arr.forEach((item) => console.log(item))

Array.prototype.customForEach = function(callback){
    if(!callback){
        throw("callback aint defined here")
    }
    if(typeof callback !== 'function'){
        throw("aint a function here")
    }
    const arr = this
    for(let i = 0; i < arr.length; i++){
        callback.call(arr[i], i, arr)
    }
}


arr.customForEach()

arr.customForEach({})

arr.customForEach((item, index, self) => {
    console.log('item', item, index, self, "data")
})