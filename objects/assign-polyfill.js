console.log('hello')


Object.prototype.customAssign = function(target, source){
    console.log(target, source)
    for(let key in source){
        if(source.hasOwnProperty(key)){
            console.log('here')
            target[key] = source[key]
        }
    }
    return target
}

const target = {a: 1}
const source = {b:2, c:3}

console.log(Object.customAssign(target, source))