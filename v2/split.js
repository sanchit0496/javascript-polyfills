let str = 'hello_world_hello_there_okay'

String.prototype.customSplit = function(splitter){
    let ar  = []
   
    if(splitter === ''){
        for(let i = 0; i < this.length; i++){
            ar.push(this.charAt(i))
        }
        return ar
    }
    let current = 0;
    let temp = ''
   
    while(current < this.length){
        if(this.charAt(current) == splitter){
           
            ar.push(temp)
            temp = ''
        }else{
            temp += this.charAt(current)
        }
        current++
    }
    return ar;
}



let arr1 = str.customSplit("_")
console.log('arr1', arr1)


