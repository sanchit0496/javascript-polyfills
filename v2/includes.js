let str = 'hello there'
console.log(str.includes('hello'))
console.log(str.includes('hu'))

String.prototype.customIncludes = function(args){
    console.log('args', args, this)
    return this.includes(args)
}

console.log(str.customIncludes('hello'))
console.log(str.customIncludes('hu'))
