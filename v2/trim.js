let str = '  hello  '
console.log(str.length)

String.prototype.customTrim = function(){
    console.log(this)
    let temp = ''
    let left = 0
    let right = this.length - 1;
    let lp = 0
    let rp = this.length - 1;
   
    while(left < this.length){
     if(this.charAt(left)  != ' '){
            lp = left
            break;
        }    
     left++  
    }
   
    while(right >= 0){
        if(this.charAt(right)  != ' '){
            rp = right
            break;
        }    
        right--
    }
    console.log(lp, rp)
    return this.substring(lp, right+1)
   
}

console.log(str.customTrim())