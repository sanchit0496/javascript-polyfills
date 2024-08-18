console.log('hello')


String.prototype.customStringIncludes = function(searchString){
    console.log(searchString, this)
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(this.substring(i, searchString.length).toLowerCase() === searchString.toLowerCase()){
                console.log('found')
                return true
            }
        }
    }
    return false
}



let mainString = 'HelloThere'
let searchString = 'hello'
let boolVal =  mainString.customStringIncludes(searchString)
console.log(boolVal);