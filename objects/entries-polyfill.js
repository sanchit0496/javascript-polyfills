console.log('hello')

Object.prototype.customEntries = function(obj){
    console.log(obj)
    let result  = []
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]])
        }
    }
    return result;
}

let obj1 = {
    name: 'Alice',
    mars: 100
}

console.log(Object.customEntries(obj1))