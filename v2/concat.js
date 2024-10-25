let str1 = 'hello'
let str2 = 'there'

console.log(str1.concat(str2))

String.prototype.customConcat = function(...args){
    console.log(args, this)
    return this + args;
}

console.log(str1.customConcat(str2))
