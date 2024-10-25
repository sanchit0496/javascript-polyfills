let str = 'hellothere'
console.log(str.slice(0, 5))
console.log(str.slice(5))

String.prototype.customslice = function(...args){
    console.log(args)
    console.log(this)
    let val = ''

    if(args[0] > args[1]){
        return ""
    }

    if(args.length === 1){
        for(let i= args[0]; i< this.length; i++){
            val += this.charAt(i)   
                     
        }
        return val
    }

    for(let i= 0; i< this.length; i++){
        if(i >= args[0] && i < args[1]){
            val += this.charAt(i)
        }
    }
    return val
}

console.log(str.customslice(0,5))
console.log(str.customslice(5))
