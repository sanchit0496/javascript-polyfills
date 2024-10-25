let str = 'Aryan'
console.log(str.charAt(1))

String.prototype.customCharAt = function(index){
    console.log(index, this)
    let temp = this
    if(index < 0 || index > temp.length) return "";
    return temp[index];
}   

console.log(str.customCharAt(1))