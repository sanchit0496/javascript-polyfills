let str = 'helloworldyeah'
let str1 = str.replace('world', 'there')

console.log(str1)

String.prototype.customReplace = function(...args){
    let inputstr = this
    let startindex = inputstr.indexOf(args[0])
    console.log(inputstr.indexOf(args[0]))
    console.log(args)
    console.log(this)
   
    return this.substring(0, startindex) + args[1] + this.substring(startindex + args[1].length, this.length)
}

let str12 = str.customReplace('world', 'there')

console.log(str12)