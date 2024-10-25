const arr = [1,2,3,4,5]


const arr1 = arr.map((item) => item*2)

Array.prototype.customMap = function(callback){

    if(!callback){
        throw("callback aint defined bro")
    }

    if(typeof callback !== "function"){
        throw("callback aint a function bro")
    }

    console.log(callback, this)
    let tempArr = []
    let arr = this
    
    for(let i = 0; i < arr.length; i++){
        tempArr.push((callback(arr[i])))
    }
    return tempArr;
}

const arr2 = arr.customMap((item) => item*2)
console.log(arr2)
