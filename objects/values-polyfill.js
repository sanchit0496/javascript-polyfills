console.log('hello there')


Object.prototype.customValues = function(obj){
    console.log(obj)
    let res = []
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            res.push(obj[key])
        }
        console.log(key)
    }
    return res;
}

let obj = {
    name: 'hello',
    marks: 100
}

console.log(Object.customValues(obj))