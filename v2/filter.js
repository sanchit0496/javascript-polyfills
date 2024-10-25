const arr = [1,2,3,4,5]


const arr1 = arr.filter((item) => item%2 == 0)
console.log(arr1)

Array.prototype.customFilter = function(callback){
    if(!callback){
        throw('aint a callback here')
    }
    if(typeof callback !== 'function'){
        throw('aint a function here')
    }

    console.log(callback, this)
    let tempArr  = []
    let arr = this

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i)){
            tempArr.push(arr[i])
        }        
    }
    return tempArr

}

const arr2 = arr.customFilter((item, index) =>  item%2 == 0)
console.log(arr2)