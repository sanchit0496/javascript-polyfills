let str = 'hellothere'
console.log(str.indexOf('e', 5))  
console.log(str.indexOf('ello', 5))  


String.prototype.customindexOf = function(...args){
    let str = this
    let searchTerm = args[0]
    let fromIndex = args[1]
    for(let i = fromIndex; i < str.length; i++){
        if(str.substring(i, i + searchTerm.length) == searchTerm){
            return i;    

        }
    }
    return -1;

}

console.log(str.customindexOf('e', 5))
console.log(str.customindexOf('ello', 5))
